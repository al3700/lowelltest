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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./components/AgeCheck.js":
/*!********************************!*\
  !*** ./components/AgeCheck.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AgeCheckStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/AgeCheckStyles */ "./components/styles/AgeCheckStyles.js");
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AgeCheck =
/*#__PURE__*/
function (_Component) {
  _inherits(AgeCheck, _Component);

  function AgeCheck() {
    _classCallCheck(this, AgeCheck);

    return _possibleConstructorReturn(this, _getPrototypeOf(AgeCheck).apply(this, arguments));
  }

  _createClass(AgeCheck, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          showAgeCheck = _this$props.showAgeCheck;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_AgeCheckStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: showAgeCheck ? '' : 'hide'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/stamped_edges.svg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "padded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/icon.svg",
        alt: "Lowell Icon",
        className: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Are you 21+?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "padded bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "button",
        onClick: action
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.google.com/",
        className: "button"
      }, "No")))));
    }
  }]);

  return AgeCheck;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AgeCheck);

/***/ }),

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _LineItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LineItem */ "./components/LineItem.js");
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
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());

var Cart =
/*#__PURE__*/
function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cart).apply(this, arguments));
  }

  _createClass(Cart, [{
    key: "render",
    value: function render() {
      var localStorageCheckout = this.props.localStorageCheckout;
      var shopifyCheckout;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: TOGGLE_CART_MUTATION
      }, function (toggleCart) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: LOCAL_STATE_QUERY
        }, function (_ref) {
          var data = _ref.data;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
            open: data.cartOpen
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: toggleCart,
            title: "close"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: "/static/close_dark.svg",
            alt: "Close Cart"
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
            query: _AddToCart__WEBPACK_IMPORTED_MODULE_5__["CHECKOUT_QUERY"]
          }, function (_ref2) {
            var data = _ref2.data,
                error = _ref2.error,
                loading = _ref2.loading;
            if (loading) return null;
            if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Error: ", error.message);
            if (data.checkout == undefined) return null;
            var localCheckoutEmpty = Object.entries(localStorageCheckout).length === 0 && localStorageCheckout.constructor === Object;

            if (data.checkout && data.checkout.id != '') {
              shopifyCheckout = data.checkout;
            } else if (!localCheckoutEmpty) {
              shopifyCheckout = localStorageCheckout;
            } // return null;


            if (shopifyCheckout && shopifyCheckout.lineItems.edges && shopifyCheckout.lineItems.edges.length > 0 && shopifyCheckout.lineItems.edges[0].node != undefined) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "inner-wrapper"
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, shopifyCheckout.lineItems.edges.map(function (lineItem) {
                if (lineItem.node == undefined) return null;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  key: lineItem.node.id.toString(),
                  line_item: lineItem.node,
                  checkout: shopifyCheckout
                });
              })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
                className: "cart-total split-text"
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Total:"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$", shopifyCheckout.totalPrice)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                href: shopifyCheckout.webUrl,
                title: "Checkout",
                className: "gold-button"
              }, "Check Out")));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your cart is empty.");
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "warning-text"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null)));
        });
      });
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);


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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
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





var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "qfxwxq-0"
})(["background-color:", ";color:white;font-size:1rem;border-bottom:10px solid #807768;a{color:white;}"], function (props) {
  return props.theme.darkGrey;
});
var FooterInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.footer.withConfig({
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

/***/ }),

/***/ "./components/LineItem.js":
/*!********************************!*\
  !*** ./components/LineItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_LineItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/LineItemStyles */ "./components/styles/LineItemStyles.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var LineItem =
/*#__PURE__*/
function (_Component) {
  _inherits(LineItem, _Component);

  function LineItem(props) {
    var _this;

    _classCallCheck(this, LineItem);

    // Required step: always call the parent class' constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineItem).call(this, props));
    _this.state = {
      quantity: _this.props.line_item.quantity
    };
    return _this;
  }

  _createClass(LineItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          checkout = _this$props.checkout,
          line_item = _this$props.line_item;
      var price = (line_item.quantity * line_item.variant.price).toFixed(2);
      var productRoundedPrice = price.replace(/\.00$/, '');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_LineItemStyles__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-28p"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, line_item.variant.image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: line_item.variant.image.src,
        alt: "".concat(line_item.title, " product shot")
      }) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-item-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title small-caps"
      }, line_item.title), line_item.variant.title != 'Default Title' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "variant-title"
      }, line_item.variant.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "split-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "line-item-price "
      }, "$", productRoundedPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM_MUTATION"],
        variables: {
          checkoutId: checkout && checkout.id,
          lineItemIds: [line_item.id]
        },
        update: function update(cache, _ref) {
          var checkoutLineItemsRemove = _ref.data.checkoutLineItemsRemove;
          cache.writeQuery({
            query: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT_QUERY"],
            data: {
              checkout: [checkoutLineItemsRemove][0].checkout
            }
          });
          localStorage.setItem('checkout', JSON.stringify([checkoutLineItemsRemove][0].checkout));
          localStorage.setItem('checkoutId', [checkoutLineItemsRemove][0].checkout.id);
        }
      }, function (checkoutLineItemsRemove) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "small-caps remove-btn",
          onClick: checkoutLineItemsRemove
        }, "Remove");
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "line-item-quantity-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["UPDATE_LINE_ITEM_MUTATION"],
        variables: {
          checkoutId: checkout && checkout.id,
          lineItems: [{
            id: line_item.id,
            quantity: parseInt(this.state.quantity - 1, 10)
          }]
        },
        update: function update(cache, _ref2) {
          var checkoutLineItemsUpdate = _ref2.data.checkoutLineItemsUpdate;

          var _cache$readQuery = cache.readQuery({
            query: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT_QUERY"]
          }),
              checkout = _cache$readQuery.checkout;

          cache.writeQuery({
            query: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT_QUERY"],
            data: {
              checkout: [checkoutLineItemsUpdate][0].checkout
            }
          });
          localStorage.setItem('checkout', JSON.stringify([checkoutLineItemsUpdate][0].checkout));
          localStorage.setItem('checkoutId', [checkoutLineItemsUpdate][0].checkout.id);

          _this2.setState({
            quantity: _this2.state.quantity - 1
          });
        }
      }, function (checkoutLineItemsUpdate) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "line-item-quantity-update",
          onClick: checkoutLineItemsUpdate
        }, "\u2013");
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "line-item-quantity"
      }, line_item.quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["UPDATE_LINE_ITEM_MUTATION"],
        variables: {
          checkoutId: checkout && checkout.id,
          lineItems: [{
            id: line_item.id,
            quantity: parseInt(this.state.quantity + 1, 10)
          }]
        },
        update: function update(cache, _ref3) {
          var checkoutLineItemsUpdate = _ref3.data.checkoutLineItemsUpdate;

          var _cache$readQuery2 = cache.readQuery({
            query: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT_QUERY"]
          }),
              checkout = _cache$readQuery2.checkout;

          cache.writeQuery({
            query: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT_QUERY"],
            data: {
              checkout: [checkoutLineItemsUpdate][0].checkout
            }
          });

          _this2.setState({
            quantity: _this2.state.quantity + 1
          });

          localStorage.setItem('checkout', JSON.stringify([checkoutLineItemsUpdate][0].checkout));
          localStorage.setItem('checkoutId', [checkoutLineItemsUpdate][0].checkout.id);
        }
      }, function (checkoutLineItemsUpdate) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          className: "line-item-quantity-update",
          onClick: checkoutLineItemsUpdate
        }, "+");
      }))))));
    }
  }]);

  return LineItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LineItem);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meta; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Meta =
/*#__PURE__*/
function (_Component) {
  _inherits(Meta, _Component);

  function Meta() {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, _getPrototypeOf(Meta).apply(this, arguments));
  }

  _createClass(Meta, [{
    key: "render",
    value: function render() {
      var sitewideData = this.props.sitewideData;
      var metaDescription = sitewideData.data.meta_description_for_sharing != '' && sitewideData.data.meta_description_for_sharing[0].text;
      var metaImage = sitewideData.data.social_sharing_image != '' && sitewideData.data.social_sharing_image.url;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/nprogress.css"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Lowell Herb Co"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "uI5bRs9ltVNi_Ma0b85fSU0KPZqUCQ_qIbr_MSGUEeI"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:title",
        content: "Lowell Herb Co"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:description",
        content: metaDescription
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:image",
        content: metaImage
      }));
    }
  }]);

  return Meta;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
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


/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: router.route == '/cbd' ? 'current-page' : ''
      }, sitewideData.data.cafe_link_text != '' && sitewideData.data.cafe_link_text[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ZipCodeCheck */ "./components/ZipCodeCheck.js");
/* harmony import */ var _AgeCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AgeCheck */ "./components/AgeCheck.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/analytics */ "./lib/analytics.js");
/* harmony import */ var _lib_checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/checkout */ "./lib/checkout.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'Nitti Light';\n    src: url('/static/fonts/NittiLight.woff2') format('woff2'),\n        url('/static/fonts/NittiLight.woff') format('woff'),\n        url('/static/fonts/NittiLight.ttf') format('truetype'),\n        url('/static/fonts/NittiLight.eot') format('embedded-opentype');\n  }\n\n  @font-face {\n    font-family: 'Nitti Bold';\n    src: url('/static/fonts/NittiBold.woff2') format('woff2'),\n        url('/static/fonts/NittiBold.woff') format('woff'),\n        url('/static/fonts/NittiBold.ttf') format('truetype'),\n        url('/static/fonts/NittiBold.eot') format('embedded-opentype');\n  }\n\n  @font-face {\n    font-family: 'Lora Regular';\n    src: url('/static/fonts/LoraRegular.woff2') format('woff2'),\n        url('/static/fonts/LoraRegular.woff') format('woff'),\n        url('/static/fonts/LoraRegular.ttf') format('truetype'),\n        url('/static/fonts/LoraRegular.eot') format('embedded-opentype');\n  }\n\n  /* Used on about page */\n  @font-face {\n    font-family: 'Lora Italic';\n    src: url('/static/fonts/LoraItalic.woff2') format('woff2'),\n        url('/static/fonts/LoraItalic.woff') format('woff'),\n        url('/static/fonts/LoraItalic.ttf') format('truetype'),\n        url('/static/fonts/LoraItalic.eot') format('embedded-opentype');\n  }\n\n  @font-face {\n    font-family: 'Lora Bold';\n    src: url('/static/fonts/Lora-Bold.woff2') format('woff2'), url('/static/fonts/Lora-Bold.woff') format('woff'), url('/static/fonts/Lora-Bold.ttf') format('truetype'), url('/static/fonts/Lora-Bold.eot') format('embedded-opentype');\n  }\n\n  @font-face {\n    font-family: 'Gotham Bold';\n    src: url('/static/fonts/Gotham-Bold.woff2') format('woff2'),\n        url('/static/fonts/Gotham-Bold.woff') format('woff'),\n        url('/static/fonts/Gotham-Bold.ttf') format('truetype'),\n        url('/static/fonts/Gotham-Bold.eot') format('embedded-opentype');\n  }\n\n  @font-face {\n    font-family: 'Gotham Book';\n    src: url('/static/fonts/Gotham-Book.woff2') format('woff2'),\n        url('/static/fonts/Gotham-Book.woff') format('woff'),\n        url('/static/fonts/Gotham-Book.ttf') format('truetype'),\n        url('/static/fonts/Gotham-Book.eot') format('embedded-opentype');\n  }\n\n  @font-face {\n    font-family: 'SS Nickson Six';\n    src: url('/static/fonts/SSNicksonSix.woff2') format('woff2'), url('/static/fonts/SSNicksonSix.woff') format('woff'), url('/static/fonts/SSNicksonSix.ttf') format('truetype'), url('/static/fonts/SSNicksonSix.eot') format('embedded-opentype');\n    font-style: normal;\n    font-weight: 600;\n  }\n\n  @font-face {\n    font-family: 'Aurora';\n    src: url(\"/static/fonts/Aurora.woff2\") format('woff2'), url(\"/static/fonts/Aurora.woff\") format('woff'), url(\"/static/fonts/Aurora.ttf\") format('truetype'), url(\"/static/fonts/Aurora.eot\") format('embedded-opentype');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  html, body {\n    overflow-x: hidden;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    margin: 0;\n    background-color: ", ";\n    font-family: \"Nitti Light\", sans-serif;\n    font-size: 1.6rem;\n    color: #171717;\n    line-height: 1.4;\n    letter-spacing: .02rem;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-font-smoothing: antialiased;\n    padding-top: 76px;\n    @media screen and (max-width: 960px) {\n    padding-top: 40px;\n\n    }\n  }\n\n  a {\n    text-decoration: none;\n    transition: all .3s ease-in-out;\n    color: #171717;\n  }\n\n  a:hover,\n  a:active {\n\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  h1 {\n    font-size: ", ";\n    @media only screen and (max-width: 1000px) {\n      font-size: 50px;\n    }\n    @media only screen and (max-width: 768px) {\n      font-size: 48px;\n    }\n  }\n\n  h2 {\n    font-size: ", ";\n  }\n\n  h3 {\n    font-size: ", ";\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  strong {\n    font-weight: normal;\n  }\n\n  button {\n    background-color: transparent;\n    outline: none;\n    border: none;\n  }\n\n  [class*=\"small-caps\"] {\n    text-transform: uppercase;\n    font-family: 'Gotham Bold', sans-serif;\n    letter-spacing: .09rem;\n    font-size: 1.2rem;\n  }\n\n  [class*=\"gold-text\"] {\n    color: #A69463;\n  }\n\n  .small-nitti-caps {\n    font-family: 'Nitti Bold', sans-serif;\n    font-size: 1.3rem;\n  }\n\n  .thin-nitti-caps {\n    text-transform: uppercase;\n    font-family: 'Nitti Light', sans-serif;\n    letter-spacing: .1rem;\n    font-size: 1.3rem;\n    color: #333639;\n  }\n\n  img {\n    max-width: 100%;\n    display: block;\n  }\n\n\n  .cols-2 {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 30px;\n    }\n  }\n\n  .cols-3 {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 20px;\n    }\n  }\n\n  .cols-4-even {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: repeat(4, 25%);\n\n    }\n  }\n\n  .cols-3-even {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: repeat(3, 33.333%);\n    }\n  }\n\n  .cols-6-even {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: repeat(6, 16.6%);\n    }\n  }\n\n  .cols-2-md {\n    @media only screen and (min-width: 758px) and (max-width: 1000px) {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 30px;\n    }\n  }\n\n  .cols-28p {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: 28fr 72fr;\n      grid-gap: 20px;\n    }\n  }\n\n  .cols-44p {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: 44fr 56fr;\n      grid-gap: 0;\n    }\n  }\n\n  .cols-55p {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: 45fr 55fr;\n      grid-gap: 40px;\n    }\n    @media only screen and (min-width: 1025px) {\n      grid-gap: 110px;\n      grid-template-columns: 55fr 45fr;\n    }\n  }\n\n  .cols-60p {\n    @media only screen and (min-width: 758px) {\n      display: grid;\n      grid-template-columns: 60fr 40fr;\n      grid-gap: 60px;\n    }\n  }\n\n  .show-mobile {\n    display: none;\n    @media only screen and (max-width: 960px) {\n      display: block;\n\n    }\n\n  }\n\n  .hide-mobile {\n    @media only screen and (max-width: 960px) {\n      display: none;\n\n    }\n\n  }\n\n  .no-gutters {\n    grid-gap: 0;\n  }\n\n  .vertical-aligner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .v-h-aligner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .split-text {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .mobile-flex-reverse {\n    @media only screen and (max-width: 768px) {\n      display: flex;\n      flex-direction: column-reverse;\n      margin-top: 60px;\n    }\n  }\n\n  .container {\n    width: 86%;\n    max-width: 1160px;\n    margin: 0 auto;\n    @media only screen and (max-width: 768px) {\n      width: 90%;\n    }\n  }\n\n  .container-md {\n    width: 86%;\n    max-width: 960px;\n    margin: 0 auto;\n    @media only screen and (max-width: 768px) {\n      width: 92%;\n    }\n  }\n\n  .container-sm {\n    width: 86%;\n    max-width: 740px;\n    margin: 0 auto;\n    @media only screen and (max-width: 768px) {\n      width: 92%;\n    }\n  }\n\n  .container-lg {\n    max-width: 1300px;\n    width: 86%;\n    margin: 0 auto;\n    @media only screen and (max-width: 768px) {\n      width: 92%;\n    }\n  }\n\n  @media only screen and (min-width: 758px) {\n    .cols-2 {\n      > div:nth-of-type(2) .small-inner {\n        margin-left: auto;\n      }\n    }\n\n  }\n\n  .small-inner {\n    max-width: 420px;\n  }\n\n  .publication {\n    text-transform: uppercase;\n    font-family: 'Gotham Bold', sans-serif;\n    letter-spacing: .1rem;\n    font-size: 1.2rem;\n    color: #6B6653;\n  }\n\n  .quote {\n    font-family: 'Lora Regular', serif;\n  }\n\n  input[type=number]::-webkit-inner-spin-button,\n  input[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  fieldset {\n    border: none;\n    padding: 0;\n    margin: 0;\n  }\n\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showAgeCheck: false,
      localStorageCheckout: {}
    });

    _defineProperty(_assertThisInitialized(_this), "allowSiteEntry", function () {
      // Show 6 more delivery services each time the button is clicked
      localStorage.setItem('isOfLegalAge', 'true');

      _this.setState({
        showAgeCheck: false
      });
    });

    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!window.GA_INITIALIZED) {
        var gaAppId = prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(this.props.sitewideData.data.landing_app_ga_id);
        Object(_lib_analytics__WEBPACK_IMPORTED_MODULE_11__["initGA"])(gaAppId);
        console.log(gaAppId);
        window.GA_INITIALIZED = true;
      }

      Object(_lib_analytics__WEBPACK_IMPORTED_MODULE_11__["logPageView"])(); // When this component mounts, begin listening for scroll changes

      var _localStorage = localStorage,
          isOfLegalAge = _localStorage.isOfLegalAge;

      if (isOfLegalAge == 'true') {
        this.setState({
          showAgeCheck: false
        });
      } else {
        this.setState({
          showAgeCheck: true
        });
      }

      var localZipCode = localStorage.getItem('zipCode');

      if (localZipCode) {
        this.props.client.writeData({
          data: {
            zipCode: localZipCode
          }
        });
      }

      var localCheckoutId = localStorage.getItem('checkoutId');

      var _this$props$client$re = this.props.client.readQuery({
        query: _AddToCart__WEBPACK_IMPORTED_MODULE_10__["CHECKOUT_ID_QUERY"]
      }),
          checkoutId = _this$props$client$re.checkoutId;

      if (localCheckoutId) {
        this.props.client.writeData({
          data: {
            checkoutId: localCheckoutId
          }
        });
      } else if (checkoutId == '') {
        this.props.createCheckout({
          variables: {
            input: {}
          }
        }).then(function (res) {
          _this2.props.client.writeData({
            data: {
              checkout: res.data.checkoutCreate.checkout
            }
          });

          _this2.props.client.writeData({
            data: {
              checkoutId: res.data.checkoutCreate.checkout.id
            }
          });
        });
      }

      var localCheckout = localStorage.getItem('checkout');

      if (localCheckout) {
        var localCheckoutObject = JSON.parse(localCheckout);
        this.setState({
          localStorageCheckout: localCheckoutObject
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sitewideData = _this$props.sitewideData,
          router = _this$props.router,
          client = _this$props.client,
          products = _this$props.products;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        className: this.state.showAgeCheck ? 'locked' : ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_6__["default"], {
        sitewideData: sitewideData
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        products: products,
        localStorageCheckout: this.state.localStorageCheckout
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        router: router,
        sitewideData: sitewideData,
        localStorageCheckout: this.state.localStorageCheckout
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AgeCheck__WEBPACK_IMPORTED_MODULE_9__["default"], {
        action: this.allowSiteEntry,
        showAgeCheck: this.state.showAgeCheck
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ZipCodeCheck__WEBPACK_IMPORTED_MODULE_8__["default"], {
        client: client
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, null, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sitewideData: sitewideData
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Create our enhancer function.


var AppWithDataAndMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_12__["createCheckout"], {
  name: 'createCheckout'
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_12__["checkoutLineItemsAdd"], {
  name: 'checkoutLineItemsAdd'
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_12__["checkoutLineItemsUpdate"], {
  name: 'checkoutLineItemsUpdate'
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_lib_checkout__WEBPACK_IMPORTED_MODULE_12__["checkoutLineItemsRemove"], {
  name: 'checkoutLineItemsRemove'
}))(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(Page));
/* harmony default export */ __webpack_exports__["default"] = (AppWithDataAndMutation);
var theme = {
  darkGrey: '#2C2C2C',
  white: '#ffffff',
  goldBg: '#726C59',
  goldText: '#9C8D72',
  greyText: '#6B6653',
  darkGreyText: '#333639',
  blackText: '#333639',
  darkGreyBg: '#E0DCD6',
  mediumGreyBg: '#DFE0DB',
  lightGreyBg: '#D1D3CB',
  bodyTextFontSize: '1.3rem',
  h1FontSize: '7rem',
  h2FontSize: '5rem',
  h3FontSize: '3.8rem',
  maxWidth: '1160px'
};
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), theme.lightGreyBg, theme.h1FontSize, theme.h2FontSize, theme.h3FontSize);
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-1louu84-0"
})(["background:white;color:black;&.locked{position:fixed;width:100%;}"]);
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-1louu84-1"
})(["margin:0 auto;"]);

/***/ }),

/***/ "./components/ToggleCartButton.js":
/*!****************************************!*\
  !*** ./components/ToggleCartButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleCartButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ToggleCartButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ToggleCartButton, _Component);

  function ToggleCartButton() {
    _classCallCheck(this, ToggleCartButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleCartButton).apply(this, arguments));
  }

  _createClass(ToggleCartButton, [{
    key: "render",
    value: function render() {
      var localStorageCheckout = this.props.localStorageCheckout;
      var shopifyCheckout;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _Cart__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_CART_MUTATION"]
      }, function (toggleCart) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: toggleCart,
          className: "toggle-cart",
          type: "button"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "hide-mobile-nav"
        }, "Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "show-mobile-nav"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "/static/cart_icon_mobile.svg",
          alt: "Shopping Cart bag"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: _AddToCart__WEBPACK_IMPORTED_MODULE_3__["CHECKOUT_QUERY"]
        }, function (_ref) {
          var data = _ref.data,
              error = _ref.error,
              loading = _ref.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "cart-count"
          }, "0");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "cart-count"
          }, "0");
          if (data.checkout == undefined) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "cart-count"
          }, "0");
          var localCheckoutEmpty = Object.entries(localStorageCheckout).length === 0 && localStorageCheckout.constructor === Object;

          if (data.checkout && data.checkout.id != '') {
            shopifyCheckout = data.checkout;
          } else if (!localCheckoutEmpty) {
            shopifyCheckout = localStorageCheckout;
          } else {
            shopifyCheckout = data.checkout;
          }

          var cartCount = 0;

          for (var index = 0; index < shopifyCheckout.lineItems.edges.length; index++) {
            if (shopifyCheckout.lineItems.edges[index].node != undefined) {
              cartCount += shopifyCheckout.lineItems.edges[index].node.quantity;
            }
          }

          var cartClass = cartCount > 0 ? 'gold-badge cart-count' : 'cart-count';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: cartClass
          }, cartCount);
        }));
      });
    }
  }]);

  return ToggleCartButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/ToggleZipButton.js":
/*!***************************************!*\
  !*** ./components/ToggleZipButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ZipCodeCheck */ "./components/ZipCodeCheck.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ToggleCartButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ToggleCartButton, _Component);

  function ToggleCartButton() {
    _classCallCheck(this, ToggleCartButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleCartButton).apply(this, arguments));
  }

  _createClass(ToggleCartButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_ZIP_MUTATION"]
      }, function (toggleZipCodeCheck) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_2__["ZIP_SCREEN_QUERY"]
        }, function (_ref) {
          var data = _ref.data;
          var closeButtonClass = data.zipCodeCheckOpen ? 'zip-showing' : '';
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            type: "button",
            onClick: toggleZipCodeCheck,
            title: "Zip Code Toggle",
            className: "zip-code ".concat(closeButtonClass)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "zip-close"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: "../static/close_light.svg",
            alt: "Close",
            title: "Close Zip Code Finder"
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
            query: _ZipCodeCheck__WEBPACK_IMPORTED_MODULE_2__["ZIP_CODE_QUERY"]
          }, function (_ref2) {
            var zipCode = _ref2.data.zipCode;
            var iconColor = zipCode == '' ? '#FFFFFF' : '#C4B68C';
            zipCode = zipCode == '' ? 'Zip Code' : zipCode;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "zip-code-text"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "13",
              height: "19",
              viewBox: "0 0 13 19",
              className: "show-mobile"
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
              fill: iconColor,
              fillRule: "evenodd",
              d: "M385.499983,16 C381.910578,16 379,18.8686075 379,22.3807965 C379,23.1054262 379.321337,24.0133976 379.796637,25.0990363 C380.271937,26.1846945 380.915329,27.4195418 381.594358,28.6536769 C382.952414,31.1219255 384.471264,33.602995 385.098151,34.7646723 C385.175265,34.9091034 385.33048,35 385.499994,35 C385.669509,35 385.824723,34.9091034 385.901838,34.7646723 C386.528725,33.602995 388.047552,31.1219255 389.405642,28.6536769 C390.084665,27.4195418 390.721004,26.1846945 391.196291,25.0990363 C391.671599,24.0133976 392,23.1054262 392,22.3807965 C392,18.8687953 389.091499,16 385.499983,16 L385.499983,16 Z M385.503262,19.5185185 C386.695079,19.5185185 387.666667,20.4685701 387.666667,21.6296296 C387.666667,22.7891279 386.695079,23.7407407 385.503262,23.7407407 C384.311466,23.7407407 383.333333,22.7891279 383.333333,21.6296296 C383.333333,20.4685701 384.311466,19.5185185 385.503262,19.5185185 L385.503262,19.5185185 Z",
              transform: "translate(-379 -16)"
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "hide-mobile"
            }, zipCode));
          }));
        });
      });
    }
  }]);

  return ToggleCartButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ToggleCartButton);

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

/***/ "./components/styles/AgeCheckStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/AgeCheckStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var AgeCheckStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AgeCheckStyles",
  componentId: "sc-14u3s1l-0"
})(["background:rgba(30,30,30,0.75);position:fixed;overflow:scroll;top:0;left:0;width:100%;height:100%;z-index:500;opacity:1;visibility:visible;transition:all 0.3s ease-in-out;&.hide{opacity:0;visibility:hidden;}.content{width:90%;max-width:525px;margin-left:auto;margin-right:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.inner-content{position:absolute;top:50%;left:0;transform:translateY(-50%);width:100%;}.padded{padding:40px 66px;text-align:center;&.bottom{padding:55px 66px;border-top:1px dashed #9e9781;}@media screen and (max-width:768px){padding:0 33px 20px;&.bottom{padding:30px 33px 0;}}}h1{font-family:'Gotham Bold',sans-serif;font-size:2.6rem;text-transform:uppercase;letter-spacing:0.1rem;color:#333639;text-align:center;margin-bottom:0;@media screen and (max-width:768px){font-size:1.8rem;}}.icon{margin-left:auto;margin-right:auto;width:28px;@media screen and (max-width:768px){width:22px;}}.button{background:transparent;color:#333639;padding:18px 50px;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;letter-spacing:0.1rem;display:block;width:100%;outline:none;border:1px solid #333639;cursor:pointer;font-size:1.3rem;line-height:1;transition:all 0.4s ease-in-out;margin-top:20px;&:hover{color:white;background:#333639;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (AgeCheckStyles);

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

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "uixbcq-0"
})(["padding:20px;position:relative;background:#ecebe9;position:fixed;overflow:scroll;height:100%;top:0;right:0;width:100%;max-width:412px;bottom:0;transform:translateX(110%);transition:all 0.3s;z-index:400;display:flex;flex-direction:column;justify-content:space-between;", ";box-shadow:rgba(0,0,0,0.5) 0 2px 44px;header{margin-bottom:2rem;padding-bottom:2rem;}ul{list-style:none;margin:0;padding:0;}img{@media only screen and (max-width:768px){max-width:200px;margin-left:auto;margin-right:auto;margin-bottom:30px;}}footer{margin-top:2rem;padding-top:2rem;.gold-button{background:#726c59;color:#f6f6f6;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;font-size:1.3rem;line-height:1;letter-spacing:0.1rem;outline:none;border:none;cursor:pointer;transition:all 0.3s ease-in-out;width:100%;display:block;padding:20px;margin-bottom:2rem;text-align:center;}}.warning-text{margin-top:18px;font-size:1rem;font-family:'Lora Regular',serif;color:#726c59;letter-spacing:0.1rem;line-height:1.1;}.inner-wrapper{display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;}.cart-total{font-family:'Lora Regular',serif;font-size:2.2rem;color:#333639;}"], function (props) {
  return props.open && "transform: translateX(0);";
});
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1pia6hj-0"
})(["color:#333639;font-size:3rem;background-color:transparent;border:0;outline:0;cursor:pointer;img{width:20px;}padding:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

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

/***/ "./components/styles/LineItemStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/LineItemStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var LineItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "LineItemStyles__LineItemWrapper",
  componentId: "ubx4tz-0"
})(["padding-bottom:4rem;font-family:'Gotham Bold',sans-serif;color:#333639;.title{font-size:1.3rem;margin-bottom:1rem;display:block;}.line-item-price{font-size:1.1rem;}.variant-title{font-size:1.2rem;text-transform:uppercase;transform:translateY(-10px);color:#333639;font-family:'Nitti Light';font-size:1.2rem;}.remove-btn{background:transparent;border:0;box-shadow:none;color:#726c59;font-size:1.1rem;cursor:pointer;outline:none;}.line-item-quantity-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:white;padding:5px;margin-top:2rem;border:1px solid #dfdfdf;button{background-color:transparent;border:0;font-size:1.2rem;outline:none;cursor:pointer;}}.line-item-quantity{font-size:1.2rem;color:#726c59;}"]);
/* harmony default export */ __webpack_exports__["default"] = (LineItemWrapper);

/***/ }),

/***/ "./components/styles/MobileNavStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/MobileNavStyles.js ***!
  \**********************************************/
/*! exports provided: MobileNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNav", function() { return MobileNav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var MobileNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "MobileNavStyles__MobileNav",
  componentId: "sc-1pa5c22-0"
})(["display:none;@media only screen and (max-width:960px){display:block;.mobile-navbar{display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;z-index:100;transition:all .3s ease-out;background-color:", ";.home-link{top:50%;left:48%;transform:translate(-50%,-50%);&:hover{transform:translate(-50%,-50%);}img{width:150px;}}.toggle-cart{padding:15px 6px;background:transparent;img{width:16px;}.cart-count{font-size:9px;width:18px;height:18px;clip-path:none;border-radius:50%;padding:0;line-height:15px;text-align:center;border:2px solid #2c2c2c;color:#2c2c2c;position:absolute;top:10px;right:-5px;background:#C6B68F;}}}.zip-code{margin:0;padding:10px 14px !important;background-color:transparent;position:relative;font-size:1.1rem;letter-spacing:.01rem;@media only screen and (max-width:1150px){padding:31px 25px 31px 25px;}}.zip-showing{.zip-close{opacity:1;transition:all 0.3s ease-in-out 0.3s;}.zip-code-text{opacity:0;transition:all 0.3s ease-in-out;}}.zip-close{opacity:0;transition:all 0.3s ease-in-out;position:absolute;background-color:#3B3F38;top:0;left:0;width:100%;height:100%;display:flex;transform:justify-content:center;align-items:center;img{width:30%;max-width:20px;margin:0 auto;}}.end-content-wrapper{display:flex;}}@media only screen and (max-width:440px){.mobile-navbar .home-link img{width:120px;}}.mobile-nav{display:none;@media screen and (max-width:960px){transform:translateX(-100%);transition:all 0.3s ease-in-out;background-color:#2b2b2b;position:relative;position:fixed;top:0;left:0;width:100%;height:100%;overflow:scroll;display:flex;z-index:250;flex-direction:column;justify-content:space-around;align-items:space-around;&.mobile-nav-open{transform:none;}.mobile-nav-links a{padding:8px 4px;display:block;text-align:center;font-size:2.2rem;}.social-media-links{text-align:center;padding-bottom:50px;a{padding:30px 8px;}img{width:28px;}}.home-logo{width:100%;display:block;padding-top:50px;img{width:74px;margin-left:auto;margin-right:auto;}}.close-mobile-nav{cursor:pointer;top:0px;left:30px;position:absolute;}}}.hamburger{width:21px;height:12px;position:relative;z-index:201;margin-left:14px;padding:0 !important;transition:all 2s ease-in-out;cursor:pointer;margin-top:-1px;span{display:block;border-bottom:2px solid white;width:100%;position:absolute;height:1px;left:0;}span:first-of-type{top:0;}span:nth-of-type(2){top:50%;}span:last-of-type{top:100%;}}"], function (props) {
  return props.theme.darkGrey;
});

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: NavWrapper, NavInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavWrapper", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavInner", function() { return NavInner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NavStyles__NavWrapper",
  componentId: "d4wwo7-0"
})(["background-color:", ";padding:0;z-index:100;position:fixed;top:0;width:100%;transition:transform 0.3s ease-out;@media only screen and (max-width:960px){transform:none !important;background-color:transparent;}a,button{text-transform:uppercase;font-size:1.2rem;font-family:'Gotham Bold',sans-serif;letter-spacing:0.09rem;margin:0 10px;padding:30px 4px;color:white;display:inline-block;outline:none;cursor:pointer;&.current-page{color:#d0c08c;}@media screen and (max-width:1125px){margin:0 4px;}}a:hover{opacity:0.7;}.home-link{position:absolute;left:50%;top:10px;transform:translateX(-50%);padding:0;&:hover{transform:translateX(-50%);opacity:1;}img{width:100px;}}button{box-shadow:none;border:0;}.toggle-cart{background-color:#1e1d1d;margin:0 0 0 20px;padding:18px 30px;position:relative;@media only screen and (max-width:1150px){padding:18px 16px;}}.cart-count{background-color:#2c2c2c;width:38px;height:38px;display:inline-block;clip-path:polygon( 50% 0,86% 13%,100% 50%,86% 87%,50% 100%,13% 88%,0 50%,13% 13% );padding:13px;margin-left:10px;&.gold-badge{background-color:#988c66;}}.show-mobile-nav{display:none;}@media screen and (max-width:960px){.hide-mobile-nav{display:none;}.show-mobile-nav{display:block;}}"], function (props) {
  return props.theme.darkGrey;
});
var NavInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "NavStyles__NavInner",
  componentId: "d4wwo7-1"
})(["display:none;@media screen and (min-width:961px){display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;z-index:100;@media only screen and (min-width:961px){.close-mobile-nav{display:none;}}@media only screen and (max-width:960px){.hide-mobile-nav{display:none;}}.left-col{padding-left:50px;}a:first-of-type{margin-left:0;}a:last-of-type{margin-right:0;}.zip-code{margin:0;padding:31px 50px 31px 40px;background-color:#3B3F38;position:relative;@media only screen and (max-width:1150px){padding:31px 20px 31px 20px;}}.zip-close{opacity:0;transition:all 0.3s ease-in-out;position:absolute;background-color:#3B3F38;top:0;left:0;width:100%;height:100%;display:flex;transform:justify-content:center;align-items:center;img{width:18%;max-width:20px;margin:0 auto;}}.zip-code-text{opacity:1;transition:all .3s ease-in-out .3s;}.zip-showing{.zip-close{opacity:1;transition:all .3s ease-in-out .3s;}.zip-code-text{opacity:0;transition:all .3s ease-in-out;}}}"]);

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

/***/ "./lib/analytics.js":
/*!**************************!*\
  !*** ./lib/analytics.js ***!
  \**************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

var initGA = function initGA(gaTrackingID) {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize(gaTrackingID);
};
var logPageView = function logPageView() {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description: description,
      fatal: fatal
    });
  }
};

/***/ }),

/***/ "./lib/checkout.js":
/*!*************************!*\
  !*** ./lib/checkout.js ***!
  \*************************/
/*! exports provided: createCheckout, checkoutLineItemsAdd, checkoutLineItemsUpdate, checkoutLineItemsRemove, addVariantToCart, updateLineItemInCart, removeLineItemInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckout", function() { return createCheckout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsAdd", function() { return checkoutLineItemsAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsUpdate", function() { return checkoutLineItemsUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsRemove", function() { return checkoutLineItemsRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariantToCart", function() { return addVariantToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLineItemInCart", function() { return updateLineItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLineItemInCart", function() { return removeLineItemInCart; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(\n      checkoutId: $checkoutId\n      lineItemIds: $lineItemIds\n    ) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation checkoutLineItemsUpdate(\n    $checkoutId: ID!\n    $lineItems: [CheckoutLineItemUpdateInput!]!\n  ) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation checkoutLineItemsAdd(\n    $checkoutId: ID!\n    $lineItems: [CheckoutLineItemInput!]!\n  ) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation checkoutCreate($input: CheckoutCreateInput!) {\n    checkoutCreate(input: $input) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  fragment CheckoutFragment on Checkout {\n    id\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    lineItems(first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var CheckoutFragment = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var createCheckout = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2(), CheckoutFragment);
var checkoutLineItemsAdd = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3(), CheckoutFragment);
var checkoutLineItemsUpdate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4(), CheckoutFragment);
var checkoutLineItemsRemove = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5(), CheckoutFragment);
function addVariantToCart(variantId, quantity) {
  this.props.checkoutLineItemsAdd({
    variables: {
      checkoutId: this.state.checkout.id,
      lineItems: [{
        variantId: variantId,
        quantity: parseInt(quantity, 10)
      }]
    }
  }).then(function (res) {// this.setState({
    //   checkout: res.data.checkoutLineItemsAdd.checkout,
    // });
  });
}
function updateLineItemInCart(lineItemId, quantity) {
  var _this = this;

  this.props.checkoutLineItemsUpdate({
    variables: {
      checkoutId: this.state.checkout.id,
      lineItems: [{
        id: lineItemId,
        quantity: parseInt(quantity, 10)
      }]
    }
  }).then(function (res) {
    _this.setState({
      checkout: res.data.checkoutLineItemsUpdate.checkout
    });
  });
}
function removeLineItemInCart(lineItemId) {
  var _this2 = this;

  this.props.checkoutLineItemsRemove({
    variables: {
      checkoutId: this.state.checkout.id,
      lineItemIds: [lineItemId]
    }
  }).then(function (res) {
    _this2.setState({
      checkout: res.data.checkoutLineItemsRemove.checkout
    });
  });
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zipcodes */ "zipcodes");
/* harmony import */ var zipcodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zipcodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart */ "./components/Cart.js");
/* harmony import */ var _components_ZipCodeCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ZipCodeCheck */ "./components/ZipCodeCheck.js");
/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MobileMenu */ "./components/MobileMenu.js");
/* harmony import */ var _components_AddToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddToCart */ "./components/AddToCart.js");









function createClient() {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri: 'https://lowellherb.myshopify.com/api/graphql',
    request: function request(operation) {
      operation.setContext({
        headers: {
          'X-Shopify-Storefront-Access-Token': '2d5fb5b288da9ef8f285ffc9bd99be26'
        }
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref) {
            var cache = _ref.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: _components_Cart__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STATE_QUERY"]
            }),
                cartOpen = _cache$readQuery.cartOpen;

            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          },
          toggleMobileMenu: function toggleMobileMenu(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery2 = cache.readQuery({
              query: _components_MobileMenu__WEBPACK_IMPORTED_MODULE_5__["MOBILE_MENU_OPEN_QUERY"]
            }),
                mobileMenuOpen = _cache$readQuery2.mobileMenuOpen;

            var data = {
              data: {
                mobileMenuOpen: !mobileMenuOpen
              }
            };
            cache.writeData(data);
            return data;
          },
          toggleZipCodeCheck: function toggleZipCodeCheck(_, variables, _ref3) {
            var cache = _ref3.cache;

            // read the zipCodeCheckOpen value from the cache
            var _cache$readQuery3 = cache.readQuery({
              query: _components_ZipCodeCheck__WEBPACK_IMPORTED_MODULE_4__["ZIP_SCREEN_QUERY"]
            }),
                zipCodeCheckOpen = _cache$readQuery3.zipCodeCheckOpen;

            var data = {
              data: {
                zipCodeBannerShowing: false,
                zipCodeCheckOpen: !zipCodeCheckOpen
              }
            };
            cache.writeData(data);
            return data;
          },
          createOrUpdateCheckout: function createOrUpdateCheckout(_, variables, _ref4) {
            var cache = _ref4.cache;

            // read the zipCodeCheckOpen value from the cache
            var _cache$readQuery4 = cache.readQuery({
              query: _components_AddToCart__WEBPACK_IMPORTED_MODULE_6__["CHECKOUT_QUERY"]
            }),
                checkout = _cache$readQuery4.checkout;

            console.log(checkout);
            var data = {
              data: {
                cartOpen: true
              }
            };
            cache.writeData(data);
            return data;
          },
          updateZipCode: function updateZipCode(_, variables, _ref5) {
            var cache = _ref5.cache;
            // read the zipCodeCheckOpen value from the cache
            // console.log(variables);
            var data = {
              data: variables
            };
            localStorage.setItem('zipCode', variables.zipCode);
            var locationInfoByZip = zipcodes__WEBPACK_IMPORTED_MODULE_2___default.a.lookup(zipCode);
            cache.writeData({
              data: {
                zipCodeBannerShowing: true,
                zipCodeCheckOpen: false
              }
            }); // Hide Delivery banner after a handful of seconds

            setTimeout(function () {
              cache.writeData({
                data: {
                  zipCodeBannerShowing: false
                }
              });
            }, 7000);
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false,
        zipCodeCheckOpen: false,
        zipCodeBannerShowing: true,
        zipCode: '',
        mobileMenuOpen: false,
        checkout: {
          id: '',
          lineItems: {
            edges: [{
              node: {
                id: '',
                quantity: 0,
                title: '',
                variant: {
                  id: '',
                  title: '',
                  image: {
                    src: ''
                  },
                  price: ''
                }
              }
            }],
            __typename: ''
          },
          webUrl: '',
          __typename: '',
          totalTax: '',
          totalPrice: '',
          subtotalPrice: ''
        },
        checkoutId: ''
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shuffle-array */ "shuffle-array");
/* harmony import */ var shuffle_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shuffle_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./api/index.js");



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








var LowellApp =
/*#__PURE__*/
function (_App) {
  _inherits(LowellApp, _App);

  function LowellApp() {
    _classCallCheck(this, LowellApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(LowellApp).apply(this, arguments));
  }

  _createClass(LowellApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps,
          sitewideResponse = _this$props.sitewideResponse,
          router = _this$props.router,
          productsResponse = _this$props.productsResponse;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
        client: apollo
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sitewideData: sitewideResponse,
        router: router,
        zipCodes: pageProps.zipCodes,
        products: productsResponse
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, newsletterId, newsletterResponse, quotesId, quotesResponse, sitewideId, sitewideResponse, zipCodesId, zipCodesResponse, productsResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {}; // Google maps geocoding key: AIzaSyBVMMoWP5CQj2ZSgPETg7oc2b_SG1uM2tQ
                // Distance Matrix: AIzaSyAIKrq8zMrPu16frIY4s7plIQg4FMJ8xkQ
                // git subtree push--prefix lowell_store heroku - frontend master

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // This exposes the query to the user
                pageProps.query = ctx.query; // we get the pageId of the post so that we can
                // query the API with it

                newsletterId = 'XJaUEREAAPPUockM';
                _context.next = 10;
                return Object(_api__WEBPACK_IMPORTED_MODULE_7__["getPageApi"])(newsletterId);

              case 10:
                newsletterResponse = _context.sent;
                pageProps.newsletter = newsletterResponse.data;
                quotesId = 'XJg4xREAAAlxqQS5';
                _context.next = 15;
                return Object(_api__WEBPACK_IMPORTED_MODULE_7__["getPageApi"])(quotesId);

              case 15:
                quotesResponse = _context.sent;
                pageProps.quotes = shuffle_array__WEBPACK_IMPORTED_MODULE_4___default()(quotesResponse.data.quotes);
                sitewideId = 'XKKYKhAAALlLtsLv';
                _context.next = 20;
                return Object(_api__WEBPACK_IMPORTED_MODULE_7__["getPageApi"])(sitewideId);

              case 20:
                sitewideResponse = _context.sent;
                pageProps.sitewideData = sitewideResponse;
                zipCodesId = 'XLqXaBIAACIAacfs';
                _context.next = 25;
                return Object(_api__WEBPACK_IMPORTED_MODULE_7__["getPageApi"])(zipCodesId);

              case 25:
                zipCodesResponse = _context.sent;
                pageProps.zipCodes = zipCodesResponse.data;
                _context.next = 29;
                return Object(_api__WEBPACK_IMPORTED_MODULE_7__["getPageByType"])('product');

              case 29:
                productsResponse = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  sitewideResponse: sitewideResponse,
                  productsResponse: productsResponse
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LowellApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_6__["default"])(LowellApp));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shuffle-array");

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
//# sourceMappingURL=_app.js.map