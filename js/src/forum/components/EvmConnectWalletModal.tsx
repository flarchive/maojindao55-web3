import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import { IConnectWalletModalAttrs } from './ConnectWalletModal';
import Web3Account from '../models/Web3Account';
import type Mithril from 'mithril';
import Component from 'flarum/common/Component';

export interface IEvmConnectWalletModalAttrs extends IConnectWalletModalAttrs {}

export default class EvmConnectWalletModal<
  CustomAttrs extends IEvmConnectWalletModalAttrs = IEvmConnectWalletModalAttrs
> extends Component<CustomAttrs> {
  private currentAddress?: string;

  oninit(vnode: Mithril.Vnode<CustomAttrs, this>) {
    super.oninit(vnode);
    this.connectMetaMask();
  }

  className(): string {
    return 'EvmConnectWalletModal';
  }

  title(): Mithril.Children {
    return app.translator.trans('maojindao55-web3.forum.evm-connect-wallet-modal.title');
  }

  view() {
    if (!this.currentAddress) {
      return <LoadingIndicator />;
    }

    return (
      <div className="ConnectWalletModal-walletKind">
        <div className="ConnectWalletModal-walletKind-title">EVM</div>
        <div className="Form-group">
          <label>{this.currentAddress}</label>
          {app.web3accounts.exists(this.currentAddress) ? (
            <>
              <Button className="Button" onclick={() => this.disconnect(false)}>
                {app.translator.trans('maojindao55-web3.forum.evm-connect-wallet-modal.disconnect')}
              </Button>
              <Button className="Button" onclick={() => this.disconnect(true)}>
                {app.translator.trans('maojindao55-web3.forum.evm-connect-wallet-modal.disconnect-and-unbind')}
              </Button>
            </>
          ) : (
            <Button className="Button" onclick={this.bind.bind(this)}>
              {app.translator.trans(
                app.session.user ? 'maojindao55-web3.forum.evm-connect-wallet-modal.bind' : 'maojindao55-web3.forum.evm-connect-wallet-modal.select'
              )}
            </Button>
          )}
        </div>
      </div>
    );
  }

  async connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.currentAddress = accounts[0];
        await this.bind(); // 直接绑定
        m.redraw();
      } catch (error) {
        console.error('MetaMask connection failed', error);
      }
    } else {
      console.error('MetaMask not found');
    }
  }

  async bind() {
    const provider = window.ethereum;

    try {
      const signature = await provider.request({
        method: 'personal_sign',
        params: [this.attrs.username, this.currentAddress],
      });

      const type = 'eth';
      const source = 'MetaMask';

      if (app.session.user) {
        const savedAccount = await app.store.createRecord<Web3Account>('web3-accounts').save(
          {
            address: this.currentAddress,
            source,
            type,
          },
          {
            errorHandler: this.attrs.onerror.bind(this),
            meta: {
              signature,
            },
          }
        );

        app.web3accounts.push(savedAccount);
      }

      if (this.attrs.onattach) this.attrs.onattach(this.currentAddress!, signature, source, type);
    } catch (error: any) {
      console.error('Could not sign', error);
    }

    m.redraw();
  }

  async disconnect(unbind: boolean) {
    const provider = window.ethereum;

    if (provider?.close) {
      await provider.close();
    }

    const address = this.currentAddress;

    if (unbind) {
      await app.web3accounts.remove(address!);
    }

    delete this.currentAddress;
  }
}
