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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.toggleClass = _this.toggleClass.bind(_assertThisInitialized(_this));
    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "toggleClass",
    value: function toggleClass() {
      var currentState = this.state.active;
      this.setState({
        active: !currentState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var faqItem = this.props.faqItem;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        class: "accordion-panel ".concat(this.state.active ? 'expanded' : null)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        id: "faq",
        class: "accordion-toggle",
        onClick: this.toggleClass
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].render(faqItem.heading, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "accordion-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "inner"
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].render(faqItem.faq_answer, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]))));
    }
  }]);

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./components/Cafe.js":
/*!****************************!*\
  !*** ./components/Cafe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.js");
/* harmony import */ var _KeyInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyInfo */ "./components/KeyInfo.js");
/* harmony import */ var _styles_sections_cafeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/cafeStyles */ "./components/styles/sections/cafeStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__);
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

/* eslint-disable react/prop-types */

/* eslint-disable class-methods-use-this */

/* eslint-disable react/destructuring-assignment */













var Cafe =
/*#__PURE__*/
function (_Component) {
  _inherits(Cafe, _Component);

  function Cafe(props) {
    var _this;

    _classCallCheck(this, Cafe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cafe).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));

      if (value.length < 6) {}
    });

    _defineProperty(_assertThisInitialized(_this), "serializeFormData", function (form) {
      // Setup our serialized data
      var serialized = []; // Loop through each field in the form

      for (var i = 0; i < form.elements.length; i++) {
        var field = form.elements[i]; // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields

        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue; // If a multi-select, get all selections

        if (field.type === 'select-multiple') {
          for (var n = 0; n < field.options.length; n++) {
            if (!field.options[n].selected) continue;
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
          }
        } // Convert field data to a query string
        else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {
            if (field.name == 'handle' && field.value != '') {
              var handle = field.value.toLowerCase();
              handle = 'https://www.instagram.com/' + handle;
              serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(handle));
            } else {
              serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }
          }
      }

      return serialized.join('&');
    });

    _defineProperty(_assertThisInitialized(_this), "sendToGoogleSheets", function (e) {
      e.preventDefault();

      var self = _assertThisInitialized(_this);

      self.setState({
        submitted: true
      });
      var url = 'https://script.google.com/macros/s/AKfycbyN94WC1RQ0HW8CBPiSNL2zCDI4P_Fesn6UM0JxD7rQ9WkWKO7C/exec';

      var params = _this.serializeFormData(e.target);

      console.log(params);
      var http = new XMLHttpRequest();
      http.open("GET", url + "?" + params, true);

      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          self.setState({
            success: true
          });
        } else {
          self.setState({
            submitted: false
          });
        }
      };

      http.send(null);
    });

    _this.state = {
      success: false,
      submitted: false
    };
    return _this;
  }

  _createClass(Cafe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageData = _this$props.pageData,
          cafePageData = _this$props.cafePageData,
          newsletterData = _this$props.newsletterData; //

      var cafeTitleHtml = cafePageData.page_title != '' && cafePageData.page_title != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(cafePageData.page_title, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var titleHtml = cafePageData.main_heading != '' && cafePageData.main_heading != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(cafePageData.main_heading, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var subheadingHtml = cafePageData.subheading != '' && cafePageData.subheading != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(cafePageData.subheading, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var introTextHtml = cafePageData.intro_text != '' && cafePageData.intro_text != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(cafePageData.intro_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var cafeButtonText = cafePageData.lowell_cafe_button_text != '' && cafePageData.lowell_cafe_button_text != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(cafePageData.lowell_cafe_button_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var reservationButtonText = cafePageData.reservation_button_text != '' && cafePageData.reservation_button_text != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(cafePageData.reservation_button_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var pressHeadingHtml = cafePageData.press_heading != '' && cafePageData.press_heading != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(cafePageData.press_heading, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]);
      var lowell_cafe_link = cafePageData.lowell_cafe_link != '' && cafePageData.lowell_cafe_link != null && cafePageData.lowell_cafe_link.url;
      var reservation_link = cafePageData.reservation_link != '' && cafePageData.reservation_link != null && cafePageData.reservation_link.url;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, " ", pageData.meta_title), pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: pageData.meta_description
      }), pageData.keywords != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "keywords",
        content: pageData.keywords
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://www.lowellherb.co/cafe",
        rel: "canonical"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_cafeStyles__WEBPACK_IMPORTED_MODULE_9__["CafeWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
        src: "static/collage/mobile/collage_2.png",
        className: "mobile-collage show-mobile",
        effect: "opacity",
        visibleByDefault: "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "container-sm collage-parent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "collage-images"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
        src: "static/collage/desktop/collage_1.png",
        className: "desktop-collage-1 hide-mobile",
        effect: "opacity"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
        src: "static/collage/desktop/collage_2.png",
        className: "desktop-collage-2 hide-mobile",
        effect: "opacity"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
        src: "static/collage/desktop/collage_3.png",
        className: "desktop-collage-3 hide-mobile",
        effect: "opacity"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "animation-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
        src: cafePageData.cafe_logo.url != '' && cafePageData.cafe_logo.url,
        effect: "opacity"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "header-hr"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, titleHtml), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, subheadingHtml), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "intro-text"
      }, introTextHtml)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        class: "prohibition"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "container-xs collage-parent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "collage-images"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
        src: "static/collage/desktop/collage_4.png",
        className: "desktop-collage-1 hide-mobile",
        effect: "opacity"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: lowell_cafe_link,
        className: "button-light button"
      }, cafeButtonText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: reservation_link,
        className: "button-light button"
      }, reservationButtonText))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KeyInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        pageData: pageData
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        class: "press"
      }, pressHeadingHtml, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "container"
      }, pageData.press_items.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: value.press_link.url,
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImage"], {
          src: value.press_image.url,
          className: "press-logo",
          effect: "opacity"
        }));
      })))));
    }
  }]);

  return Cafe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cafe);

/***/ }),

/***/ "./components/KeyInfo.js":
/*!*******************************!*\
  !*** ./components/KeyInfo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ "prismic-reactjs");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var KeyInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(KeyInfo, _Component);

  function KeyInfo() {
    _classCallCheck(this, KeyInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeyInfo).apply(this, arguments));
  }

  _createClass(KeyInfo, [{
    key: "render",
    value: function render() {
      var pageData = this.props.pageData;
      var locationHeadingHtml = prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].render(pageData.location_heading, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]);
      var addressHtml = prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].render(pageData.address, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]);
      var phoneHtml = prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].asText(pageData.phone, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]);
      var emailAddressHtml = prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].asText(pageData.email_address, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]);
      var hoursHeadingHtml = prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].render(pageData.hours_heading, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]);
      var hoursTextHtml = prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__["RichText"].render(pageData.hours_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"]);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        class: "key-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "container-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "cols-2 no-gutters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, locationHeadingHtml, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.google.com/maps/place/1201+N+La+Brea+Ave,+West+Hollywood,+CA+90038/@34.092668,-118.3466097,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bf2841e514b5:0xa8cc818cc9b76bf5!8m2!3d34.092668!4d-118.344421",
        target: "_blank"
      }, addressHtml), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tel. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:".concat(phoneHtml)
      }, phoneHtml), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:".concat(emailAddressHtml)
      }, emailAddressHtml)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        class: "show-mobile"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, hoursHeadingHtml, hoursTextHtml))));
    }
  }]);

  return KeyInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (KeyInfo);

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

/***/ "./components/styles/sections/cafeStyles.js":
/*!**************************************************!*\
  !*** ./components/styles/sections/cafeStyles.js ***!
  \**************************************************/
/*! exports provided: CafeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeWrapper", function() { return CafeWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // ----------------------------------------
// General Page Styles
// ----------------------------------------

var CafeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "cafeStyles__CafeWrapper",
  componentId: "qviast-0"
})(["a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}font-family:'Lora Regular';font-size:1.7rem;text-align:center;background:#ECEBE9;.small-nitti-caps{text-transform:uppercase;letter-spacing:0.05em;font-size:1.1rem;font-family:'Nitti Light';}.button,button{cursor:pointer;-webkit-font-smoothing:antialiased;font-family:'Gotham Bold';font-size:1.4rem;letter-spacing:0.06em;text-transform:uppercase;border:0;border-radius:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;outline:none;display:block;width:100%;background-color:#5F6252;padding:16px 24px;text-align:center;color:white;margin-top:48px;&:hover{}}.button-light{background:white;color:#B9AC88;margin-top:0;margin-bottom:14px;max-width:565px;margin-left:auto;margin-right:auto;}@media only screen and (max-width:758px){button{margin-top:40px;font-size:12px;padding:13px 20px;}}input,textarea{text-transform:uppercase;letter-spacing:0.05em;font-size:1.1rem;font-family:'Nitti Light';border:none;outline:none;display:block;width:100%;background-color:transparent;box-shadow:none;padding-bottom:1px;letter-spacing:1.6px;letter-spacing:0.1rem;font-size:22.4px;font-size:1.6rem;border-radius:0;-webkit-appearance:none;}.inline-input{width:60px;border-right:1px solid #A8A8A8;&:not(:first-of-type){padding-left:30px;width:80px;}}@media only screen and (max-width:758px){input{font-size:14px;}}.instagram-input-wrapper{position:relative;padding-left:11px;&.active::before{color:#171717;}&::before{content:'@';color:#787878;font-family:\"Nitti\",sans-serif;position:absolute;left:0;top:calc(50% - 1px);transform:translateY(-50%);}}label{font-family:'Gotham Bold';font-size:1.4rem;letter-spacing:0.06em;text-transform:uppercase;margin-right:12px;letter-spacing:0.08em;}@media only screen and (max-width:758px){label{font-size:12px;letter-spacing:0.05em;}}input[type=\"checkbox\"]{display:none;}input[type=\"checkbox\"] + span{display:inline-block;margin-right:14px;width:29px;height:29px;border:2px solid #5F6252;-webkit-transition:all 0.3s ease-in-out 0.2s;transition:all 0.3s ease-in-out 0.2s;position:relative;border-radius:50%;img{opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}}@media only screen and (max-width:758px){input[type=\"checkbox\"] + span{margin-right:10px;width:17px;height:17px;border:1px solid #5F6252;img{width:10px;}}}input[type=\"checkbox\"]:checked + span{background:#5F6252;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;img{opacity:1;-webkit-transition:all 0.3s ease-in-out 0.2s;transition:all 0.3s ease-in-out 0.2s;}}.checkbox-wrapper label{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:24px;margin-top:16px;}@media only screen and (max-width:758px){.checkbox-wrapper{margin-top:36px;}}::-webkit-input-placeholder{color:#787878;}::-moz-placeholder{color:#787878;}:-ms-input-placeholder{color:#787878;}:-moz-placeholder{color:#787878;}.validation-wrapper{position:relative;margin-bottom:28px;border-bottom:1px solid #A8A8A8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:38.4px;padding-bottom:2.4rem;&.has-error{border-bottom:1px solid red;}}@media only screen and (max-width:758px){.validation-wrapper{margin-bottom:24px;}}.error{font-size:17.6px;font-size:1.1rem;margin-top:0;position:absolute;bottom:-6px;color:red;-webkit-transform:translateY(100%);transform:translateY(100%);}.thanks{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;bottom:0;right:0;background:white;z-index:4;opacity:0;visibility:hidden;transition:all .3s ease-in-out;&.show-thanks{display:-webkit-box;display:-ms-flexbox;display:flex;opacity:1;visibility:visible;h2{font-size:24px;}}h1{margin-bottom:0;margin-top:0;}p{margin-bottom:48px;margin-bottom:3rem;}}@media only screen and (max-width:758px){.validation-wrapper{padding-bottom:1.1rem;}}.cols-2-sm{grid-template-columns:repeat(2,1fr);}.events-link-wrapper{text-align:center;margin-top:50px;a{font-size:1.5rem;color:#A38F60;border-bottom:1px solid #A38F60;}}@media only screen and (max-width:768px){.events-link-wrapper{margin-top:30px;}}.split-aligner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;}.container,[class*=\"container\"]{width:82%;max-width:1310px;margin-left:auto;margin-right:auto;}@media only screen and (min-width:769px){.container,[class*=\"container\"]{width:70%;}}.container-md{max-width:940px;}.container-sm{max-width:900px;}.container-xs{max-width:600px;}h1,h2,h3,h4{font-weight:normal;font-style:normal;line-height:1;}img{max-width:100%;}.lozad{opacity:0;-webkit-transition:all 0.6s ease-in-out 0.3s;transition:all 0.6s ease-in-out 0.3s;&.loaded{opacity:1;}}.collage-parent{position:relative;}.collage-images{height:0;img{position:absolute;}}.key-info{padding:60px 0;text-align:center;div{margin-bottom:20px;}}.key-info{h3{border-bottom:1px solid #69574E;font-family:'Gotham Bold';font-size:1.3rem;color:#69574E;letter-spacing:0.06em;text-transform:uppercase;font-weight:400;font-size:22.4px;font-size:1.4rem;letter-spacing:0.1em;max-width:256px;margin-left:auto;margin-right:auto;padding-bottom:14px;margin-bottom:18px;font-weight:normal;}p:not(:last-of-type){margin-bottom:20px;}p{line-height:1.4;color:#333639;font-size:1.3rem;font-family:'Nitti Light';letter-spacing:.08em;color:#171717;}}@media only screen and (max-width:758px){.key-info{border-bottom:0;padding:50px 0;hr{display:none;}h3{margin-bottom:16px;}.cols-2 > div:first-of-type{margin-bottom:45px;}}}header{border-top:6px solid #171717;margin-top:5px;padding-top:106px;padding-bottom:72px;.container-sm{position:relative;}.header-hr{margin-top:65px;margin-bottom:50px;border:0;border-bottom:1px solid #D4CFCC;}h1{img{max-width:273px;margin-left:auto;margin-right:auto;}}h2{font-family:'Lora Regular';font-size:7.8rem;font-weight:400;margin-bottom:40px;max-width:815px;margin-left:auto;margin-right:auto;}h3{font-family:'Lora Regular';font-size:2.5rem;font-weight:400;margin-bottom:20px;max-width:565px;margin-left:auto;margin-right:auto;color:#6B6653;}.intro-text{max-width:580px;margin-left:auto;margin-right:auto;line-height:1.4;color:#333639;font-size:1.6rem;font-family:'Nitti Light';margin-top:20px;letter-spacing:.03em;}}@media only screen and (max-width:1200px){header{h2{font-size:5rem;font-weight:400;margin-bottom:60px;max-width:500px;}}}header{.collage-images{img{position:absolute;z-index:10;}.desktop-collage-1{top:1%;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);max-width:409px;width:46%;}.desktop-collage-2{top:5%;right:0;-webkit-transform:translateX(100%);transform:translateX(100%);max-width:300px;width:32%;}.desktop-collage-3{bottom:-110px;right:0;-webkit-transform:translate(100%,50%);transform:translate(100%,50%);max-width:475px;width:48%;}}}@media only screen and (max-width:758px){header{border-top:0;padding-bottom:50px;padding-top:100%;overflow:hidden;position:relative;margin-top:0;.mobile-collage{position:absolute;top:3px;left:-9%;width:126%;max-width:800px;&.loaded{transition:opacity 0.6s ease-in 0.2s;top:-4%;}}h2{font-size:4rem;margin-bottom:32px;line-height:1.2;}h3{font-size:1.8rem;line-height:1.2;margin-bottom:12px;}.intro-text{font-size:1.4rem;margin-bottom:50px;margin-top:0;}}}.animation-wrapper{-webkit-animation:slideUp 1s ease-out 0.2s;animation:slideUp 1s ease-out 0.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-transform:translateY(20px);transform:translateY(20px);}@-webkit-keyframes slideUp{0%{-webkit-transform:translateY(20px);transform:translateY(20px);}100%{-webkit-transform:translateY(0);transform:translateY(0);}}@keyframes slideUp{0%{-webkit-transform:translateY(20px);transform:translateY(20px);}100%{-webkit-transform:translateY(0);transform:translateY(0);}}.prohibition{padding-bottom:80px;p{font-size:1.7rem;}h3{font-size:97.6px;font-size:6.1rem;letter-spacing:0.04em;max-width:460px;margin:0 auto 40px;line-height:0.95;}h4{font-family:'Lora Bold';text-transform:uppercase;letter-spacing:0.24em;margin-bottom:32px;font-size:30.4px;font-size:1.9rem;}}.prohibition{.collage-images{.desktop-collage-1{top:75%;left:-8%;-webkit-transform:translateX(-130%);transform:translateX(-130%);max-width:225px;width:38%;}}}@media only screen and (max-width:758px){.prohibition{padding-bottom:60px;hr{margin-bottom:50px;}h3{font-size:60.8px;font-size:3.8rem;margin:0 auto 25px;}h4{font-family:'Lora Regular';font-weight:400;font-size:19.2px;font-size:1.2rem;margin-bottom:10px;letter-spacing:0.16em;}p{font-size:12px;line-height:1.7;}}}.press{padding-top:50px;padding-bottom:100px;.container{max-width:1150px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:88%;}h5{font-family:'Lora Regular';font-size:2.5rem;letter-spacing:0.06em;margin-bottom:35px;}.press-logo{max-width:160px;display:inline-block;margin:15px 50px;max-height:73px;}a:first-of-type{img{width:100%;}}a:nth-of-type(11) img{max-width:88px;}a:hover{opacity:0.8;-webkit-transform:translateY(2px);transform:translateY(2px);}}@media only screen and (max-width:758px){.press{padding-top:36px;padding-bottom:36px;h5{font-size:1.8rem;margin-bottom:16px;}a{max-width:calc(50% - 40px);margin:15px 20px;}.press-logo{margin:0;max-width:100%;max-height:31px;}}}"]);

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

/***/ "./pages/cafe.js":
/*!***********************!*\
  !*** ./pages/cafe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CafePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _components_Cafe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cafe */ "./components/Cafe.js");


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
 // A new API request that will create in just a tick

 // Here we are reusing our layout again



var CafePage =
/*#__PURE__*/
function (_Component) {
  _inherits(CafePage, _Component);

  function CafePage() {
    _classCallCheck(this, CafePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(CafePage).apply(this, arguments));
  }

  _createClass(CafePage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          cafeLandingPage = _this$props.cafeLandingPage,
          newsletter = _this$props.newsletter;
      var data = page.data;
      var cafeData = cafeLandingPage.data;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Cafe__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pageData: data,
        newsletterData: newsletter,
        cafePageData: cafeData
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var pageId, response, cafeLandingId, cafeResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // we get the pageId of the post so that we can
                // query the API with it
                pageId = 'XUYTghAAACcAIVdE';
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageApi"])(pageId);

              case 3:
                response = _context.sent;
                cafeLandingId = 'XWb9nxAAAB8AWf_5';
                _context.next = 7;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageApi"])(cafeLandingId);

              case 7:
                cafeResponse = _context.sent;
                return _context.abrupt("return", {
                  page: response,
                  cafeLandingPage: cafeResponse
                });

              case 9:
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

  return CafePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/cafe.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/cafe.js */"./pages/cafe.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=cafe.js.map