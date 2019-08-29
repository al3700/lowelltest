webpackHotUpdate("static/development/pages/cannabis/smokes.js",{

/***/ "./components/CannabisSubpage.js":
/*!***************************************!*\
  !*** ./components/CannabisSubpage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collection */ "./components/Collection.js");
/* harmony import */ var _styles_ButtonGold__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ButtonGold */ "./components/styles/ButtonGold.js");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/HeaderStyles */ "./components/styles/HeaderStyles.js");
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _Delivery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Delivery */ "./components/Delivery.js");
/* harmony import */ var _DeliveryBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeliveryBanner */ "./components/DeliveryBanner.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Quote */ "./components/Quote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/prop-types */

/* eslint-disable class-methods-use-this */

/* eslint-disable react/destructuring-assignment */













var Cannabis =
/*#__PURE__*/
function (_Component) {
  _inherits(Cannabis, _Component);

  function Cannabis() {
    _classCallCheck(this, Cannabis);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cannabis).apply(this, arguments));
  }

  _createClass(Cannabis, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageData = _this$props.pageData,
          quotesData = _this$props.quotesData,
          newsletterData = _this$props.newsletterData,
          products = _this$props.products,
          deliveryZipCodes = _this$props.deliveryZipCodes,
          zipCodeData = _this$props.zipCodeData,
          stockists = _this$props.stockists;
      var heroBgImageUrl = pageData.hero_background_image.url;
      var deliveryPlaceholderText = pageData.delivery_placeholder != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.delivery_placeholder);
      var deliveryButtonText = pageData.delivery_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.delivery_button_text);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, " ", pageData.meta_title), pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: pageData.meta_description
      }), pageData.keywords != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "keywords",
        content: pageData.keywords
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://www.lowellfarms.com/cannabis",
        rel: "canonical"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: {
          background: "#ecebe9 url(".concat(heroBgImageUrl, ")"),
          backgroundSize: 'cover'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, pageData.hero_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.hero_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: pageData.hero_image != '' && pageData.hero_image.url,
        alt: "Lowell Herb Co Cannabis",
        width: "200",
        className: "hero-image"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Delivery__WEBPACK_IMPORTED_MODULE_9__["default"], {
        deliveryZipCodes: deliveryZipCodes,
        pageData: pageData,
        deliveryPlaceholderText: deliveryPlaceholderText,
        deliveryButtonText: deliveryButtonText,
        handle: "Cannabis",
        stockists: stockists
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeliveryBanner__WEBPACK_IMPORTED_MODULE_10__["default"], {
        handle: "Cannabis",
        zipCodeData: zipCodeData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalloutWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collection__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handle: "Cannabis",
        products: products,
        deliveryZipCodes: deliveryZipCodes,
        limit: 60,
        zipCodeData: zipCodeData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "container learn-more"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: pageData.learn_more_image && pageData.learn_more_image.url,
        alt: "Learn More about Lowell"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-text-col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "quote"
      }, "\u201C", quotesData[0].quote[0].text, "\u201D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "publication small-caps"
      }, "\u2013 ", quotesData[0].publication[0].text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonGold__WEBPACK_IMPORTED_MODULE_6__["default"], null, pageData.learn_more_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.learn_more_button_text)))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Quote__WEBPACK_IMPORTED_MODULE_11__["default"], {
        quotesData: quotesData,
        index: 4,
        styleClass: "last-quote"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Newsletter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        newsletterData: newsletterData,
        page: "cannabis"
      }));
    }
  }]);

  return Cannabis;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cannabis);
var CalloutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "CannabisSubpage__CalloutWrapper",
  componentId: "wc81xi-0"
})(["background-color:#ecebe9;padding-top:60px;padding-bottom:150px;.quote{font-family:'Lora Regular';}.col-right{display:flex;flex-direction:column;justify-content:center;}.learn-more{padding-top:100px;}.about-text-col{text-align:center;.quote{font-size:2.2rem;color:#333639;}.publication{color:#6b6653;font-size:1.2rem;margin-top:0;margin-bottom:30px;}}@media (min-width:768px){.about-text-col{max-width:420px;margin-right:8%;margin-left:auto;text-align:left;}}"]);

/***/ })

})
//# sourceMappingURL=smokes.js.f0999d1f1c045bf35cab.hot-update.js.map