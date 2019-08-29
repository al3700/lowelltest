webpackHotUpdate("static/development/pages/cannabis/smokes.js",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ProductCard */ "./components/styles/ProductCard.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
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










var Product =
/*#__PURE__*/
function (_Component) {
  _inherits(Product, _Component);

  function Product() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Product);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Product)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "preventBubbling", function (e) {
      // Show 6 more delivery services each time the button is clicked
      if (e.target.tagName == 'BUTTON') {
        e.preventDefault();
      }
    });

    return _this;
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          product = _this$props.product,
          productInfo = _this$props.productInfo,
          handle = _this$props.handle,
          showBuyButton = _this$props.showBuyButton;
      var type;
      var quantity;
      var percentage;
      var percentageUnit;
      var weight;
      var productTopRow;
      var productBottomRow;
      var typeColor;
      var productRoundedPrice = product.node.variants.edges[0].node.price.replace(/\.00$/, '');

      if (handle == 'CBD' || handle == 'Cannabis') {
        if (productInfo != undefined) {
          type = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.data.type);
          quantity = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.data.quantity);
          percentage = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.data.thc_percentage);
          percentageUnit = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.data.percentage_unit);
          type = type != '' && type != undefined ? type.toLowerCase() : '';

          switch (type) {
            case 'hemp':
              typeColor = '#A38F60';
              break;

            case 'indica':
              typeColor = '#232323';
              break;

            case 'sativa':
              typeColor = '#58794E';
              break;

            default:
              typeColor = '#BB845A';
              break;
          }
        }

        weight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, product.node.variants.edges[0].node.weight, ' ', product.node.variants.edges[0].node.weightUnit, ",");
        productTopRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "split-aligner"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "product-type",
          style: {
            color: typeColor
          }
        }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "product-amount"
        }, percentage, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, percentageUnit)));
        productBottomRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, weight, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, quantity));
      } else {
        console.log(productInfo);
        productBottomRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, productInfo && productInfo.data.short_description != '' && productInfo.data.short_description != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.data.short_description));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ProductCard__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/product',
          query: {
            handle: product.node.handle
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.preventBubbling
      }, ' ', productInfo && productInfo.data.landing_page_image != '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: productInfo.data.landing_page_image.url,
        alt: "".concat(product.node.title, " product shot")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Title__WEBPACK_IMPORTED_MODULE_7__["default"], null, productTopRow, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, product.node.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "product-notes split-text"
      }, productBottomRow, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "$", productRoundedPrice)), showBuyButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: product.node.variants.edges[0].node.id,
        price: productRoundedPrice,
        onClick: this.preventBubbling,
        availableForSale: product.node.availableForSale
      })))));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Product, "propTypes", {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});



/***/ })

})
//# sourceMappingURL=smokes.js.fc85c67ed716bc8c704a.hot-update.js.map