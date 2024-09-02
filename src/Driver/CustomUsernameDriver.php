<?php
namespace Blomstra\Web3\Driver;

use Flarum\User\User;
use Flarum\User\DisplayName\DriverInterface;
use Illuminate\Support\Str;

class CustomUsernameDriver implements DriverInterface
{
    public function displayName(User $user): string
    {
        $username = $user->username;
        if (Str::length($user->username)<16) {
            return $username;
        }

        return substr($username, 0, 6) . '...' . substr($username, -4);
    }
}
