import app from 'flarum/forum/app';
import BaseSignUpModal from 'flarum/forum/components/SignUpModal';
import type ItemList from 'flarum/common/utils/ItemList';
import ConnectWalletModal from './ConnectWalletModal';
import Button from 'flarum/common/components/Button';
import icon from 'flarum/common/helpers/icon';
import LogInModal from './LogInModal';

export default class SignUpModal extends BaseSignUpModal {
  
  oninit(vnode: Mithril.Vnode<CustomAttrs, this>) {
    super.oninit(vnode);
    this.loading = true;
    this.username('user-airdrop');
  }

  oncreate(vnode: Mithril.VnodeDOM<CustomAttrs, this>) {
    super.oncreate(vnode);
    // 在 oncreate 生命周期钩子中调用 autoSignUp
    this.autoSignUp();
  }

  autoSignUp() {
    // 使用 setTimeout 来延迟显示 ConnectWalletModal
    setTimeout(() => {
      app.modal.show(
        ConnectWalletModal,
        {
          username: this.username(),
          onattach: (address: string, signature: string, source: string, type: string) => {
            app.modal.close();

            app
              .request({
                method: 'POST',
                url: app.forum.attribute('baseUrl') + '/web3/register',
                body: {
                  username: this.username(),
                  email: this.email(),
                  address,
                  signature,
                  type,
                  source,
                },
                errorHandler: this.onerror.bind(this),
              })
              .then(() => window.location.reload(), this.loaded.bind(this))
              .finally(() => (this.loading = false));
          },
          onclose: () => (this.loading = false),
        },
        true
      );
    }, 0);
  }

  title() {
    return app.translator.trans('maojindao55-web3.forum.sign-up.with-wallet');
  }

  content() {
    return [
      <div className="Modal-body">
        <div className="Form Form--centered">{this.fields().toArray()}</div>
      </div>,
      <div className="Modal-footer">{this.footer()}</div>,
    ];
  }

  fields(): ItemList<unknown> {
    const items = super.fields();

    const signUpWithEmail = app.forum.attribute<boolean>('maojindao55-web3.signup-with-email');

    items.remove('password');

    if (!signUpWithEmail) {
      items.remove('email');
      // user not need input the username
      items.remove('username');
    }

    items.setContent(
      'submit',
      <Button
        className="Button Button--block Button--primary"
        type="submit"
        disabled={false}
        loading={this.loading}
      >
        {app.translator.trans('maojindao55-web3.forum.sign-up.select-wallet-account', {
          rightArrow: icon('fas fa-arrow-right'),
        })}
      </Button>
    );

    return items;
  }

  footer() {
    return [
      app.forum.attribute('allowSignUp') ? (
        <p className="LogInModal-forgotPassword">
          <a onclick={() => app.modal.show(BaseSignUpModal)}>{app.translator.trans('maojindao55-web3.forum.sign-up.basic-signup-link')}</a>
        </p>
      ) : (
        <></>
      ),

      <p className="SignUpModal-logIn">
        {app.translator.trans('core.forum.sign_up.log_in_text', { a: <a onclick={() => app.modal.show(LogInModal)} /> })}
      </p>,
    ];
  }

  onsubmit(e: SubmitEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.loading = true;
    this.username('user-airdrop')
    console.log(e, this.username())
    app.modal.show(
      ConnectWalletModal,
      {
        username: this.username(),
        onattach: (address: string, signature: string, source: string, type: string) => {
          app.modal.close();

          app
            .request({
              method: 'POST',
              url: app.forum.attribute('baseUrl') + '/web3/register',
              body: {
                username: this.username(),
                email: this.email(),
                address,
                signature,
                type,
                source,
              },
              errorHandler: this.onerror.bind(this),
            })
            .then(() => window.location.reload(), this.loaded.bind(this))
            .finally(() => (this.loading = false));
        },
        onclose: () => (this.loading = false),
      },
      true
    );
  }
}
