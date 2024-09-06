<?php

/*
 * This file is part of blomstra/web3.
 *
 * Copyright (c) 2022 Blomstra Ltd.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Blomstra\Web3;

use Fig\Http\Message\StatusCodeInterface;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\User\DisplayName\UsernameDriver;
use Blomstra\Web3\Driver\CustomUsernameDriver;
use Flarum\Extend;
use Flarum\Frontend\Document;
use Illuminate\Support\Str;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less')
        ->content(function (Document $document) {
            $document->payload['ffiEnabled'] = ffiIsEnabled();
        }),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Policy())
        ->modelPolicy(Web3Account::class, Access\Web3AccountPolicy::class),

    (new Extend\Validator(\Flarum\User\UserValidator::class))
        ->configure(function ($flarumValidator, $validator) {
            $rules = $validator->getRules();

            // The validator is sometimes used to validate *only* other attributes, in which case the username rule won't be present. We can skip this situation by returning early
            if (!array_key_exists('username', $rules)) {
                return;
            }

            // Loop through all Laravel validation rules until we find the one we're looking to replace
            $rules['username'] = array_map(function (string $rule) {
                // Example regex change: allow dots in usernames
//                if (\Illuminate\Support\Str::startsWith($rule, 'regex:')) {
//                    return 'regex:/^[.a-z0-9_-]+$/i';
//                }

                // Example min length change
                if (\Illuminate\Support\Str::startsWith($rule, 'max:')) {
                    return 'max:50';
                }

                // If it's not one of the rules we're looking for, we keep it as-it
                return $rule;
            }, $rules['username']);

            $validator->setRules($rules);
        }),
    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->attributes(function (CurrentUserSerializer $serializer, $user, array $attributes) {
            if (Str::length($user->username)>10) {
                $attributes['displayName'] = Str::limit($user->username, 6, '...') . Str::substr($user->username, -4);

            }
            return $attributes;
        }),
    (new Extend\User())
        ->displayNameDriver('custom', CustomUsernameDriver::class),

    (new Extend\Event())
        ->listen(Saving::class, function (Saving $event) {
            $event->user->display_name_driver = 'custom';
        }),

    (new Extend\Routes('api'))
        ->get('/web3/accounts', 'web3-accounts.index', Api\Controller\ListWeb3AccountsController::class)
        ->post('/web3/accounts', 'web3-accounts.create', Api\Controller\CreateWeb3AccountController::class)
        ->delete('/web3/accounts/{id}', 'web3-accounts.delete', Api\Controller\DeleteWeb3AccountController::class)
        ->post('/web3/token', 'web3-accounts.token', Api\Controller\CreateTokenWithWeb3Account::class)
        ->put('/web3/set-email', 'web3.set-email', Api\Controller\SetUserEmailController::class),

    (new Extend\Routes('forum'))
        ->post('/web3/login', 'web3-accounts.login', Forum\Controller\LoginWithWeb3AccountController::class)
        ->post('/web3/register', 'web3-accounts.register', Forum\Controller\RegisterWithWeb3AccountController::class),

    (new Extend\ModelVisibility(Web3Account::class))
        ->scope(Access\ScopeAccountVisiblity::class),

    (new Extend\ServiceProvider())
        ->register(Web3ServiceProvider::class),

    (new Extend\ErrorHandling())
        ->status('invalid_crypto_signature', StatusCodeInterface::STATUS_UNAUTHORIZED),

    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->attribute('isEmailFake', function (CurrentUserSerializer $serializer, $user): bool {
            return str_contains($user->email, '@users.noreply');
        }),

    (new Extend\Settings())
        ->default('maojindao55-web3.allow-sign-up', 1)
        ->default('maojindao55-web3.signup-with-email', 1)
        ->default('maojindao55-web3.no-email-signup-message', '')
        ->serializeToForum('maojindao55-web3.allow-sign-up', 'maojindao55-web3.allow-sign-up', 'boolval')
        ->serializeToForum('maojindao55-web3.signup-with-email', 'maojindao55-web3.signup-with-email', 'boolval')
        ->serializeToForum('maojindao55-web3.prioritize-web3-auth-modals', 'maojindao55-web3.prioritize-web3-auth-modals', 'boolval')
        ->serializeToForum('maojindao55-web3.infura-project-id', 'maojindao55-web3.infura-project-id')
        ->serializeToForum('maojindao55-web3.no-email-signup-message', 'maojindao55-web3.no-email-signup-message'),
];
