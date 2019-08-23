module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getPageApi, getBlogPostsAPI, getPageByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageApi", function() { return getPageApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogPostsAPI", function() { return getBlogPostsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageByType", function() { return getPageByType; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ "prismic-javascript");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getBlogPostsAPI =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context.sent;
            _context.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at('document.type', 'blog_post'), _objectSpread({
              orderings: '[my.blog_post.date desc]'
            }, params));

          case 6:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getBlogPostsAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getPageApi =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(pageId) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context2.sent;
            _context2.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at('document.id', pageId), {
              pageSize: 100
            });

          case 6:
            response = _context2.sent;
            return _context2.abrupt("return", response.results[0]);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            return _context2.abrupt("return", _context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getPageApi(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getPageByType =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(pageType) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context3.sent;
            _context3.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at('document.type', pageType), {
              pageSize: 100
            });

          case 6:
            response = _context3.sent;
            return _context3.abrupt("return", response.results);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", _context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getPageByType(_x3) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/*! exports provided: default, CHECKOUT_ID_QUERY, CHECKOUT_QUERY, CREATE_CHECKOUT_MUTATION, CheckoutFragment, REMOVE_ITEM_MUTATION, UPDATE_LINE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_ID_QUERY", function() { return CHECKOUT_ID_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_QUERY", function() { return CHECKOUT_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CHECKOUT_MUTATION", function() { return CREATE_CHECKOUT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutFragment", function() { return CheckoutFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_MUTATION", function() { return REMOVE_ITEM_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LINE_ITEM_MUTATION", function() { return UPDATE_LINE_ITEM_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_LINE_ITEM_MUTATION(\n    $checkoutId: ID!\n    $lineItems: [CheckoutLineItemUpdateInput!]!\n  ) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation REMOVE_ITEM_MUTATION($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(\n      checkoutId: $checkoutId\n      lineItemIds: $lineItemIds\n    ) {\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation ADD_LINE_ITEM_MUTATION(\n    $checkoutId: ID!\n    $lineItems: [CheckoutLineItemInput!]!\n  ) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  fragment CheckoutFragment on Checkout {\n    id\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    lineItems(first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    createOrUpdateCheckout @client\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  {\n    checkoutId @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    checkout @client {\n      id\n      lineItems {\n        edges\n      }\n      subtotalPrice\n      totalPrice\n      totalTax\n      webUrl\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CHECKOUT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var CHECKOUT_ID_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var CREATE_CHECKOUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
var CheckoutFragment = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4());
var ADD_LINE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject5(), CheckoutFragment);
var REMOVE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject6(), CheckoutFragment);
var UPDATE_LINE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject7(), CheckoutFragment);

var AddToCart =
/*#__PURE__*/
function (_Component) {
  _inherits(AddToCart, _Component);

  function AddToCart() {
    _classCallCheck(this, AddToCart);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddToCart).apply(this, arguments));
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          price = _this$props.price,
          availableForSale = _this$props.availableForSale; // console.log(id);

      var buttonText;

      if (availableForSale) {
        buttonText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Buy Now \u2013 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$", price, " "));
      } else {
        buttonText = 'Coming Soon';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: CHECKOUT_ID_QUERY
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: ADD_LINE_ITEM_MUTATION,
          variables: {
            checkoutId: data.checkoutId,
            lineItems: [{
              variantId: id,
              quantity: 1
            }]
          },
          update: function update(cache, _ref2) {
            var checkoutLineItemsAdd = _ref2.data.checkoutLineItemsAdd;
            var cartData = {
              data: {
                cartOpen: true
              }
            };
            cache.writeData(cartData);
            cache.writeQuery({
              query: CHECKOUT_QUERY,
              data: {
                checkout: [checkoutLineItemsAdd][0].checkout
              }
            });
            localStorage.setItem('checkout', JSON.stringify([checkoutLineItemsAdd][0].checkout));
            localStorage.setItem('checkoutId', [checkoutLineItemsAdd][0].checkout.id);
          }
        }, function (checkoutLineItemsAdd) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "button",
            onClick: checkoutLineItemsAdd,
            className: "add-to-cart",
            disabled: !availableForSale
          }, buttonText);
        });
      });
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);


/***/ }),

/***/ "./components/Collection.js":
/*!**********************************!*\
  !*** ./components/Collection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base-64 */ "base-64");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zipcodes */ "zipcodes");
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zipcodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
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

/***/ }),

/***/ "./components/DeliveryBanner.js":
/*!**************************************!*\
  !*** ./components/DeliveryBanner.js ***!
  \**************************************/
/*! exports provided: default, ZIP_BANNER_QUERY, TOGGLE_ZIP_BANNER_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIP_BANNER_QUERY", function() { return ZIP_BANNER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ZIP_BANNER_MUTATION", function() { return TOGGLE_ZIP_BANNER_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zipcodes */ "zipcodes");
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zipcodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ZipCodeCheck */ "./components/ZipCodeCheck.js");
/* harmony import */ var _styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DeliveryBarStyles */ "./components/styles/DeliveryBarStyles.js");
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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleZipBanner @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    zipCodeBannerShowing @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var ZIP_BANNER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_ZIP_BANNER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var DeliveryBanner =
/*#__PURE__*/
function (_Component) {
  _inherits(DeliveryBanner, _Component);

  function DeliveryBanner() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeliveryBanner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeliveryBanner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      slide: 0,
      // How much should the Navbar slide up or down
      lastScrollY: 0,
      // Keep track of current position in state
      position: 'down'
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var lastScrollY = _this.state.lastScrollY;
      var currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        _this.setState({
          position: 'up'
        });
      } else {
        _this.setState({
          position: 'down'
        });
      }

      _this.setState({
        lastScrollY: currentScrollY
      });
    });

    return _this;
  }

  _createClass(DeliveryBanner, [{
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
      var _this2 = this;

      var _this$props = this.props,
          zipCodeData = _this$props.zipCodeData,
          handle = _this$props.handle;
      var cannabisZipCodes = zipCodeData.cannabis_delivery_zones;
      var deliveryZipCodes = cannabisZipCodes.map(function (zipCodeItem) {
        return zipCodeItem.zip_code;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ZIP_BANNER_QUERY
      }, function (_ref) {
        var zipCodeBannerShowing = _ref.data.zipCodeBannerShowing;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_5__["ZIP_CODE_QUERY"]
        }, function (_ref2) {
          var zipCode = _ref2.data.zipCode;
          if (zipCode == '') return null; // GET STATE FROM ZIP CODE

          var locationInfoByZip = zipCode != '' ? zipcodes__WEBPACK_IMPORTED_MODULE_4___default.a.lookup(zipCode) : '';
          var zipCodeState = locationInfoByZip != '' ? locationInfoByZip.state : ''; // LOGIC TO DETERMINE WHICH SCREEN SHOULD BE SHOWN

          var screen;
          var CBDExclusionZones;
          var isInExcludedZone;

          if (handle == 'CBD') {
            // RESTRICT CBD SHIPPING TO SOME STATES
            CBDExclusionZones = zipCodeData.cbd_exclusion_zones != '' && zipCodeData.cbd_exclusion_zones != null ? prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cbd_exclusion_zones) : '';
            isInExcludedZone = CBDExclusionZones.includes(zipCodeState);
          } // CBD - Display stockists if in CA,
          // If outside CA -  CBD can be shipped so enable buy buttons and hide this section (default return)


          if (handle == 'CBD' && isInExcludedZone && zipCodeState == 'CA') {
            screen = 'cbd-stockists';
          } else if (handle == 'CBD' && zipCodeData.cbd_shipping_launched == 'false' || handle == 'CBD' && isInExcludedZone) {
            screen = 'cbd-not-available';
          } else if (handle == 'CBD' && zipCodeState != 'CA') {
            screen = 'cbd-ship';
          } // console.log(screen);
          // CANNABIS - Display stockists if in CA but not in delivery zone
          // If not in CA show not available screen
          // If in delivery zone enable buy buttons and hide this section completely (default return)


          if (handle == 'Cannabis' && zipCodeState == 'CA' && (!deliveryZipCodes.includes(zipCode) || zipCodeData.delivery_service_launched != 'true')) {
            screen = 'cannabis-stockists';
          } else if (handle == 'Cannabis' && zipCodeState == 'CA') {
            screen = 'cannabis-deliver';
          } // WE DELIVER CANNABIS TO YOUR LOCATION SCREEN


          if (screen == 'cannabis-deliver') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
              zipUpdated: zipCodeBannerShowing,
              position: _this2.state.position
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, zipCodeData.cannabis_delivery_zone_notification != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cannabis_delivery_zone_notification)));
          } // CANNABIS STOCKISTS SCREEN (IN CA, OUTSIDE DELIVERY ZONE)===========


          if (screen == 'cannabis-stockists') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
              zipUpdated: zipCodeBannerShowing,
              position: _this2.state.position
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, zipCodeData.cannabis_available_for_purchase_notificiation != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cannabis_available_for_purchase_notificiation)));
          } // STOCKISTS SCREEN (CBD IN CA) ===========


          if (screen == 'cbd-stockists') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
              zipUpdated: zipCodeBannerShowing,
              position: _this2.state.position
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, zipCodeData.cbd_available_for_purchase_notification != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cbd_available_for_purchase_notification)));
          } // WE SHIP TO YOUR LOCATION SCREEN (OUT OF CA)


          if (screen == 'cbd-ship') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
              zipUpdated: zipCodeBannerShowing,
              position: _this2.state.position
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, zipCodeData.cbd_available_for_shipping_notification != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cbd_available_for_shipping_notification)));
          }

          if (screen == 'cbd-not-available') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
              zipUpdated: zipCodeBannerShowing,
              position: _this2.state.position
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, zipCodeData.cbd_not_available_notification != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cbd_not_available_notification)));
          } // Cannabis & not in delivery zone


          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DeliveryBarStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
            zipUpdated: zipCodeBannerShowing,
            style: {
              top: "".concat(_this2.state.position)
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, zipCodeData.cannabis_not_available_notification != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(zipCodeData.cannabis_not_available_notification)));
        });
      });
    }
  }]);

  return DeliveryBanner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeliveryBanner);


/***/ }),

/***/ "./components/Gear.js":
/*!****************************!*\
  !*** ./components/Gear.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collection */ "./components/Collection.js");
/* harmony import */ var _styles_ButtonGold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/ButtonGold */ "./components/styles/ButtonGold.js");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/HeaderStyles */ "./components/styles/HeaderStyles.js");
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _styles_sections_gearStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/sections/gearStyles */ "./components/styles/sections/gearStyles.js");
/* harmony import */ var _styles_LearnMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/LearnMore */ "./components/styles/LearnMore.js");
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











var GearPage =
/*#__PURE__*/
function (_Component) {
  _inherits(GearPage, _Component);

  function GearPage() {
    _classCallCheck(this, GearPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(GearPage).apply(this, arguments));
  }

  _createClass(GearPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageData = _this$props.pageData,
          quotesData = _this$props.quotesData,
          newsletterData = _this$props.newsletterData,
          products = _this$props.products;
      var heroBgImageUrl = pageData.hero_background_image.url; // console.log(pageData);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, " ", pageData.meta_title), pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: pageData.meta_description
      }), pageData.keywords != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "keywords",
        content: pageData.keywords
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://www.lowellherb.co/gear",
        rel: "canonical"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          background: "#DEE0DB url(".concat(heroBgImageUrl, ")"),
          backgroundSize: 'cover'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "gear-heading"
      }, pageData.hero_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.hero_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: pageData.hero_image.url,
        alt: "Lowell Herb Co CBD",
        width: "200",
        className: "hero-image"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_gearStyles__WEBPACK_IMPORTED_MODULE_8__["CalloutWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collection__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handle: "Gear",
        limit: 100,
        products: products
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LearnMore__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: pageData.learn_more_image != '' && pageData.learn_more_image.url,
        alt: "Learn More about Lowell"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "quote"
      }, "\u201C", quotesData[0].quote[0].text, "\u201D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "publication small-caps"
      }, "\u2013 ", quotesData[0].publication[0].text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonGold__WEBPACK_IMPORTED_MODULE_5__["default"], null, pageData.learn_more_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.learn_more_button_text)))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Newsletter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        newsletterData: newsletterData,
        page: "cbd"
      }));
    }
  }]);

  return GearPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GearPage);

/***/ }),

/***/ "./components/Newsletter.js":
/*!**********************************!*\
  !*** ./components/Newsletter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Newsletter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NewsletterCallout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NewsletterCallout */ "./components/styles/NewsletterCallout.js");
/* harmony import */ var _styles_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Input */ "./components/styles/Input.js");
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
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







var Newsletter =
/*#__PURE__*/
function (_Component) {
  _inherits(Newsletter, _Component);

  function Newsletter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Newsletter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Newsletter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      emailAddress: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState({
        emailAddress: value
      });
    });

    return _this;
  }

  _createClass(Newsletter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          newsletterData = _this$props.newsletterData,
          page = _this$props.page;
      var bgColor;

      switch (page) {
        case 'cbd':
          bgColor = '#d1d3cb';
          break;

        case 'cannabis':
          bgColor = '#C4C0B0';
          break;

        case 'cafe':
          bgColor = '#C4C0B0';
          break;

        default:
          bgColor = '#ECEBE9';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_NewsletterCallout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          backgroundColor: bgColor
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "mc_embed_signup"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "https://lowellsmokes.us17.list-manage.com/subscribe/post?u=092e1f0ca656e0ef4ceb5bb0d&id=1597a2471d",
        method: "post",
        id: "mc-embedded-subscribe-form",
        name: "mc-embedded-subscribe-form",
        className: "validate container",
        target: "_blank",
        noValidate: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, newsletterData.newsletter_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].asText(newsletterData.newsletter_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "mc_embed_signup_scroll"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mc-field-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "email",
        onChange: this.handleChange,
        value: this.state.emailAddress,
        name: "EMAIL",
        className: "required email",
        id: "mce-EMAIL",
        placeholder: newsletterData.newsletter_placeholder_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].asText(newsletterData.newsletter_placeholder_text)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "mce-responses",
        className: "clear"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "response",
        id: "mce-error-response",
        style: {
          display: 'none'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "response",
        id: "mce-success-response",
        style: {
          display: 'none'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: '-5000px'
        },
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "b_092e1f0ca656e0ef4ceb5bb0d_1597a2471d",
        tabIndex: "-1",
        value: "",
        readOnly: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "submit",
        name: "subscribe",
        id: "mc-embedded-subscribe"
      }, newsletterData.newsletter_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].asText(newsletterData.newsletter_button_text))))));
    }
  }]);

  return Newsletter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
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
        productBottomRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, productInfo && productInfo.data.short_description != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.data.short_description));
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



/***/ }),

/***/ "./components/ZipCodeCheck.js":
/*!************************************!*\
  !*** ./components/ZipCodeCheck.js ***!
  \************************************/
/*! exports provided: default, ZIP_SCREEN_QUERY, TOGGLE_ZIP_MUTATION, ZIP_CODE_QUERY, UPDATE_ZIP_CODE_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIP_SCREEN_QUERY", function() { return ZIP_SCREEN_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ZIP_MUTATION", function() { return TOGGLE_ZIP_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIP_CODE_QUERY", function() { return ZIP_CODE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ZIP_CODE_MUTATION", function() { return UPDATE_ZIP_CODE_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ZipCodeCheckStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ZipCodeCheckStyles */ "./components/styles/ZipCodeCheckStyles.js");
/* harmony import */ var _ZipCodeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZipCodeForm */ "./components/ZipCodeForm.js");
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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation($zipCode: String!) {\n    updateZipCode(zipCode: $zipCode) @client\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query {\n    zipCode @client\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleZipCodeCheck @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    zipCodeCheckOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ZIP_SCREEN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_ZIP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var ZIP_CODE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
var UPDATE_ZIP_CODE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4());

var ZipCodeCheck =
/*#__PURE__*/
function (_Component) {
  _inherits(ZipCodeCheck, _Component);

  function ZipCodeCheck() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ZipCodeCheck);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ZipCodeCheck)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      slide: 0,
      // How much should the Navbar slide up or down
      lastScrollY: 0,
      // Keep track of current position in state
      opacityVal: 1
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var lastScrollY = _this.state.lastScrollY;
      var currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        _this.props.client.writeData({
          data: {
            zipCodeCheckOpen: false
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleZipCodeScreen", function (e, toggleZipCodeCheck) {
      if (e.target.closest('.zip-code-check-wrapper') == null) {
        toggleZipCodeCheck();
      }
    });

    return _this;
  }

  _createClass(ZipCodeCheck, [{
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: TOGGLE_ZIP_MUTATION
      }, function (toggleZipCodeCheck) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: ZIP_SCREEN_QUERY
        }, function (_ref) {
          var data = _ref.data;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ZipCodeCheckStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
            open: data.zipCodeCheckOpen,
            style: {
              marginTop: "".concat(_this2.state.slide),
              opacity: "".concat(_this2.state.opacityVal)
            },
            onClick: function onClick(e) {
              return _this2.toggleZipCodeScreen(e, toggleZipCodeCheck);
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "zip-code-check-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Update your location:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZipCodeForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeholderText: "EX: 90028",
            buttonText: "Update"
          })));
        });
      });
    }
  }]);

  return ZipCodeCheck;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ZipCodeCheck);


/***/ }),

/***/ "./components/ZipCodeForm.js":
/*!***********************************!*\
  !*** ./components/ZipCodeForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delivery; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zipcodes */ "zipcodes");
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zipcodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZipCodeCheck */ "./components/ZipCodeCheck.js");
/* harmony import */ var _DeliveryBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeliveryBanner */ "./components/DeliveryBanner.js");
/* harmony import */ var _styles_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Input */ "./components/styles/Input.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Delivery =
/*#__PURE__*/
function (_Component) {
  _inherits(Delivery, _Component);

  function Delivery() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Delivery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Delivery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      zipCode: '',
      invalidZip: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      if (value.length < 6) {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    return _this;
  }

  _createClass(Delivery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholderText = _this$props.placeholderText,
          buttonText = _this$props.buttonText,
          findNearestStockists = _this$props.findNearestStockists;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: _DeliveryBanner__WEBPACK_IMPORTED_MODULE_5__["TOGGLE_ZIP_BANNER_MUTATION"]
      }, function (toggleZipBanner, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_4__["UPDATE_ZIP_CODE_MUTATION"],
          variables: _this2.state
        }, function (updateZipCode, _ref2) {
          var loading = _ref2.loading,
              error = _ref2.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            action: "",
            autoComplete: "off",
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                var isValidZip, locationInfo, res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault(); // Check for valid zip syntax (5 numbers)

                        isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(_this2.state.zipCode); // Look up zip code in valid zip codes

                        locationInfo = zipcodes__WEBPACK_IMPORTED_MODULE_3___default.a.lookup(_this2.state.zipCode);

                        if (!(!isValidZip || locationInfo == undefined)) {
                          _context.next = 6;
                          break;
                        }

                        _this2.setState({
                          invalidZip: true
                        });

                        return _context.abrupt("return");

                      case 6:
                        // IS VALID ZIP -> Store in Apollo state
                        _this2.setState({
                          invalidZip: false
                        });

                        _context.next = 9;
                        return updateZipCode();

                      case 9:
                        res = _context.sent;

                        // Reset form
                        _this2.setState({
                          zipCode: ''
                        });

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }()
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "validation-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            type: "number",
            id: "zipCode",
            name: "zipCode",
            placeholder: placeholderText,
            value: _this2.state.zipCode,
            onChange: _this2.handleChange
          }), _this2.state.invalidZip && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            className: "error-message"
          }, "Please enter a valid 5 digit zip code.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            className: "wider"
          }, buttonText)));
        });
      });
    }
  }]);

  return Delivery;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/styles/ButtonDark.js":
/*!*****************************************!*\
  !*** ./components/styles/ButtonDark.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var BuyButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "ButtonDark__BuyButton",
  componentId: "sc-12h5cva-0"
})(["background:#333639;color:#f6f6f6;padding:18px 50px;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;letter-spacing:0.1rem;display:block;width:100%;outline:none;border:none;cursor:pointer;font-size:1.3rem;line-height:1;transition:all 0.4s ease-in-out;&.add-to-cart{margin-top:30px;}&.wider{max-width:554px;width:100%;padding:20px 50px;margin-left:auto;margin-right:auto;display:block;margin-top:70px;}&:hover{background-color:#242628;}&:disabled{cursor:default;&:hover{background:#333639;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BuyButton);

/***/ }),

/***/ "./components/styles/ButtonGold.js":
/*!*****************************************!*\
  !*** ./components/styles/ButtonGold.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ButtonGold = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "ButtonGold",
  componentId: "sc-1p1rlto-0"
})(["background:#726c59;", ";color:#f6f6f6;padding:12px 50px;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;font-size:1.3rem;line-height:1;letter-spacing:0.1rem;outline:none;border:none;cursor:pointer;transition:all 0.3s ease-in-out;&.wider{max-width:554px;width:100%;padding:20px 50px;margin-left:auto;margin-right:auto;display:block;margin-top:70px;}&:hover{", ";}"], function (props) {
  return props.backgroundColor && "background-color: ".concat(props.backgroundColor, ";");
}, function (props) {
  return !props.backgroundColor && "background-color: #686351;";
});
/* harmony default export */ __webpack_exports__["default"] = (ButtonGold);

/***/ }),

/***/ "./components/styles/DeliveryBarStyles.js":
/*!************************************************!*\
  !*** ./components/styles/DeliveryBarStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var slideDownBanner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%,100%{}4%,96%{transform:translateY(0);}"]);
var DeliveryBarStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DeliveryBarStyles",
  componentId: "o7znjg-0"
})(["padding:40px 20px 22px;position:fixed;background:rgba(88,83,68,0.9);color:white;top:75px;right:0;left:0;width:100%;transform:translateY(-200%);transition:all 0.3s ease-out;z-index:90;text-align:center;overflow-y:scroll;text-transform:uppercase;", ";", ";@media screen and (max-width:960px){padding:16px 20px;", ";}p{max-width:320px;margin-left:auto;margin-right:auto;}"], function (props) {
  return props.zipUpdated && "animation: 1.5s ".concat(slideDownBanner, " ease-out;");
}, function (props) {
  return props.position == 'down' ? "top: 75px;" : "top: -20px;";
}, function (props) {
  return props.position == 'down' ? "top: 45px;" : "top: 0;";
});
/* harmony default export */ __webpack_exports__["default"] = (DeliveryBarStyles);

/***/ }),

/***/ "./components/styles/HeaderStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/HeaderStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "HeaderStyles",
  componentId: "egdrao-0"
})(["margin:0;background-size:cover;background-position:center;background-repeat:no-repeat;padding-top:75px;padding-bottom:50px;position:relative;@media only screen and (max-width:768px){padding-top:60px;}&.home-header{text-align:center;padding-top:110px;padding-bottom:110px;@media only screen and (max-width:768px){padding-top:75px;padding-bottom:90px;}h1,.publication{color:white;position:relative;z-index:3;}.overlay{content:'';position:absolute;top:0;left:0;width:100%;height:100%;}.watch-video{position:relative;margin-left:auto;margin-right:auto;display:flex;align-items:center;font-size:1.2rem;padding:15px 37px;background:transparent;@media only screen and (max-width:768px){img{width:80px;}}img{display:inline-block;}}}h1{font-size:7.4rem;font-family:'Lora Regular',sans-serif;font-weight:normal;font-style:normal;max-width:672px;line-height:1.05;text-align:center;margin:0 auto;@media only screen and (max-width:1000px){font-size:50px;}@media only screen and (max-width:768px){font-size:39px;width:92%;margin-bottom:40px;}&.gear-heading{max-width:730px;}}.hero-image{margin:0 auto;display:block;width:633px;}.container-lg{width:92%;}@media (max-width:1300px){}"]);
/* harmony default export */ __webpack_exports__["default"] = (HeaderStyles);

/***/ }),

/***/ "./components/styles/Input.js":
/*!************************************!*\
  !*** ./components/styles/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Input",
  componentId: "tq6tjc-0"
})(["display:block;text-transform:uppercase;width:100%;font-family:inherit;border:0;padding:16px 12px;background-color:white;box-shadow:none;outline:none;font-size:1.3rem;margin-bottom:1.2rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/styles/LearnMore.js":
/*!****************************************!*\
  !*** ./components/styles/LearnMore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var LearnMore = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "LearnMore",
  componentId: "sc-1q42roc-0"
})(["padding-top:100px;&.padding-bottom{padding-bottom:100px;}&.no-padding-top{padding-top:0;}.quote{font-size:2.2rem;color:#333639;line-height:1.4;margin-bottom:16px;}.publication{margin-bottom:40px;}@media screen and (max-width:758px){text-align:center;}"]);
/* harmony default export */ __webpack_exports__["default"] = (LearnMore);

/***/ }),

/***/ "./components/styles/NewsletterCallout.js":
/*!************************************************!*\
  !*** ./components/styles/NewsletterCallout.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NewsletterCallout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NewsletterCallout",
  componentId: "jhi9mh-0"
})(["background-color:#c4c0b0;padding-top:88px;padding-bottom:110px;.quote{font-size:4.3rem;font-family:'Lora Regular',serif;line-height:1.15;max-width:864px;margin-left:auto;margin-right:auto;}.container{max-width:682px;text-align:center;}button{padding:20px 0;font-size:1.3rem;}h4{font-family:'Lora Regular',serif;font-size:2.2rem;letter-spacing:0.08rem;margin-bottom:40px;@media screen and (max-width:768px){max-width:280px;margin-left:auto;margin-right:auto;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (NewsletterCallout);

/***/ }),

/***/ "./components/styles/ProductCard.js":
/*!******************************************!*\
  !*** ./components/styles/ProductCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCard",
  componentId: "lv247y-0"
})(["background-color:#f6f6f6;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;transition:all 0.4s ease-in-out;&:hover{opacity:0.9;img{opacity:0.7;}}@media screen and (max-width:768px){margin-top:14px;margin-bottom:30px;}.split-aligner{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;line-height:1;p{margin-top:0;margin-bottom:25px;}}img{cursor:pointer;transition:all 0.4s ease-in-out;}.product-notes{font-size:1.3rem;text-align:left;letter-spacing:0.1rem;text-transform:uppercase;color:#69574e;margin:0 0 0;strong{font-family:'Nitti Bold',serif;color:#333639;}}.product-type{text-transform:uppercase;font-size:1.1rem;font-family:'Gotham Bold',sans-serif;letter-spacing:0.1rem;color:#7c7769;}.product-amount{text-transform:uppercase;letter-spacing:0.1rem;font-family:'Nitti Bold',serif;font-size:1.2rem;span{color:#6b6653;font-family:'Gotham Book',sans-serif;font-size:1.2rem;margin-left:5px;position:relative;top:1px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Title",
  componentId: "ewozi7-0"
})(["text-align:center;padding:20px 26px 30px;a{text-transform:uppercase;font-family:'Gotham Bold',sans-serif;text-align:left;display:block;line-height:1.3;letter-spacing:0.1rem;font-size:1.6rem;color:#333639;border-bottom:1px dashed #9e9781;padding-bottom:8px;margin-bottom:16px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/styles/ZipCodeCheckStyles.js":
/*!*************************************************!*\
  !*** ./components/styles/ZipCodeCheckStyles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ZipCodeCheckStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ZipCodeCheckStyles",
  componentId: "sc-19o6jqe-0"
})(["position:absolute;position:fixed;top:75px;right:0;left:0;width:100%;transform:translateY(-120%);transition:all 0.3s;z-index:90;text-align:center;overflow-y:scroll;height:100%;@media screen and (max-width:960px){top:44px;}.zip-code-check-wrapper{padding:90px 20px;background:#3B3F38;color:white;}", ";h2{color:white;font-family:'Lora Regular',serif;font-size:3.8rem;letter-spacing:0.1rem;margin-top:0;line-height:1.1;@media screen and (max-width:768px){font-size:3.2rem;line-height:1.2;}}fieldset{border:none;}form{max-width:440px;margin:0 auto;}.zip-close{position:absolute;background:transparent;top:0;right:0;color:white;}.validation-wrapper{position:relative;padding-bottom:20px;margin-bottom:18px;}.error-message{position:absolute;bottom:-15px;left:0;width:100%;text-align:left;font-size:1.2rem;}input{padding:14px 14px 14px 0;margin-bottom:0;background:transparent;color:white;border-bottom:1px solid #8a8475;font-size:2.6rem;text-align:left;position:relative;transition:all 0.3s ease-in-out;&:focus{border-bottom:1px solid white;}::-webkit-input-placeholder{color:#8a8475;}::-moz-placeholder{color:#8a8475;}:-ms-input-placeholder{color:#8a8475;}:-moz-placeholder{color:#8a8475;}}button{background:#726c59;color:#f6f6f6;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;font-size:1.3rem;line-height:1;letter-spacing:0.1rem;outline:none;border:none;cursor:pointer;transition:all 0.3s ease-in-out;max-width:554px;width:100%;padding:20px 50px;margin-left:auto;margin-right:auto;display:block;margin-top:0;&:hover{background-color:#686351;}}.wider{margin-top:0;background-color:#988c66;}"], function (props) {
  return props.open && "transform: translateY(0);";
});
/* harmony default export */ __webpack_exports__["default"] = (ZipCodeCheckStyles);

/***/ }),

/***/ "./components/styles/sections/gearStyles.js":
/*!**************************************************!*\
  !*** ./components/styles/sections/gearStyles.js ***!
  \**************************************************/
/*! exports provided: CalloutWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutWrapper", function() { return CalloutWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CalloutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "gearStyles__CalloutWrapper",
  componentId: "jk2jx-0"
})(["background-color:#dee0db;padding-top:60px;padding-bottom:150px;"]);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage, PRISMIC_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRISMIC_API_URL", function() { return PRISMIC_API_URL; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;
var PRISMIC_API_URL = 'https://lowell-herb-co.prismic.io/api/v2';

/***/ }),

/***/ "./pages/gear.js":
/*!***********************!*\
  !*** ./pages/gear.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gear; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _components_Gear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Gear */ "./components/Gear.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/prop-types */




var Gear =
/*#__PURE__*/
function (_Component) {
  _inherits(Gear, _Component);

  function Gear() {
    _classCallCheck(this, Gear);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gear).apply(this, arguments));
  }

  _createClass(Gear, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          newsletter = _this$props.newsletter,
          quotes = _this$props.quotes,
          products = _this$props.products;
      var data = page.data;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Gear__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pageData: data,
        newsletterData: newsletter,
        quotesData: quotes,
        products: products
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var pageId, response, productsResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Query the Prismic API with the ID of the page
                pageId = 'XKVAvxAAAB2iwm_U';
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageApi"])(pageId);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageByType"])('gear_product');

              case 6:
                productsResponse = _context.sent;
                return _context.abrupt("return", {
                  page: response,
                  products: productsResponse
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Gear;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ 7:
/*!*****************************!*\
  !*** multi ./pages/gear.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/gear.js */"./pages/gear.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "base-64":
/*!**************************!*\
  !*** external "base-64" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("base-64");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "zipcodes":
/*!***************************!*\
  !*** external "zipcodes" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zipcodes");

/***/ })

/******/ });
//# sourceMappingURL=gear.js.map