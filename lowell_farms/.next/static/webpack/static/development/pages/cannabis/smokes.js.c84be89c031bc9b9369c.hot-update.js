webpackHotUpdate("static/development/pages/cannabis/smokes.js",{

/***/ "./components/Collection.js":
/*!**********************************!*\
  !*** ./components/Collection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zipcodes */ "./node_modules/zipcodes/lib/index.js");
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zipcodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ZipCodeCheck */ "./components/ZipCodeCheck.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query COLLECTION_QUERY($handle: String!, $limit: Int!) {\n    shop {\n      collectionByHandle(handle: $handle) {\n        products(first: $limit) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          edges {\n            node {\n              id\n              title\n              handle\n              availableForSale\n              collections(first: 1) {\n                edges {\n                  node {\n                    handle\n                  }\n                }\n              }\n              options {\n                id\n                name\n                values\n              }\n              variants(first: 250) {\n                pageInfo {\n                  hasNextPage\n                  hasPreviousPage\n                }\n                edges {\n                  node {\n                    id\n                    title\n                    weight\n                    weightUnit\n                    selectedOptions {\n                      name\n                      value\n                    }\n                    image {\n                      src\n                    }\n                    price\n                  }\n                }\n              }\n              images(first: 250) {\n                pageInfo {\n                  hasNextPage\n                  hasPreviousPage\n                }\n                edges {\n                  node {\n                    src\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Products =
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, _getPrototypeOf(Products).apply(this, arguments));
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handle = _this$props.handle,
          products = _this$props.products,
          limit = _this$props.limit,
          deliveryZipCodes = _this$props.deliveryZipCodes,
          zipCodeData = _this$props.zipCodeData;
      var prismicProductData = {};

      for (var i = 0; i < products.length; i++) {
        var productId = products[i].data.shopify_product != null && products[i].data.shopify_product != '' ? products[i].data.shopify_product.id : products[i].uid;
        prismicProductData[productId] = products[i];
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: COLLECTION_QUERY,
        variables: {
          handle: handle,
          limit: limit
        }
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_7__["ZIP_CODE_QUERY"]
        }, function (_ref2) {
          var zipCode = _ref2.data.zipCode;
          // GET STATE FROM ZIP CODE
          var locationInfoByZip = zipCode != '' ? zipcodes__WEBPACK_IMPORTED_MODULE_4___default.a.lookup(zipCode) : '';
          var zipCodeState = locationInfoByZip != '' ? locationInfoByZip.state : '';
          var showBuyButton = false;

          if (handle !== 'Gear') {
            // RESTRICT CBD SHIPPING TO SOME STATES
            var CBDExclusionZones = zipCodeData.cbd_exclusion_zones != '' && zipCodeData.cbd_exclusion_zones != null ? prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__["RichText"].asText(zipCodeData.cbd_exclusion_zones) : '';
            showBuyButton = handle == 'Cannabis' && zipCode != '' && deliveryZipCodes.includes(zipCode) && zipCodeData.delivery_service_launched != 'false' || handle == 'CBD' && !CBDExclusionZones.includes(zipCodeState) && zipCodeData.cbd_shipping_launched != 'false';
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "cols-3 cols-2-md"
          }, data.shop.collectionByHandle.products.edges.map(function (product) {
            var shopifyId = base_64__WEBPACK_IMPORTED_MODULE_3___default.a.decode(product.node.id);
            var productId = /[^/]*$/.exec(shopifyId)[0];
            var productInfo = prismicProductData[productId];
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
              product: product,
              key: product.node.id.toString(),
              productInfo: productInfo,
              handle: handle,
              showBuyButton: showBuyButton
            });
          }));
        });
      }));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var COLLECTION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=smokes.js.c84be89c031bc9b9369c.hot-update.js.map