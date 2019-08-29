webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/MobileMenu.js":
/*!**********************************!*\
  !*** ./components/MobileMenu.js ***!
  \**********************************/
/*! exports provided: default, MOBILE_MENU_OPEN_QUERY, TOGGLE_MOBILE_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_MENU_OPEN_QUERY", function() { return MOBILE_MENU_OPEN_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MOBILE_MENU", function() { return TOGGLE_MOBILE_MENU; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_MobileNavStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/MobileNavStyles */ "./components/styles/MobileNavStyles.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleMobileMenu @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    mobileMenuOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var MOBILE_MENU_OPEN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_MOBILE_MENU = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());

var MobileMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileMenu, _Component);

  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(MobileMenu).apply(this, arguments));
  }

  _createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      var sitewideData = this.props.sitewideData;
      var instagramLink;
      var twitterLink;

      if (prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__["RichText"].asText(sitewideData.data.instagram_url) != '') {
        instagramLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__["RichText"].asText(sitewideData.data.instagram_url),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "../static/instagram.svg",
          alt: "Lowell Herb Co. Instagram"
        }));
      }

      if (prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__["RichText"].asText(sitewideData.data.twitter_url) != '') {
        twitterLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__["RichText"].asText(sitewideData.data.twitter_url),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "../static/twitter.svg",
          alt: "Lowell Herb Co. Twitter"
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: MOBILE_MENU_OPEN_QUERY
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        var mobileMenuClass = data.mobileMenuOpen ? 'mobile-nav-open' : 'test'; // console.log(data);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: TOGGLE_MOBILE_MENU
        }, function (toggleMobileMenu) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "mobile-nav ".concat(mobileMenuClass)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            className: "close-mobile-nav",
            onClick: toggleMobileMenu
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: "/static/close_light.svg",
            alt: "Close mobile menu",
            title: "Close mobile menu"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "home-logo",
            onClick: toggleMobileMenu
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: sitewideData.data.logo != '' && sitewideData.data.logo.url,
            alt: "Home Link",
            title: "home"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "mobile-nav-links"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/cafe"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: toggleMobileMenu
          }, sitewideData.data.cafe_link_text != '' && sitewideData.data.cafe_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/cannabis"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: toggleMobileMenu
          }, sitewideData.data.cannabis_link_text != '' && sitewideData.data.cannabis_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/cbd"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: toggleMobileMenu
          }, sitewideData.data.cbd_link_text != '' && sitewideData.data.cbd_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/gear"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: toggleMobileMenu
          }, sitewideData.data.gear_link_text != '' && sitewideData.data.gear_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/stockists"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: toggleMobileMenu
          }, sitewideData.data.stockists_link_text != '' && sitewideData.data.stockists_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/about"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: toggleMobileMenu
          }, sitewideData.data.about_link_text != '' && sitewideData.data.about_link_text[0].text))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "social-media-links"
          }, instagramLink, twitterLink)));
        });
      });
    }
  }]);

  return MobileMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);


/***/ })

})
//# sourceMappingURL=_app.js.207cef4c28a2bb8d3c8b.hot-update.js.map