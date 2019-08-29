webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "qfxwxq-0"
})(["background-color:", ";color:white;font-size:1rem;border-bottom:10px solid #807768;a{color:white;}"], function (props) {
  return props.theme.darkGrey;
});
var FooterInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "Footer__FooterInner",
  componentId: "qfxwxq-1"
})(["padding:40px 0;@media screen and (max-width:768px){text-align:center;}a{display:block;width:100%;text-transform:uppercase;font-size:1.1rem;font-family:'Gotham Bold',sans-serif;letter-spacing:0.09rem;margin:10px 0;color:white;}.col-left{@media screen and (min-width:768px){max-width:300px;}}.col-right{@media screen and (min-width:768px){text-align:right;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;}p{margin-bottom:0;}}.social-media-links{text-align:right;@media screen and (max-width:768px){text-align:center;margin-top:40px;margin-bottom:20px;}img,a{display:inline-block;width:auto;margin-left:16px;margin-bottom:5px;@media screen and (max-width:768px){margin-left:8px;margin-right:8px;}&:hover{transform:translateY(1px);}}}"]);
var d = new Date();
var currentYear = d.getFullYear();

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var sitewideData = this.props.sitewideData;
      var instagramLink;
      var twitterLink;

      if (prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(sitewideData.data.instagram_url) != '') {
        instagramLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(sitewideData.data.instagram_url),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "../static/instagram.svg",
          alt: "Lowell Herb Co. Instagram"
        }));
      }

      if (prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(sitewideData.data.twitter_url) != '') {
        twitterLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(sitewideData.data.twitter_url),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "../static/twitter.svg",
          alt: "Lowell Herb Co. Twitter"
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 col-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cafe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.cafe_link_text != '' && sitewideData.data.cafe_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cannabis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.cannabis_link_text != '' && sitewideData.data.cannabis_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/cbd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.cbd_link_text != '' && sitewideData.data.cbd_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/gear"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.gear_link_text != '' && sitewideData.data.gear_link_text[0].text))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/stockists"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.stockists_link_text != '' && sitewideData.data.stockists_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, sitewideData.data.about_link_text != '' && sitewideData.data.about_link_text[0].text)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social-media-links"
      }, instagramLink, twitterLink), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA9", currentYear, " LOWELL FARMS, LLC. ALL RIGHTS RESERVED"))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.2e587d4f87130a196fd4.hot-update.js.map