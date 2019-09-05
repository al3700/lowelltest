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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "./components/DetailDelivery.js":
/*!**************************************!*\
  !*** ./components/DetailDelivery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zipcodes */ "zipcodes");
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zipcodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ZipCodeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ZipCodeForm */ "./components/ZipCodeForm.js");
/* harmony import */ var _Stockist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Stockist */ "./components/Stockist.js");
/* harmony import */ var _styles_DetailDeliveryStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/DetailDeliveryStyles */ "./components/styles/DetailDeliveryStyles.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ZipCodeCheck */ "./components/ZipCodeCheck.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var DetailDelivery =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailDelivery, _Component);

  function DetailDelivery(props) {
    var _this;

    _classCallCheck(this, DetailDelivery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailDelivery).call(this, props));
    var stockistsWithZip = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["mapStockistsToZip"])(_this.props.stockists.stockists);
    _this.state = {
      deliveryServices: _this.props.stockists.delivery_services,
      retailers: stockistsWithZip
    };
    return _this;
  }

  _createClass(DetailDelivery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          deliveryZipCodes = _this$props.deliveryZipCodes,
          pageData = _this$props.pageData,
          handle = _this$props.handle,
          stockists = _this$props.stockists,
          shopifyProduct = _this$props.shopifyProduct,
          productRoundedPrice = _this$props.productRoundedPrice,
          zipCodeData = _this$props.zipCodeData;
      var deliveryClass = handle == 'CBD' ? 'cbd-delivery' : '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_10__["ZIP_CODE_QUERY"]
      }, function (_ref) {
        var zipCode = _ref.data.zipCode;
        var locationInfoByZip = zipCode != '' ? zipcodes__WEBPACK_IMPORTED_MODULE_4___default.a.lookup(zipCode) : '';
        var zipCodeState = locationInfoByZip != '' ? locationInfoByZip.state : '';
        var screen;
        var CBDExclusionZones = zipCodeData.cbd_exclusion_zones != '' && zipCodeData.cbd_exclusion_zones != null ? prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(zipCodeData.cbd_exclusion_zones) : ''; // Show "not available" message if zip code is in a state that is excluded from shipping

        if (handle == 'CBD' && zipCodeData.cbd_shipping_launched != 'true' || handle == 'CBD' && CBDExclusionZones.includes(zipCodeState)) {
          screen = 'ship';
        } // CANNABIS - Display stockists if in CA but not in delivery zone
        // If not in CA show not available screen
        // If in delivery zone enable buy buttons and hide this section completely (default return)


        if (handle == 'Cannabis' && zipCodeState == 'CA' && (!deliveryZipCodes.includes(zipCode) || zipCodeData.delivery_service_launched != 'true')) {
          screen = 'stockists';
        } else if (handle == 'Cannabis' && zipCodeState != 'CA') {
          screen = 'ship';
        }

        if (zipCode == '' && handle == 'Cannabis') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DetailDeliveryStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: deliveryClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "small-caps"
          }, "Price: $", productRoundedPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, pageData.find_lowell_near_you_heading && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.find_lowell_near_you_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZipCodeForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
            placeholderText: "Your Zip Code",
            buttonText: "Check My Location"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "not-in-ca"
          }, pageData.not_in_ca_heading && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.not_in_ca_heading)));
        }

        if (screen == 'ship') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DetailDeliveryStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: deliveryClass
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "not-available-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, pageData.not_available_for_delivery_heading && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.not_available_for_delivery_heading))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
            mutation: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_10__["TOGGLE_ZIP_MUTATION"]
          }, function (toggleZipCodeCheck) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "#",
              onClick: toggleZipCodeCheck,
              className: "text-button"
            }, "Not in ", zipCode, "? Change location.");
          }));
        }

        if (screen == 'stockists') {
          var closestRetailers = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["findClosestRetailers"])(_this2.state.retailers, zipCode, zipcodes__WEBPACK_IMPORTED_MODULE_4___default.a);
          var closestDeliveryServices = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["findClosestDeliveryServices"])(_this2.state.deliveryServices, zipCode);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_DetailDeliveryStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "deliveryClass ".concat(deliveryClass)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "no-delivery-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Here\u2019s where you can find Lowell near ", zipCode, "\u2026"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "stockists-and-retailers"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
            className: "section-title small-caps"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: stockists.retailers_icon.url,
            alt: "Lowell Retailers",
            width: "25"
          })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockists.retailers_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, closestRetailers != '' && closestRetailers.map(function (retailer, index) {
            if (index > 2) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "stockist-item"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stockist__WEBPACK_IMPORTED_MODULE_7__["default"], {
              key: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(retailer.stockist_name),
              stockist: retailer,
              stockistType: "retailer"
            }));
          }))), closestDeliveryServices.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
            className: "section-title small-caps"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: stockists.delivery_services_icon.url,
            alt: "Lowell Retailers",
            width: "25"
          })), prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockists.delivery_services_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, closestDeliveryServices.map(function (deliveryService, index) {
            if (index > 2) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "stockist-item"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Stockist__WEBPACK_IMPORTED_MODULE_7__["default"], {
              key: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(deliveryService.delivery_service_name),
              stockist: deliveryService,
              stockistType: "delivery"
            }));
          })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/stockists"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "view-more"
          }, "VIEW MORE RETAILERS AND DELIVERY SERVICES"))));
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: shopifyProduct.variants.edges[0].node.id,
          price: productRoundedPrice,
          availableForSale: shopifyProduct.availableForSale
        });
      });
    }
  }]);

  return DetailDelivery;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DetailDelivery);

/***/ }),

/***/ "./components/GearProductDetail.js":
/*!*****************************************!*\
  !*** ./components/GearProductDetail.js ***!
  \*****************************************/
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
/* harmony import */ var _styles_ButtonGold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ButtonGold */ "./components/styles/ButtonGold.js");
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _styles_LearnMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/LearnMore */ "./components/styles/LearnMore.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _styles_sections_productDetailStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/sections/productDetailStyles */ "./components/styles/sections/productDetailStyles.js");
/* harmony import */ var _VariantSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VariantSelector */ "./components/VariantSelector.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/prop-types */

/* eslint-disable class-methods-use-this */

/* eslint-disable react/destructuring-assignment */











var ProductPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductPage, _Component);

  function ProductPage(props) {
    var _this;

    _classCallCheck(this, ProductPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductPage).call(this, props));
    _this.state = {};
    _this.handleOptionChange = _this.handleOptionChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.props.shopifyProduct.options.forEach(function (selector) {
        _this2.setState({
          selectedOptions: _defineProperty({}, selector.name, selector.values[0])
        });
      });
    }
  }, {
    key: "handleOptionChange",
    value: function handleOptionChange(event) {
      var target = event.target;
      var selectedOptions = this.state.selectedOptions;
      selectedOptions[target.name] = target.value;
      var selectedVariant = this.props.shopifyProduct.variants.edges.find(function (variant) {
        return variant.node.selectedOptions.every(function (selectedOption) {
          return selectedOptions[selectedOption.name] === selectedOption.value;
        });
      }).node;
      this.setState({
        selectedVariant: selectedVariant,
        selectedVariantImage: selectedVariant.image.src
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          pageData = _this$props.pageData,
          quotesData = _this$props.quotesData,
          shopifyProduct = _this$props.shopifyProduct,
          newsletterData = _this$props.newsletterData,
          productInfo = _this$props.productInfo,
          sitewideData = _this$props.sitewideData;
      var metaTitle;

      if (productInfo.meta_title != null && productInfo.meta_title != '') {
        metaTitle = productInfo.meta_title;
      } else if (productInfo.product_title != null && productInfo.product_title != '') {
        metaTitle = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.product_title);
      }

      var metaDescription;

      if (productInfo.meta_description != null && productInfo.meta_description != '') {
        metaDescription = productInfo.meta_description;
      } else if (productInfo.full_product_description != null && productInfo.full_product_description != '') {
        metaDescription = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.full_product_description);
      } else {
        metaDescription = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.title);
      }

      var aboutImage;

      switch (productInfo.shopify_product.product_type) {
        case 'Accessories':
          aboutImage = pageData.accessories_footer_image;
          break;

        case 'Apparel':
          aboutImage = pageData.apparel_footer_image;
          break;

        default:
          aboutImage = pageData.learn_more_image;
      }

      var variant = this.state.selectedVariant || shopifyProduct.variants.edges[0].node;
      var variant_selectors = shopifyProduct.options[0].values.length > 1 && shopifyProduct.options.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VariantSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleOptionChange: _this3.handleOptionChange,
          key: option.id.toString(),
          option: option
        });
      });
      var productRoundedPrice = shopifyProduct.variants.edges[0].node.price.replace(/\.00$/, '');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_productDetailStyles__WEBPACK_IMPORTED_MODULE_8__["ProductDetailPage"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Lowell Herb Co | ", metaTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: metaDescription
      }), productInfo.keywords != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "keywords",
        content: productInfo.keywords
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-55p"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "v-h-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: productInfo && productInfo.product_detail_image_gallery.length > 0 && productInfo.product_detail_image_gallery[0].gallery_image.url,
        alt: shopifyProduct.title
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "product-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "small-caps dashed-underline"
      }, shopifyProduct.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, productInfo && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.full_product_description)), variant_selectors, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: variant.id,
        price: productRoundedPrice,
        availableForSale: shopifyProduct.availableForSale
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_productDetailStyles__WEBPACK_IMPORTED_MODULE_8__["CannabisLinks"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "link-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/cannabis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lowell Cannabis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "View Products")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "link-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/cbd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lowell CBD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "View Products"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LearnMore__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "container padding-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: aboutImage && aboutImage.url,
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonGold__WEBPACK_IMPORTED_MODULE_4__["default"], null, pageData.learn_more_button_text[0].text)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Newsletter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        newsletterData: newsletterData,
        page: "cannabis"
      }));
    }
  }]);

  return ProductPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ }),

/***/ "./components/HempProductDetail.js":
/*!*****************************************!*\
  !*** ./components/HempProductDetail.js ***!
  \*****************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _styles_ButtonGold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/ButtonGold */ "./components/styles/ButtonGold.js");
/* harmony import */ var _styles_LearnMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/LearnMore */ "./components/styles/LearnMore.js");
/* harmony import */ var _styles_sections_productDetailStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/sections/productDetailStyles */ "./components/styles/sections/productDetailStyles.js");
/* harmony import */ var _DetailDelivery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DetailDelivery */ "./components/DetailDelivery.js");
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










 // import DeliveryBanner from './DeliveryBanner';



var ProductPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductPage, _Component);

  function ProductPage() {
    _classCallCheck(this, ProductPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductPage).apply(this, arguments));
  }

  _createClass(ProductPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageData = _this$props.pageData,
          quotesData = _this$props.quotesData,
          productInfo = _this$props.productInfo,
          shopifyProduct = _this$props.shopifyProduct,
          newsletterData = _this$props.newsletterData,
          stockists = _this$props.stockists,
          deliveryZipCodes = _this$props.deliveryZipCodes,
          zipCodeData = _this$props.zipCodeData;
      var metaTitle;

      if (productInfo.meta_title != null && productInfo.meta_title != '') {
        metaTitle = productInfo.meta_title;
      } else if (productInfo.title != null && productInfo.title != '') {
        metaTitle = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.title);
      }

      var metaDescription;

      if (productInfo.meta_description != null && productInfo.meta_description != '') {
        metaDescription = productInfo.meta_description;
      } else if (productInfo.product_description != null && productInfo.product_description != '') {
        metaDescription = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.product_description);
      } else {
        metaDescription = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.title);
      }

      var aboutImageCategory = "".concat(productInfo.shopify_product.product_type, " ").concat(productInfo.product_category);
      var aboutImage;

      switch (aboutImageCategory) {
        case 'Cannabis Pack':
          aboutImage = pageData.learn_more_image;
          break;

        case 'Cannabis Individual Smoke':
          aboutImage = pageData.cannabis_individual_smoke_footer_image;
          break;

        case 'Cannabis Flower':
          aboutImage = pageData.cannabis_flower_footer_image;
          break;

        case 'CBD Pack':
          aboutImage = pageData.cbd_pack_footer_image;
          break;

        case 'CBD Individual Smoke':
          aboutImage = pageData.cbd_individual_smoke_footer_image;
          break;

        case 'CBD Flower':
          aboutImage = pageData.cbd_flower_footer_image;
          break;

        default:
          aboutImage = pageData.learn_more_image;
      }

      var showPackInfo = productInfo.product_category != 'Flower' && productInfo.product_category != 'Individual Smoke' && productInfo.hide_inside_pack_section != 'True';
      var ImageSeparator = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.section.withConfig({
        displayName: "HempProductDetail__ImageSeparator",
        componentId: "tcqjfe-0"
      })(["padding-bottom:100px;"]);
      var productType;
      var quantity;
      var packageDate;
      var productWeight;
      var labResults;
      var curatedMixture; // TYPE

      if (productInfo && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.type) != '') {
        productType = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "type"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "icon",
          src: "../static/icon.svg",
          alt: "Lowell Icon",
          width: "18"
        }), productInfo.type != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.type));
      } // QUANTITY


      if (productInfo && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.quantity) != '') {
        quantity = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "info-item  split-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, pageData.quantity != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.quantity), ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, productInfo.quantity != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.quantity)));
      } // DATE


      if (productInfo && productInfo.packaged_date != '') {
        var date = Object(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Date"])(productInfo.packaged_date);
        packageDate = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
          format: "MM/DD/YYYY"
        }, date);
        packageDate = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "info-item split-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, pageData.packaged != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.packaged), ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, packageDate));
      } // LAB RESULTS


      if (productInfo && productInfo.lab_results != '' && productInfo.lab_results[0].lab_result_item != '') {
        labResults = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inside-pack-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, pageData.lab_results_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.lab_results_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, productInfo.lab_results.map(function (result) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: result.lab_result_item != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(result.lab_result_item),
            className: "split-text"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "small-nitti-caps"
          }, result.lab_result_item != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(result.lab_result_item)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "thin-nitti-caps"
          }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(result.percentage)));
        })));
      } // MIXTURE


      if (productInfo && productInfo.mixture != '' && productInfo.mixture[0].mixture_title != '') {
        curatedMixture = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inside-pack-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, pageData.mixture_of_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.mixture_of_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, productInfo.mixture.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(item.mixture_title),
            className: "split-text"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "small-nitti-caps"
          }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(item.mixture_title)), item.thc_percentage1 !== null && item.thc_percentage1[0].text != '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "border-left thin-nitti-caps"
          }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(item.thc_percentage1)));
        })));
      } // WEIGHT


      if (shopifyProduct.variants.edges[0].node.weight > 0) {
        productWeight = "".concat(shopifyProduct.variants.edges[0].node.weight, " ").concat(shopifyProduct.variants.edges[0].node.weightUnit);
        productWeight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "info-item  split-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, pageData.weight != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.weight), ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, productWeight));
      } // PRICE


      var productRoundedPrice = shopifyProduct.variants.edges[0].node.price.replace(/\.00$/, '');
      var fullWidthSeparator;

      if (productInfo && productInfo.product_detail_divider_image != '' && !(Object.entries(productInfo.product_detail_divider_image).length === 0 && productInfo.product_detail_divider_image.constructor === Object)) {
        fullWidthSeparator = productInfo.product_detail_divider_image.url;
      } else if (pageData.image_separator != '') {
        fullWidthSeparator = pageData.image_separator.url;
      }

      var percentageUnit;

      if (productInfo && productInfo.percentage_unit != '') {
        percentageUnit = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.percentage_unit);
      } else {
        percentageUnit = 'THC';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_productDetailStyles__WEBPACK_IMPORTED_MODULE_10__["ProductDetailPage"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Lowell Herb Co | ", metaTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: metaDescription
      }), productInfo.keywords != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "keywords",
        content: productInfo.keywords
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-55p"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: productInfo && productInfo.product_detail_image != '' && productInfo.product_detail_image.url,
        alt: shopifyProduct.title
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "product-info-card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "split-text"
      }, productType, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "percent"
      }, productInfo && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(productInfo.thc_percentage), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, percentageUnit))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "small-caps dashed-underline"
      }, shopifyProduct.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thin-caps"
      }, productInfo.product_category != undefined && productInfo.product_category == 'Flower' ? 'strain' : 'blend'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "dashed-underline farms"
      }, productInfo && productInfo.farms.map(function (farm, index) {
        var commaSeparator = index < productInfo.farms.length - 1 ? ', ' : '';

        if (prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_url) != '') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            key: farm.farm_handle != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_url)
          }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle)), commaSeparator);
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle)
        }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle), commaSeparator);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thin-caps"
      }, pageData.farms != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.farms)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info-items"
      }, productWeight, quantity, packageDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailDelivery__WEBPACK_IMPORTED_MODULE_11__["default"], {
        deliveryZipCodes: deliveryZipCodes,
        pageData: pageData,
        handle: productInfo.shopify_product && productInfo.shopify_product.product_type,
        stockists: stockists,
        shopifyProduct: shopifyProduct,
        productRoundedPrice: productRoundedPrice,
        zipCodeData: zipCodeData
      })))), showPackInfo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageSeparator, {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: fullWidthSeparator,
        alt: "Learn More about Lowell"
      })), showPackInfo && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_productDetailStyles__WEBPACK_IMPORTED_MODULE_10__["InsidePackSection"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, pageData.inside_pack_heading && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.inside_pack_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text"
      }, productInfo && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(productInfo.product_description, _lib_helpers__WEBPACK_IMPORTED_MODULE_6__["linkResolver"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "thin-caps"
      }, pageData.flower_from_heading && prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(pageData.flower_from_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "farms"
      }, productInfo && productInfo.farms.map(function (farm, index) {
        if (prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_url) != '') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_url)
          }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle)));
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle)
        }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(farm.farm_handle));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, curatedMixture, labResults)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LearnMore__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "container padding-bottom ".concat(showPackInfo ? '' : 'no-padding-top')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: aboutImage != '' && aboutImage.url,
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonGold__WEBPACK_IMPORTED_MODULE_8__["default"], null, pageData.learn_more_button_text != '' && pageData.learn_more_button_text[0].text)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Newsletter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        newsletterData: newsletterData,
        page: "cannabis"
      }));
    }
  }]);

  return ProductPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

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

/***/ "./components/ProductDetail.js":
/*!*************************************!*\
  !*** ./components/ProductDetail.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base-64 */ "base-64");
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HempProductDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HempProductDetail */ "./components/HempProductDetail.js");
/* harmony import */ var _GearProductDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GearProductDetail */ "./components/GearProductDetail.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_PRODUCT_QUERY($handle: String!) {\n    shop {\n      productByHandle(handle: $handle) {\n        id\n        title\n        handle\n        description\n        availableForSale\n        collections(first: 1) {\n          edges {\n            node {\n              handle\n            }\n          }\n        }\n        options {\n          id\n          name\n          values\n        }\n        variants(first: 250) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          edges {\n            node {\n              id\n              title\n              weight\n              weightUnit\n              selectedOptions {\n                name\n                value\n              }\n              image {\n                src\n              }\n              price\n            }\n          }\n        }\n        images(first: 250) {\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n          }\n          edges {\n            node {\n              src\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

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








var ProductDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductDetail, _Component);

  function ProductDetail() {
    _classCallCheck(this, ProductDetail);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductDetail).apply(this, arguments));
  }

  _createClass(ProductDetail, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageData = _this$props.pageData,
          quotesData = _this$props.quotesData,
          products = _this$props.products,
          gearProducts = _this$props.gearProducts,
          newsletterData = _this$props.newsletterData,
          stockists = _this$props.stockists,
          deliveryZipCodes = _this$props.deliveryZipCodes,
          zipCodeData = _this$props.zipCodeData,
          sitewideData = _this$props.sitewideData;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_PRODUCT_QUERY,
        variables: {
          handle: this.props.handle
        }
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Error: ", error.message);
        if (!data.shop.productByHandle) react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This item no longer exists"); // Create an object of Prismic data with the Shopify IDs as keys

        var prismicProductData = {}; // console.log(products);
        // return <p>Test</p>;

        for (var i = 0; i < products.length; i++) {
          // console.log(products[i].data.shopify_product != null);
          var _productId = products[i].data.shopify_product != '' && products[i].data.shopify_product != null ? products[i].data.shopify_product.id : '';

          prismicProductData[_productId] = products[i];
        }

        for (var _i = 0; _i < gearProducts.length; _i++) {
          var _productId2 = gearProducts[_i].data.shopify_product != '' ? gearProducts[_i].data.shopify_product.id : '';

          prismicProductData[_productId2] = gearProducts[_i];
        }

        var selectedProduct = data.shop.productByHandle;
        var selectedProductCollection = selectedProduct.collections.edges[0].node.handle;
        var shopifyId = base_64__WEBPACK_IMPORTED_MODULE_3___default.a.decode(selectedProduct.id);
        var productId = /[^/]*$/.exec(shopifyId)[0];
        var productInfo = prismicProductData[productId] ? prismicProductData[productId].data : false;
        var productDetailTemplate; // console.log(productInfo);

        if (selectedProductCollection == 'cannabis' || selectedProductCollection == 'cbd') {
          productDetailTemplate = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HempProductDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
            shopifyProduct: selectedProduct,
            productInfo: productInfo,
            pageData: pageData,
            quotesData: quotesData,
            newsletterData: newsletterData,
            stockists: stockists,
            deliveryZipCodes: deliveryZipCodes,
            zipCodeData: zipCodeData
          });
        } else {
          productDetailTemplate = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GearProductDetail__WEBPACK_IMPORTED_MODULE_5__["default"], {
            shopifyProduct: selectedProduct,
            pageData: pageData,
            quotesData: quotesData,
            newsletterData: newsletterData,
            productInfo: productInfo,
            zipCodeData: zipCodeData,
            sitewideData: sitewideData
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, productDetailTemplate);
      }));
    }
  }]);

  return ProductDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);
var SINGLE_PRODUCT_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

/***/ }),

/***/ "./components/Stockist.js":
/*!********************************!*\
  !*** ./components/Stockist.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stockist; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Stockist =
/*#__PURE__*/
function (_Component) {
  _inherits(Stockist, _Component);

  function Stockist() {
    _classCallCheck(this, Stockist);

    return _possibleConstructorReturn(this, _getPrototypeOf(Stockist).apply(this, arguments));
  }

  _createClass(Stockist, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stockist = _this$props.stockist,
          stockistType = _this$props.stockistType; // Retailer

      if (stockistType == 'retailer' && stockist.stockist_url != '') {
        var addressURL = "https://www.google.com/maps/place/".concat(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_address).split(' ').join('+'));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: stockist.stockist_url != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_url),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, stockist.stockist_name != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: addressURL,
          target: "_blank"
        }, stockist.stockist_address != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_address))));
      }

      if (stockistType == 'retailer') {
        var _addressURL = "https://www.google.com/maps/place/".concat(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_address).split(' ').join('+'));

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: _addressURL,
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, stockist.stockist_name != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, stockist.stockist_address != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.stockist_address))));
      }

      var deliveryUrl = prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.delivery_service_url);

      if (stockist.delivery_service_url != '' && stockistType == 'delivery') {
        var readableUrl = deliveryUrl.replace(/(^\w+:|^)\/\//, '');
        readableUrl = readableUrl.replace(/\/$/, '');
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: deliveryUrl,
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, stockist.delivery_service_name != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.delivery_service_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, readableUrl)));
      } // Delivery Service


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, stockist.delivery_service_name != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(stockist.delivery_service_name)));
    }
  }]);

  return Stockist;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Stockist__ListItem",
  componentId: "sc-2zqgdg-0"
})(["border:1px solid #cecbc5;padding:30px;margin-bottom:20px;@media screen and (max-width:768px){padding:30px 20px;}h2{font-family:'Gotham Bold';font-size:2.4rem;margin:0;text-transform:uppercase;letter-spacing:0.1rem;color:#726c59;@media screen and (max-width:768px){font-size:1.8rem;line-height:1.2;}}p{margin:0;font-family:'Nitti Light';color:#333639;font-size:1.5rem;@media screen and (max-width:768px){font-size:1.3rem;line-height:1.2;margin-top:4px;}}a{color:inherit;text-transform:uppercase;}"]);

/***/ }),

/***/ "./components/VariantSelector.js":
/*!***************************************!*\
  !*** ./components/VariantSelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StyledSelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "VariantSelector__StyledSelectWrapper",
  componentId: "rj2uhd-0"
})(["select{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;outline:0;box-shadow:none;border:0;background:#f6f6f6;border-radius:0;background-image:none;}.select{position:relative;display:block;width:100%;height:3em;line-height:3;background:#f6f6f6;border:1px solid #d0d0d0;overflow:hidden;border-radius:0;}select{width:100%;height:100%;margin:0;padding:0 0 0 20px;color:#333639;font-family:'Nitti Light',serif;font-size:1.4rem;letter-spacing:0.1rem;text-transform:uppercase;cursor:pointer;}select::-ms-expand{display:none;}.select::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #333639;position:absolute;transform:translateY(-25%);top:50%;right:20px;bottom:0;padding:0;background:#f6f6f6;pointer-events:none;}.select::after{-webkit-transition:0.25s all ease;-o-transition:0.25s all ease;transition:0.25s all ease;}"]);

var VariantSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(VariantSelector, _Component);

  function VariantSelector() {
    _classCallCheck(this, VariantSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(VariantSelector).apply(this, arguments));
  }

  _createClass(VariantSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSelectWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "select"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "Product__option",
        name: this.props.option.name,
        key: this.props.option.name,
        onChange: this.props.handleOptionChange
      }, this.props.option.values.map(function (value) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: value,
          key: "".concat(_this.props.option.name, "-").concat(value)
        }, "".concat(value));
      }))));
    }
  }]);

  return VariantSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VariantSelector);

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

/***/ "./components/styles/DetailDeliveryStyles.js":
/*!***************************************************!*\
  !*** ./components/styles/DetailDeliveryStyles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var DetailDeliveryStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DetailDeliveryStyles",
  componentId: "sc-1s94qpn-0"
})(["text-align:center;padding-top:1.7rem;border-top:1px solid #dadad9;h2{font-family:'Lora regular';font-size:2rem;margin-bottom:2.5rem;}h3{font-size:1.6rem;margin-bottom:3rem;}input{display:block;width:100%;font-family:inherit;border:0;padding:16px 12px;background-color:white;box-shadow:none;outline:none;font-size:1.3rem;margin-bottom:1.2rem;text-transform:uppercase;}button,.text-button{display:block;width:100%;padding:20px 12px 20px;text-align:center;background-color:#333639;color:white;font-size:1.3rem;font-family:'Gotham Bold';text-transform:uppercase;letter-spacing:0.1rem;line-height:1;cursor:pointer;transition:all 0.3s ease-in-out;&:hover{background-color:#242628;}&.dark-button{max-width:492px;margin-left:auto;margin-right:auto;}}.text-button{background:none;padding:0;color:#9c8d72;font-size:1rem;margin-top:3rem;&:hover{background:none;}}.not-in-ca{font-size:1rem;font-family:'Gotham Bold',sans-serif;text-transform:uppercase;margin-top:2rem;margin-bottom:1.5rem;color:#9c8d72;}.no-delivery-wrapper{h2{font-size:1.7rem;max-width:80%;text-align:left;color:#333639;margin-bottom:0;img{display:inline-block;margin-right:20px;}}}.stockists-and-retailers{max-height:350px;overflow-y:scroll;li{text-align:left;border:0;border-bottom:1px solid #ecebe9;padding:20px 0;margin:0;h2{font-size:1.4rem;font-family:'Gotham Bold';}p{font-size:1.2rem;}}.section-title{font-family:'Gotham Bold',sans-serif;font-size:1.6rem;text-transform:uppercase;color:#333639;margin:35px 0 0;letter-spacing:0.1rem;}}.view-more{font-size:1.1rem;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;letter-spacing:0.1rem;color:#9c8d72;padding-top:30px;display:inline-block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (DetailDeliveryStyles);

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

/***/ "./components/styles/sections/productDetailStyles.js":
/*!***********************************************************!*\
  !*** ./components/styles/sections/productDetailStyles.js ***!
  \***********************************************************/
/*! exports provided: ProductDetailPage, InsidePackSection, CannabisLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsidePackSection", function() { return InsidePackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CannabisLinks", function() { return CannabisLinks; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ProductDetailPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "productDetailStyles__ProductDetailPage",
  componentId: "lhotb5-0"
})(["background-color:#ecebe9;padding-top:60px;h1{font-size:1.8rem;color:#333639;margin-bottom:6px;}.thin-caps,.info-item{font-family:'Nitti Light',serif;font-size:1.2rem;text-transform:uppercase;letter-spacing:0.06rem;margin-bottom:6px;margin-top:0;color:#69574e;}.dashed-underline{border-bottom:1px dashed #9e9781;}.product-info-card{background-color:#f6f6f6;padding:30px;@media screen and (max-width:768px){padding:20px;}.description{padding-top:2rem;padding-bottom:3rem;}.type{color:#7c7769;font-family:'Gotham Bold',sans-serif;font-size:1.6rem;text-transform:uppercase;letter-spacing:0.1rem;display:flex;align-items:center;}.percent{font-family:'Nitti Bold',serif;text-transform:uppercase;font-size:1.7rem;letter-spacing:0.08rem;color:#333639;span{font-family:'Gotham Book';font-size:1.45rem;color:#6b6653;}}.icon{display:inline-block;margin-right:12px;position:relative;bottom:2px;}.thin-caps,.info-item{color:#69574e;}.info-item span:nth-of-type(2){color:#333639;}.info-items{margin-top:40px;margin-bottom:100px;}.farms{margin-top:25px;}}.farms span,.farms a{color:#333639;font-family:'Gotham Bold',sans-serif;font-size:1.2rem;letter-spacing:0.08rem;text-transform:uppercase;line-height:1;}.farms{margin-bottom:6px;}.header{padding-bottom:100px;}"]);
var InsidePackSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "productDetailStyles__InsidePackSection",
  componentId: "lhotb5-1"
})(["background-color:#e8e7e5;padding-top:100px;padding-bottom:150px;.rich-text{font-family:'Nitti Light',serif;font-size:1.3rem;color:#333639;letter-spacing:0.1rem;max-width:410px;margin-bottom:35px;}h3{font-family:'Lora Regular',serif;font-size:3rem;color:#6b6653;letter-spacing:0.08rem;margin-bottom:4px;margin-top:0;}h5{color:#69574e;font-size:1.1rem;text-transform:uppercase;letter-spacing:0.1rem;font-family:'Gotham Bold',sans-serif;border-bottom:1px solid #69574e;padding-bottom:8px;margin-top:14px;margin-bottom:0;}.inside-pack-list{margin-top:18px;}.inside-pack-list:first-of-type{margin-top:0;}li{margin:0;}li span{padding-top:6px;}li:first-of-type span{padding-top:20px;}li:last-of-type span{padding-bottom:18px;}.border-left{border-left:1px solid #69574e;padding-left:20px;}"]);
var CannabisLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "productDetailStyles__CannabisLinks",
  componentId: "lhotb5-2"
})([".container{max-width:1053px;}.cols-2{@media screen and (min-width:1058px){grid-column-gap:65px;}}.link-card{border:1px solid #979797;text-align:center;font-family:'Lora Regular',serif;padding:50px 20px 30px;}h3{font-size:5.8rem;max-width:300px;line-height:1;margin:0 auto 45px;}p{font-size:1.6rem;}"]);

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

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Link Resolver
function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === 'page') {
    return "/page/".concat(doc.uid);
  }

  if (doc.type === 'blog_post') {
    return "/blog/".concat(doc.uid);
  } // Default to homepage


  return '/';
}

function mapStockistsToZip(stockists) {
  return stockists.map(function (stockist) {
    if (stockist.stockist_address != '') {
      var str = stockist.stockist_address[0].text;
      var fiveDigitNumbers = str.match(/\b\d{5}\b/g); // Get last five digit number - the zip code

      var zip = fiveDigitNumbers != undefined ? fiveDigitNumbers.slice(-1)[0] : ''; // console.log(parseInt(zip, 10)); // ["12345", "54321"]

      stockist.zip = zip;
    }

    return stockist;
  });
}

function findClosestDeliveryServices(allDeliveryServices, zipCode) {
  var closestDeliveryServices = [];

  for (var i = 0; i < allDeliveryServices.length; i++) {
    // console.log(allDeliveryServices[i]);
    if (allDeliveryServices[i].delivery_service_zip_codes != '') {
      var deliveryZipCodes = allDeliveryServices[i].delivery_service_zip_codes[0].text;
      var isInDeliveryRange = deliveryZipCodes.includes(zipCode); // console.log(isInDeliveryRange);
      // console.log(distance);

      if (isInDeliveryRange) {
        closestDeliveryServices.push(allDeliveryServices[i]);
      }
    }
  }

  return closestDeliveryServices;
}

function findClosestRetailers(allRetailers, zipCode, zipcodes) {
  // Find retailers and delivery services closest to zip code
  var closestRetailers = [];

  for (var i = 0; i < allRetailers.length; i++) {
    if (allRetailers[i].zip != undefined) {
      allRetailers[i].distance = zipCode != null ? zipcodes.distance(zipCode, allRetailers[i].zip) : 1001; // console.log(distance);

      if (allRetailers[i].distance != null) {
        closestRetailers.push(allRetailers[i]);
      }
    }
  }

  closestRetailers.sort(function (a, b) {
    return a.distance - b.distance;
  });
  return closestRetailers;
}

module.exports = {
  linkResolver: linkResolver,
  mapStockistsToZip: mapStockistsToZip,
  findClosestDeliveryServices: findClosestDeliveryServices,
  findClosestRetailers: findClosestRetailers
};

/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _components_ProductDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductDetail */ "./components/ProductDetail.js");


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




var productDetailPage =
/*#__PURE__*/
function (_Component) {
  _inherits(productDetailPage, _Component);

  function productDetailPage() {
    _classCallCheck(this, productDetailPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(productDetailPage).apply(this, arguments));
  }

  _createClass(productDetailPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          quotes = _this$props.quotes,
          products = _this$props.products,
          query = _this$props.query,
          newsletter = _this$props.newsletter,
          gearProducts = _this$props.gearProducts,
          stockists = _this$props.stockists,
          zipCodes = _this$props.zipCodes,
          sitewideData = _this$props.sitewideData;
      var data = page.data;
      var deliveryZones = zipCodes.cannabis_delivery_zones.map(function (zipCodeItem) {
        return zipCodeItem.zip_code;
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProductDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handle: query.handle,
        pageData: data,
        quotesData: quotes,
        products: products,
        gearProducts: gearProducts,
        newsletterData: newsletter,
        stockists: stockists.data,
        deliveryZipCodes: deliveryZones,
        zipCodeData: zipCodes,
        sitewideData: sitewideData.data
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var pageId, response, productsResponse, gearProductsResponse, stockistsId, stockistsResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Query the Prismic API with the ID of the page
                pageId = 'XKFQDxAAADkksUUv';
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageApi"])(pageId);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageByType"])('product');

              case 6:
                productsResponse = _context.sent;
                _context.next = 9;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageByType"])('gear_product');

              case 9:
                gearProductsResponse = _context.sent;
                stockistsId = 'XJbmbhEAAPHUozLk';
                _context.next = 13;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageApi"])(stockistsId);

              case 13:
                stockistsResponse = _context.sent;
                return _context.abrupt("return", {
                  page: response,
                  products: productsResponse,
                  gearProducts: gearProductsResponse,
                  stockists: stockistsResponse
                });

              case 15:
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

  return productDetailPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (productDetailPage);

/***/ }),

/***/ 8:
/*!********************************!*\
  !*** multi ./pages/product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/product.js */"./pages/product.js");


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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

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
//# sourceMappingURL=product.js.map