webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileMenu */ "./components/MobileMenu.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _ToggleCartButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToggleCartButton */ "./components/ToggleCartButton.js");
/* harmony import */ var _ToggleZipButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ToggleZipButton */ "./components/ToggleZipButton.js");
/* harmony import */ var _styles_MobileNavStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/MobileNavStyles */ "./components/styles/MobileNavStyles.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Nav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      slide: 0,
      // How much should the Navbar slide up or down
      lastScrollY: 0 // Keep track of current position in state

    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var lastScrollY = _this.state.lastScrollY;
      var currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        _this.setState({
          slide: '-200%'
        });
      } else {
        _this.setState({
          slide: '0'
        });
      }

      _this.setState({
        lastScrollY: currentScrollY
      });
    });

    return _this;
  }

  _createClass(Nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // When this component mounts, begin listening for scroll changes
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // If this component is unmounted, stop listening
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          sitewideData = _this$props.sitewideData,
          client = _this$props.client,
          localStorageCheckout = _this$props.localStorageCheckout;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_6__["NavWrapper"], {
        style: {
          transform: "translate(0, ".concat(this.state.slide, ")")
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_MobileNavStyles__WEBPACK_IMPORTED_MODULE_9__["MobileNav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-navbar",
        style: {
          transform: "translate(0, ".concat(this.state.slide, ")")
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: _MobileMenu__WEBPACK_IMPORTED_MODULE_5__["TOGGLE_MOBILE_MENU"]
      }, function (toggleMobileMenu) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "hamburger",
          onClick: toggleMobileMenu,
          type: "button"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/logo_mobile.svg",
        alt: "Mobile Lowell Logo"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "end-content-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleCartButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        localStorageCheckout: localStorageCheckout
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleZipButton__WEBPACK_IMPORTED_MODULE_8__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MobileMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sitewideData: sitewideData
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_6__["NavInner"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left-col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cafe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.cafe_link_text != '' && sitewideData.data.cafe_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cannabis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: router.route == '/cannabis' ? 'current-page' : ''
      }, sitewideData.data.cannabis_link_text != '' && sitewideData.data.cannabis_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cbd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: router.route == '/cbd' ? 'current-page' : ''
      }, sitewideData.data.cbd_link_text != '' && sitewideData.data.cbd_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/gear"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: router.route == '/gear' ? 'current-page' : ''
      }, sitewideData.data.gear_link_text != '' && sitewideData.data.gear_link_text[0].text))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "home-link hide-mobile-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: sitewideData.data.logo != '' && sitewideData.data.logo.url,
        alt: "Home Link",
        title: "home"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/stockists"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: router.route == '/stockists' ? 'current-page' : ''
      }, sitewideData.data.stockists_link_text != '' && sitewideData.data.stockists_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: router.route == '/about' ? 'current-page' : ''
      }, sitewideData.data.about_link_text != '' && sitewideData.data.about_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleCartButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        localStorageCheckout: localStorageCheckout
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleZipButton__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.05ceeb4d450f6bb8338e.hot-update.js.map