/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/AttachedWallets.tsx":
/*!**************************************************!*\
  !*** ./src/forum/components/AttachedWallets.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttachedWallets)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ConnectWalletModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConnectWalletModal */ "./src/forum/components/ConnectWalletModal.tsx");









var AttachedWallets = /*#__PURE__*/function (_Component) {
  function AttachedWallets() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AttachedWallets, _Component);
  var _proto = AttachedWallets.prototype;
  _proto.view = function view() {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3).loaded) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3.load().then(function () {
        return m.redraw();
      });
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null);
    }
    return m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Settings-wallets",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans("maojindao55-web3.forum.settings.wallets_heading")
    }, this.listAccountsView(), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      icon: "fas fa-wallet",
      className: "Button",
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show(_ConnectWalletModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
          username: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().session.user.username()
        });
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('maojindao55-web3.forum.settings.wallet-connect-button')));
  };
  _proto.listAccountsView = function listAccountsView() {
    var _this = this;
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3accounts.loaded()) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3accounts.load();
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null);
    }
    return m("div", {
      className: "AttachedWallets-list"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3accounts.all().map(function (account) {
      return _this.accountView(account);
    }));
  };
  _proto.accountView = function accountView(account) {
    var _this2 = this;
    var isEth = account.type() === 'eth';
    var _app$web3$loadedModul = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3.loadedModules(),
      getProviderInfoByName = _app$web3$loadedModul.getProviderInfoByName,
      getWalletBySource = _app$web3$loadedModul.getWalletBySource,
      encodeAddress = _app$web3$loadedModul.encodeAddress,
      hexToU8a = _app$web3$loadedModul.hexToU8a;
    var providerInfo = isEth ? getProviderInfoByName(account.source()) : getWalletBySource(account.source());
    var logoSrc = isEth ? providerInfo == null ? void 0 : providerInfo.logo : providerInfo == null ? void 0 : providerInfo.logo.src;
    var walletName = isEth ? providerInfo == null ? void 0 : providerInfo.name : providerInfo == null ? void 0 : providerInfo.title;
    var address = isEth ? account.address() : encodeAddress(hexToU8a(account.address()));
    return m("div", {
      className: "AttachedWallets-account"
    }, m("div", {
      className: "AttachedWallets-account-icon"
    }, m("img", {
      src: logoSrc,
      alt: ""
    })), m("div", {
      className: "AttachedWallets-account-content"
    }, m("div", {
      className: "AttachedWallets-account-wallet"
    }, walletName), m("div", {
      className: "AttachedWallets-account-address"
    }, address)), m("div", {
      className: "AttachedWallets-account-actions"
    }, m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('maojindao55-web3.forum.settings.unbind')
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--icon",
      icon: "fas fa-unlink",
      onclick: function onclick() {
        return _this2.unbind(account);
      }
    }))));
  };
  _proto.unbind = function unbind(account) {
    if (confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('maojindao55-web3.forum.settings.unbind_confirm')))) {
      account["delete"]().then(function () {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().web3accounts.remove(account.address());
        m.redraw();
      });
    }
  };
  return AttachedWallets;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ChangeEmailModal.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/ChangeEmailModal.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeEmailModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/ChangeEmailModal */ "flarum/forum/components/ChangeEmailModal");
/* harmony import */ var flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_3__);




var ChangeEmailModal = /*#__PURE__*/function (_BaseChangeEmailModal) {
  function ChangeEmailModal() {
    return _BaseChangeEmailModal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ChangeEmailModal, _BaseChangeEmailModal);
  var _proto = ChangeEmailModal.prototype;
  _proto.content = function content() {
    if (this.success) {
      return _BaseChangeEmailModal.prototype.content.call(this);
    }
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("input", {
      type: "email",
      name: "email",
      className: "FormControl",
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.email(),
      bidi: this.email,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      className: 'Button Button--primary Button--block',
      type: 'submit',
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.change_email.submit_button')))));
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();

    // If the user hasn't actually entered a different email address, we don't
    // need to do anything. Woot!
    if (this.email() === flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.email()) {
      this.hide();
      return;
    }
    this.loading = true;
    this.alertAttrs = null;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/web3/set-email',
      method: 'PUT',
      body: {
        data: {
          email: this.email()
        }
      },
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      _this.success = true;
    })["catch"](function () {}).then(this.loaded.bind(this));
  };
  return ChangeEmailModal;
}((flarum_forum_components_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/ConnectWalletModal.tsx":
/*!*****************************************************!*\
  !*** ./src/forum/components/ConnectWalletModal.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectWalletModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PolkadotConnectWalletModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PolkadotConnectWalletModal */ "./src/forum/components/PolkadotConnectWalletModal.tsx");
/* harmony import */ var _EvmConnectWalletModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EvmConnectWalletModal */ "./src/forum/components/EvmConnectWalletModal.tsx");






var nameToComponent = {
  evm: _EvmConnectWalletModal__WEBPACK_IMPORTED_MODULE_5__["default"],
  polkadot: _PolkadotConnectWalletModal__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var ConnectWalletModal = /*#__PURE__*/function (_Modal) {
  function ConnectWalletModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.current = null;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConnectWalletModal, _Modal);
  var _proto = ConnectWalletModal.prototype;
  _proto.hide = function hide() {
    this.attrs.onclose();
    _Modal.prototype.hide.call(this);
  };
  _proto.className = function className() {
    return 'ConnectWalletModal';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.connect-wallet-modal.title');
  };
  _proto.content = function content() {
    var _this2 = this;
    if (this.current || (this.current = "evm")) {
      var ComponentName = nameToComponent[this.current];
      return m("div", {
        className: "Modal-body"
      }, m("div", {
        className: "Form--centered",
        key: 1
      }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "Button Button--text Button--block WalletAccounts-goback",
        icon: "fas fa-arrow-left",
        onclick: function onclick() {
          return _this2.current = null;
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.connect-wallet-modal.goback'))), m(ComponentName, Object.assign({
        onerror: this.onerror.bind(this)
      }, this.attrs, {
        key: this.current
      })));
    }
    return m("div", {
      className: "Modal-body"
    }, this.selectionView());
  };
  _proto.selectionView = function selectionView() {
    var _this3 = this;
    return m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button maojindao55-web3-Button--polkadot Button--block",
      onclick: function onclick() {
        return _this3.current = 'polkadot';
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.connect-wallet-modal.polkadot-wallets')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button maojindao55-web3-Button--evm Button--block",
      onclick: function onclick() {
        return _this3.current = 'evm';
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.connect-wallet-modal.evm-wallets'))));
  };
  return ConnectWalletModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/EvmConnectWalletModal.tsx":
/*!********************************************************!*\
  !*** ./src/forum/components/EvmConnectWalletModal.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EvmConnectWalletModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__);







var EvmConnectWalletModal = /*#__PURE__*/function (_Component) {
  function EvmConnectWalletModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.currentAddress = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EvmConnectWalletModal, _Component);
  var _proto = EvmConnectWalletModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.connectMetaMask();
  };
  _proto.className = function className() {
    return 'EvmConnectWalletModal';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.evm-connect-wallet-modal.title');
  };
  _proto.view = function view() {
    var _this2 = this;
    if (!this.currentAddress) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null);
    }
    return m("div", {
      className: "ConnectWalletModal-walletKind"
    }, m("div", {
      className: "ConnectWalletModal-walletKind-title"
    }, "EVM"), m("div", {
      className: "Form-group"
    }, m("label", null, this.currentAddress), flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().web3accounts.exists(this.currentAddress) ? m('[', null, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button",
      onclick: function onclick() {
        return _this2.disconnect(false);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.evm-connect-wallet-modal.disconnect')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button",
      onclick: function onclick() {
        return _this2.disconnect(true);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('maojindao55-web3.forum.evm-connect-wallet-modal.disconnect-and-unbind'))) : m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button",
      onclick: this.bind.bind(this)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans((flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session).user ? 'maojindao55-web3.forum.evm-connect-wallet-modal.bind' : 'maojindao55-web3.forum.evm-connect-wallet-modal.select'))));
  };
  _proto.connectMetaMask = /*#__PURE__*/function () {
    var _connectMetaMask = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof window.ethereum !== 'undefined')) {
              _context.next = 16;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return window.ethereum.request({
              method: 'eth_requestAccounts'
            });
          case 4:
            accounts = _context.sent;
            this.currentAddress = accounts[0];
            _context.next = 8;
            return this.bind();
          case 8:
            // 直接绑定
            m.redraw();
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.error('MetaMask connection failed', _context.t0);
          case 14:
            _context.next = 17;
            break;
          case 16:
            console.error('MetaMask not found');
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[1, 11]]);
    }));
    function connectMetaMask() {
      return _connectMetaMask.apply(this, arguments);
    }
    return connectMetaMask;
  }();
  _proto.bind = /*#__PURE__*/function () {
    var _bind = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var provider, signature, type, source, savedAccount;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            provider = window.ethereum;
            _context2.prev = 1;
            _context2.next = 4;
            return provider.request({
              method: 'personal_sign',
              params: [this.attrs.username, this.currentAddress]
            });
          case 4:
            signature = _context2.sent;
            type = 'eth';
            source = 'MetaMask';
            if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().session).user) {
              _context2.next = 12;
              break;
            }
            _context2.next = 10;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.createRecord('web3-accounts').save({
              address: this.currentAddress,
              source: source,
              type: type
            }, {
              errorHandler: this.attrs.onerror.bind(this),
              meta: {
                signature: signature
              }
            });
          case 10:
            savedAccount = _context2.sent;
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().web3accounts.push(savedAccount);
          case 12:
            if (this.attrs.onattach) this.attrs.onattach(this.currentAddress, signature, source, type);
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            console.error('Could not sign', _context2.t0);
          case 18:
            m.redraw();
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[1, 15]]);
    }));
    function bind() {
      return _bind.apply(this, arguments);
    }
    return bind;
  }();
  _proto.disconnect = /*#__PURE__*/function () {
    var _disconnect = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(unbind) {
      var provider, address;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            provider = window.ethereum;
            if (!(provider != null && provider.close)) {
              _context3.next = 4;
              break;
            }
            _context3.next = 4;
            return provider.close();
          case 4:
            address = this.currentAddress;
            if (!unbind) {
              _context3.next = 8;
              break;
            }
            _context3.next = 8;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().web3accounts.remove(address);
          case 8:
            delete this.currentAddress;
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function disconnect(_x) {
      return _disconnect.apply(this, arguments);
    }
    return disconnect;
  }();
  return EvmConnectWalletModal;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default()));


/***/ }),

/***/ "./src/forum/components/LogInButton.tsx":
/*!**********************************************!*\
  !*** ./src/forum/components/LogInButton.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogInButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/LogInButton */ "flarum/forum/components/LogInButton");
/* harmony import */ var flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_1__);


var LogInButton = /*#__PURE__*/function (_BaseLogInButton) {
  function LogInButton() {
    return _BaseLogInButton.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInButton, _BaseLogInButton);
  LogInButton.initAttrs = function initAttrs(attrs) {
    attrs.className = (attrs.className || '') + ' LogInButton';
  };
  return LogInButton;
}((flarum_forum_components_LogInButton__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/LogInModal.tsx":
/*!*********************************************!*\
  !*** ./src/forum/components/LogInModal.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogInModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConnectWalletModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectWalletModal */ "./src/forum/components/ConnectWalletModal.tsx");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SignUpModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUpModal */ "./src/forum/components/SignUpModal.tsx");







var LogInModal = /*#__PURE__*/function (_BaseLogInModal) {
  function LogInModal() {
    return _BaseLogInModal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInModal, _BaseLogInModal);
  var _proto = LogInModal.prototype;
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.log-in.with-wallet');
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, this.fields().toArray())), m("div", {
      className: "Modal-footer"
    }, this.footer())];
  };
  _proto.fields = function fields() {
    var items = _BaseLogInModal.prototype.fields.call(this);
    items.remove('password');
    //隐藏用户名input
    items.remove('identification');
    items.setContent('submit', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--block Button--primary",
      type: "submit",
      disabled: false,
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.log-in.select-wallet-account', {
      rightArrow: flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-arrow-right')
    })));
    return items;
  };
  _proto.footer = function footer() {
    return [m("p", {
      className: "LogInModal-forgotPassword"
    }, m("a", {
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default()));
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.log-in.basic-login-link'))), flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maojindao55-web3.allow-sign-up') ? m("p", {
      className: "LogInModal-signUp"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.log_in.sign_up_text', {
      a: m("a", {
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_SignUpModal__WEBPACK_IMPORTED_MODULE_6__["default"]);
        }
      })
    })) : ''];
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    e.stopPropagation();
    this.loading = true;
    this.identification('user-airdrop');
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_ConnectWalletModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      username: this.identification(),
      onattach: function onattach(address, signature) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.close();
        _this.identification(address);
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
          method: 'POST',
          url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + '/web3/login',
          body: {
            identification: _this.identification(),
            address: address,
            signature: signature,
            remember: _this.remember()
          },
          errorHandler: _this.onerror.bind(_this)
        }).then(function () {
          return window.location.reload();
        }, _this.loaded.bind(_this))["finally"](function () {
          return _this.loading = false;
        });
      },
      onclose: function onclose() {
        return _this.loading = false;
      }
    }, true);
  };
  return LogInModal;
}((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/PolkadotConnectWalletModal.tsx":
/*!*************************************************************!*\
  !*** ./src/forum/components/PolkadotConnectWalletModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PolkadotConnectWalletModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _WalletAccounts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WalletAccounts */ "./src/forum/components/WalletAccounts.tsx");









var PolkadotConnectWalletModal = /*#__PURE__*/function (_Component) {
  function PolkadotConnectWalletModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.selectedWallet = null;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PolkadotConnectWalletModal, _Component);
  var _proto = PolkadotConnectWalletModal.prototype;
  _proto.className = function className() {
    return 'PolkadotConnectWalletModal';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.polkadot-connect-wallet-modal.title');
  };
  _proto.view = function view() {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().web3).loaded) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().web3.load().then(function () {
        return m.redraw();
      });
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default()), null);
    }
    return m("div", {
      className: "Form"
    }, this.selectedWallet ? this.selectedWalletView() : this.walletSelectionView());
  };
  _proto.walletSelectionView = function walletSelectionView() {
    return this.walletKindItems().toArray();
  };
  _proto.walletKindItems = function walletKindItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default())();
    var _app$web3$loadedModul = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().web3.loadedModules(),
      getDotsamaWallets = _app$web3$loadedModul.getDotsamaWallets;
    var wallets = {
      key: 'polkadot',
      title: 'Polkadot',
      wallets: getDotsamaWallets()
    };
    items.add('polkadot', m("div", {
      className: "Form-group"
    }, this.walletKindView(wallets)));
    return items;
  };
  _proto.walletKindView = function walletKindView(walletKind, index) {
    var _this2 = this;
    if (index === void 0) {
      index = 0;
    }
    return m("div", {
      className: "ConnectWalletModal-walletKind",
      key: index
    }, m("div", {
      className: "ConnectWalletModal-walletKind-title"
    }, walletKind.title), m("div", {
      className: "ConnectWalletModal-walletKind-list"
    }, walletKind.wallets.map(function (wallet, walletIndex) {
      return _this2.walletView(wallet, walletIndex);
    })));
  };
  _proto.walletView = function walletView(wallet, walletIndex) {
    if (walletIndex === void 0) {
      walletIndex = 0;
    }
    var Tag = wallet.installed ? (flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()) : (flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default());
    var attrs;
    if (!wallet.installed) {
      attrs = {
        href: wallet.installUrl,
        target: '_blank',
        rel: 'noopener noreferrer'
      };
    } else {
      attrs = {
        onclick: this.listWalletAccounts.bind(this, wallet)
      };
    }
    return m(Tag, Object.assign({
      className: "Button PolkadotConnectWalletModal-wallet",
      key: walletIndex
    }, attrs), m("div", {
      className: "PolkadotConnectWalletModal-wallet-logo"
    }, m("img", Object.assign({}, wallet.logo, {
      alt: ""
    }))), m("div", {
      className: "PolkadotConnectWalletModal-wallet-title"
    }, wallet.title), m("div", {
      className: "PolkadotConnectWalletModal-wallet-indicator"
    }, wallet.installed ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-arrow-right') : flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-download')));
  };
  _proto.selectedWalletView = function selectedWalletView() {
    return m(_WalletAccounts__WEBPACK_IMPORTED_MODULE_8__["default"], {
      username: this.attrs.username,
      wallet: this.selectedWallet,
      onback: this.listWallets.bind(this),
      onattach: this.attrs.onattach
    });
  };
  _proto.listWallets = function listWallets() {
    this.selectedWallet = null;
  };
  _proto.listWalletAccounts = function listWalletAccounts(wallet) {
    this.selectedWallet = wallet;
  };
  return PolkadotConnectWalletModal;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_6___default()));


/***/ }),

/***/ "./src/forum/components/SignUpModal.tsx":
/*!**********************************************!*\
  !*** ./src/forum/components/SignUpModal.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConnectWalletModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectWalletModal */ "./src/forum/components/ConnectWalletModal.tsx");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LogInModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LogInModal */ "./src/forum/components/LogInModal.tsx");







var SignUpModal = /*#__PURE__*/function (_BaseSignUpModal) {
  function SignUpModal() {
    return _BaseSignUpModal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SignUpModal, _BaseSignUpModal);
  var _proto = SignUpModal.prototype;
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.sign-up.with-wallet');
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, this.fields().toArray())), m("div", {
      className: "Modal-footer"
    }, this.footer())];
  };
  _proto.fields = function fields() {
    var items = _BaseSignUpModal.prototype.fields.call(this);
    var signUpWithEmail = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('maojindao55-web3.signup-with-email');
    items.remove('password');
    if (!signUpWithEmail) {
      items.remove('email');
      // user not need input the username
      items.remove('username');
    }
    items.setContent('submit', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--block Button--primary",
      type: "submit",
      disabled: false,
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.sign-up.select-wallet-account', {
      rightArrow: flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-arrow-right')
    })));
    return items;
  };
  _proto.footer = function footer() {
    return [flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('allowSignUp') ? m("p", {
      className: "LogInModal-forgotPassword"
    }, m("a", {
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default()));
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('maojindao55-web3.forum.sign-up.basic-signup-link'))) : m('[', null), m("p", {
      className: "SignUpModal-logIn"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.sign_up.log_in_text', {
      a: m("a", {
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_LogInModal__WEBPACK_IMPORTED_MODULE_6__["default"]);
        }
      })
    }))];
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    e.stopPropagation();
    this.loading = true;
    this.username('user-airdrop');
    console.log(e, this.username());
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_ConnectWalletModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      username: this.username(),
      onattach: function onattach(address, signature, source, type) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.close();
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
          method: 'POST',
          url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + '/web3/register',
          body: {
            username: _this.username(),
            email: _this.email(),
            address: address,
            signature: signature,
            type: type,
            source: source
          },
          errorHandler: _this.onerror.bind(_this)
        }).then(function () {
          return window.location.reload();
        }, _this.loaded.bind(_this))["finally"](function () {
          return _this.loading = false;
        });
      },
      onclose: function onclose() {
        return _this.loading = false;
      }
    }, true);
  };
  return SignUpModal;
}((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/WalletAccounts.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/WalletAccounts.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletAccounts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);









var WalletAccounts = /*#__PURE__*/function (_Component) {
  function WalletAccounts() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.accounts = null;
    _this.loading = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WalletAccounts, _Component);
  var _proto = WalletAccounts.prototype;
  _proto.view = function view() {
    var _this2 = this,
      _this$accounts;
    if (this.accounts === null) {
      this.attrs.wallet.getAccounts().then(function (accs) {
        _this2.accounts = accs || [];
        m.redraw();
      });
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default()), null);
    }
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('WalletAccounts', {
        'WalletAccounts--loading': this.loading
      })
    }, m("div", {
      className: "Form--centered"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--text Button--block WalletAccounts-goback",
      icon: "fas fa-arrow-left",
      onclick: function onclick() {
        return _this2.attrs.onback();
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('maojindao55-web3.forum.polkadot-connect-wallet-modal.goback'))), m("div", {
      className: "WalletAccounts-selectedWallet"
    }, m("div", {
      className: "WalletAccounts-selectedWallet-title"
    }, this.attrs.wallet.title), m("div", {
      className: "WalletAccounts-selectedWallet-list"
    }, (_this$accounts = this.accounts) == null ? void 0 : _this$accounts.map(function (account, accountIndex) {
      return _this2.accountView(account, accountIndex);
    }))));
  };
  _proto.accountView = function accountView(account, accountIndex) {
    var _app$web3$loadedModul = flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().web3.loadedModules(),
      u8aToHex = _app$web3$loadedModul.u8aToHex,
      decodeAddress = _app$web3$loadedModul.decodeAddress;
    var isAttached = flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().web3accounts.exists(u8aToHex(decodeAddress(account.address)));
    var bindMessage = 'maojindao55-web3.forum.polkadot-connect-wallet-modal.';
    switch (isAttached) {
      case true:
        bindMessage += 'unattach_address';
        break;
      case false:
        if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session).user) bindMessage += 'attach_address';
        // For Login/Signup processes.
        else bindMessage += 'select';
    }
    return m("div", {
      key: accountIndex,
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('WalletAccounts-account', {
        'WalletAccounts-account--attached': isAttached,
        'WalletAccounts-account--unattached': !isAttached
      })
    }, m("div", {
      className: "WalletAccounts-account-info"
    }, m("div", {
      className: "WalletAccounts-account-title"
    }, account.name), m("div", {
      className: "WalletAccounts-account-address"
    }, account.address)), m("div", {
      className: "WalletAccounts-account-actions"
    }, m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans(bindMessage)
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('Button Button--icon', {
        'Button--primary': !isAttached,
        'Button--danger': isAttached
      }),
      icon: isAttached ? 'fas fa-unlink' : 'fas fa-plus',
      onclick: !isAttached ? this.connectAccount.bind(this, account) : this.disconnectAccount.bind(this, account.address)
    }))));
  };
  _proto.connectAccount = /*#__PURE__*/function () {
    var _connectAccount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(account) {
      var wallet, _yield$app$web3$all, stringToHex, u8aToHex, decodeAddress, signer, _yield, signature, hexAddress, type, source, savedAccount;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            wallet = account.wallet;
            if (!this.loading) {
              this.loading = true;
              m.redraw();
            }
            _context.next = 4;
            return wallet.enable();
          case 4:
            if (!wallet.signer) {
              _context.next = 34;
              break;
            }
            _context.next = 7;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().web3.all();
          case 7:
            _yield$app$web3$all = _context.sent;
            stringToHex = _yield$app$web3$all.stringToHex;
            u8aToHex = _yield$app$web3$all.u8aToHex;
            decodeAddress = _yield$app$web3$all.decodeAddress;
            _context.prev = 11;
            signer = wallet.signer; // Trigger the extension popup
            _context.next = 15;
            return signer.signRaw({
              type: 'bytes',
              data: stringToHex(this.attrs.username),
              address: account.address
            });
          case 15:
            _yield = _context.sent;
            signature = _yield.signature;
            hexAddress = u8aToHex(decodeAddress(account.address)); // @ts-ignore
            type = account.type;
            source = this.attrs.wallet.extensionName;
            if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().session).user) {
              _context.next = 25;
              break;
            }
            _context.next = 23;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().store.createRecord('web3-accounts').save({
              address: hexAddress,
              source: source,
              type: type
            }, {
              errorHandler: this.onerror.bind(this),
              meta: {
                signature: signature
              }
            });
          case 23:
            savedAccount = _context.sent;
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().web3accounts.push(savedAccount);
          case 25:
            if (this.attrs.onattach) this.attrs.onattach(hexAddress, signature, source, type);
            _context.next = 32;
            break;
          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](11);
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().alerts.show({
              type: 'error'
            }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('maojindao55-web3.forum.connect-wallet-modal.could-not-sign'));
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().alerts.show({
              type: 'error'
            }, _context.t0.message);
          case 32:
            this.loading = false;
            m.redraw();
          case 34:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[11, 28]]);
    }));
    function connectAccount(_x) {
      return _connectAccount.apply(this, arguments);
    }
    return connectAccount;
  }();
  _proto.disconnectAccount = /*#__PURE__*/function () {
    var _disconnectAccount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(address) {
      var _app$store$getBy;
      var _yield$app$web3$all2, u8aToHex, decodeAddress;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().web3.all();
          case 2:
            _yield$app$web3$all2 = _context2.sent;
            u8aToHex = _yield$app$web3$all2.u8aToHex;
            decodeAddress = _yield$app$web3$all2.decodeAddress;
            address = u8aToHex(decodeAddress(address));
            _context2.next = 8;
            return (_app$store$getBy = flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().store.getBy('web3-accounts', 'address', address)) == null ? void 0 : _app$store$getBy["delete"]();
          case 8:
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().web3accounts.remove(address);
            m.redraw();
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function disconnectAccount(_x2) {
      return _disconnectAccount.apply(this, arguments);
    }
    return disconnectAccount;
  }();
  _proto.onerror = function onerror(error) {
    if (error.status === 401) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().alerts.show({
        type: 'error'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('maojindao55-web3.forum.connect-wallet-modal.signature-invalid'));
    } else {
      throw error;
    }
  };
  return WalletAccounts;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/components/alertNoEmail.js":
/*!**********************************************!*\
  !*** ./src/forum/components/alertNoEmail.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ alertNoEmail)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChangeEmailModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChangeEmailModal */ "./src/forum/components/ChangeEmailModal.tsx");






/**
 * Shows an alert if the user signed up with no email address.
 */
function alertNoEmail(app) {
  var user = app.session.user;
  var message = app.forum.attribute('maojindao55-web3.no-email-signup-message');
  if (!message || !user || !user.isEmailFake()) return;
  var ContainedAlert = /*#__PURE__*/function (_Alert) {
    function ContainedAlert() {
      return _Alert.apply(this, arguments) || this;
    }
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ContainedAlert, _Alert);
    var _proto = ContainedAlert.prototype;
    _proto.view = function view(vnode) {
      var vdom = _Alert.prototype.view.call(this, vnode);
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vdom, {
        children: [m("div", {
          className: "container"
        }, vdom.children)]
      });
    };
    return ContainedAlert;
  }((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_2___default()));
  var control = function control(label) {
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      "class": "Button Button--text Button--link",
      onclick: function onclick() {
        return app.modal.show(_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_4__["default"]);
      }
    }, label);
  };

  // Extract the label from the message from [link][/link] tags.
  var label = message.match(/\[link](.*?)\[\/link]/)[1];
  // Split the message into two parts, before and after the link.
  var parts = message.split("[link]" + label + "[/link]");
  // Replace the link with a button.
  message = [parts[0], control(label), parts[1]];
  m.mount($('<div class="App-notices"/>').insertBefore('#content')[0], {
    view: function view() {
      return m(ContainedAlert, {
        dismissible: false,
        className: "Alert--emailFake"
      }, message);
    }
  });
}

/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/LogInButtons */ "flarum/forum/components/LogInButtons");
/* harmony import */ var flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_Web3Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Web3Account */ "./src/forum/models/Web3Account.ts");
/* harmony import */ var _components_LogInButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LogInButton */ "./src/forum/components/LogInButton.tsx");
/* harmony import */ var _components_LogInModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LogInModal */ "./src/forum/components/LogInModal.tsx");
/* harmony import */ var _components_SignUpModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SignUpModal */ "./src/forum/components/SignUpModal.tsx");
/* harmony import */ var _states_Web3AccountsState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./states/Web3AccountsState */ "./src/forum/states/Web3AccountsState.ts");
/* harmony import */ var _components_AttachedWallets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/AttachedWallets */ "./src/forum/components/AttachedWallets.tsx");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _states_Web3ModulesState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./states/Web3ModulesState */ "./src/forum/states/Web3ModulesState.ts");
/* harmony import */ var _components_alertNoEmail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/alertNoEmail */ "./src/forum/components/alertNoEmail.js");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_16__);

















flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('blomstra/web3', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store).models['web3-accounts'] = _models_Web3Account__WEBPACK_IMPORTED_MODULE_5__["default"];
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().web3) = new _states_Web3ModulesState__WEBPACK_IMPORTED_MODULE_13__["default"]();
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().web3accounts) = new _states_Web3AccountsState__WEBPACK_IMPORTED_MODULE_9__["default"]();

  // @ts-ignore
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_15___default().prototype).isEmailFake = flarum_common_Model__WEBPACK_IMPORTED_MODULE_16___default().attribute('isEmailFake');
  var alertMounted = false;
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11___default().prototype), 'oncreate', function () {
    if (!alertMounted) {
      (0,_components_alertNoEmail__WEBPACK_IMPORTED_MODULE_14__["default"])((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default()));
      alertMounted = true;
    }
  });
  // Session button to bind web3 accounts to current user account.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'settingsItems', function (items) {
    items.add('wallets', m(_components_AttachedWallets__WEBPACK_IMPORTED_MODULE_10__["default"], null), 95);
  });

  // Modify signup modal to add context to our login modal to be able to tell a login from a sigup.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'body', function (vnode) {
    vnode[0] = !this.attrs.token && m((flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_2___default()), {
      isSignUp: true
    });
  });

  // Adds a "Login with web3 account" login option.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_LogInButtons__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    var _this = this;
    // @ts-ignore
    var context = this.attrs.isSignUp ? 'sign-up' : 'log-in';
    if (context === 'sign-up' && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maojindao55-web3.allow-sign-up')) {
      return;
    }
    items.add('web3', m(_components_LogInButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "Button LogInButton--web3",
      icon: "fas fa-wallet"
      // @ts-ignore
      ,
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_this.attrs.isSignUp ? _components_SignUpModal__WEBPACK_IMPORTED_MODULE_8__["default"] : _components_LogInModal__WEBPACK_IMPORTED_MODULE_7__["default"]);
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans("maojindao55-web3.forum." + context + ".with-wallet")));
  });

  // Open Web3 Auth Modals by default
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_11___default().prototype), 'items', function (items) {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) return;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maojindao55-web3.prioritize-web3-auth-modals') && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maojindao55-web3.allow-sign-up') || flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maojindao55-web3.allow-sign-up') && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('allowSignUp')) {
      if (items.has('signUp')) {
        items.remove('signUp');
      }
      items.add('signUp', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
        className: "Button Button--link",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_SignUpModal__WEBPACK_IMPORTED_MODULE_8__["default"]);
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.header.sign_up_link')), 10);
    }
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maojindao55-web3.prioritize-web3-auth-modals') && items.has('logIn')) {
      items.get('logIn').attrs.onclick = function () {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_LogInModal__WEBPACK_IMPORTED_MODULE_7__["default"]);
      };
    }
  });
});

/***/ }),

/***/ "./src/forum/models/Web3Account.ts":
/*!*****************************************!*\
  !*** ./src/forum/models/Web3Account.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Web3Account)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Web3Account = /*#__PURE__*/function (_Model) {
  function Web3Account() {
    return _Model.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Web3Account, _Model);
  var _proto = Web3Account.prototype;
  /** Hex String **/
  _proto.address = function address() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('address').call(this);
  };
  _proto.source = function source() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('source').call(this);
  };
  _proto.type = function type() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('type').call(this);
  };
  _proto.apiEndpoint = function apiEndpoint() {
    return _Model.prototype.apiEndpoint.call(this).replace('/web3-accounts', '/web3/accounts');
  };
  return Web3Account;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/states/Web3AccountsState.ts":
/*!***********************************************!*\
  !*** ./src/forum/states/Web3AccountsState.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Web3AccountsState)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

var Web3AccountsState = /*#__PURE__*/function () {
  function Web3AccountsState() {
    this.accounts = null;
  }
  var _proto = Web3AccountsState.prototype;
  _proto.loaded = function loaded() {
    return this.accounts !== null;
  };
  _proto.load = function load() {
    var _this$accounts,
      _this = this;
    return (_this$accounts = this.accounts) != null ? _this$accounts : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('web3/accounts').then(function (accounts) {
      _this.accounts = accounts;
      m.redraw();
    });
  };
  _proto.exists = function exists(address) {
    return this.accounts !== null && this.accounts.some(function (account) {
      return account.address() === address;
    });
  };
  _proto.all = function all() {
    return this.accounts;
  };
  _proto.push = function push(account) {
    if (this.accounts !== null) {
      this.accounts.push(account);
    }
  };
  _proto.remove = function remove(address) {
    if (this.accounts !== null) {
      var _this$accounts$find;
      (_this$accounts$find = this.accounts.find(function (account) {
        return account.address() === address;
      })) == null || _this$accounts$find["delete"]();
      this.accounts = this.accounts.filter(function (account) {
        return account.address() !== address;
      });
    }
  };
  return Web3AccountsState;
}();


/***/ }),

/***/ "./src/forum/states/Web3ModulesState.ts":
/*!**********************************************!*\
  !*** ./src/forum/states/Web3ModulesState.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Web3ModulesState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);



var Web3ModulesState = /*#__PURE__*/function () {
  function Web3ModulesState() {
    this.loaded = false;
    this.modules = {};
  }
  var _proto = Web3ModulesState.prototype;
  _proto.load = /*#__PURE__*/function () {
    var _load = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!this.loaded) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.next = 4;
            return import(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') + "/assets/extensions/maojindao55-web3/web3.js" /* webpackIgnore: true, webpackPrefetch: true */);
          case 4:
            this.modules = _context.sent;
            this.loaded = true;
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function load() {
      return _load.apply(this, arguments);
    }
    return load;
  }();
  _proto.module = /*#__PURE__*/function () {
    var _module = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.load();
          case 2:
            return _context2.abrupt("return", this.modules[name]);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function module(_x) {
      return _module.apply(this, arguments);
    }
    return module;
  }();
  _proto.all = /*#__PURE__*/function () {
    var _all = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.load();
          case 2:
            return _context3.abrupt("return", this.modules);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function all() {
      return _all.apply(this, arguments);
    }
    return all;
  }();
  _proto.loadedModules = function loadedModules() {
    return this.modules;
  };
  return Web3ModulesState;
}();


/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/ChangeEmailModal":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ChangeEmailModal']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ChangeEmailModal'];

/***/ }),

/***/ "flarum/forum/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderSecondary']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/forum/components/LogInButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInButton'];

/***/ }),

/***/ "flarum/forum/components/LogInButtons":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInButtons']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInButtons'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map