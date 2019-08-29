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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
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
/* harmony import */ var _styles_ButtonGold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ButtonGold */ "./components/styles/ButtonGold.js");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/HeaderStyles */ "./components/styles/HeaderStyles.js");
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Quote */ "./components/Quote.js");
/* harmony import */ var _styles_sections_homeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/homeStyles */ "./components/styles/sections/homeStyles.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__);
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












var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      videoOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "openVideoModal", function () {
      _this.setState({
        videoOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeVideoModal", function (e) {
      if (e.target.closest('.inner') == null) {
        _this.setState({
          videoOpen: false
        });
      }
    });

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageData = _this$props.pageData,
          quotesData = _this$props.quotesData,
          newsletterData = _this$props.newsletterData;
      var heroBgImageUrl = pageData.hero_background_image.url;
      var videoClassName = this.state.videoOpen ? 'showing' : '';
      var accessoriesImage;
      var metaTitle = pageData.meta_title != null ? pageData.meta_title : prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.page_title);

      if (pageData.accessories_image != '' && pageData.accessories_image.url != undefined) {
        accessoriesImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
          src: pageData.accessories_image.url,
          alt: pageData.gear_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.gear_heading),
          className: "",
          effect: "opacity"
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_sections_homeStyles__WEBPACK_IMPORTED_MODULE_9__["HomeWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, metaTitle), pageData.meta_description != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: pageData.meta_description
      }), pageData.keywords != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "keywords",
        content: pageData.keywords
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://www.lowellfarms.com/",
        rel: "canonical"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "home-header",
        style: {
          background: "#ecebe9 url(".concat(heroBgImageUrl, ")"),
          backgroundSize: 'cover'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay",
        style: {
          backgroundColor: "".concat(pageData.color_overlay),
          opacity: "".concat(pageData.opacity)
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u201C", quotesData[0].quote[0].text, "\u201D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "publication"
      }, "\u2013 ", quotesData[0].publication[0].text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(videoClassName, " video-wrapper"),
        onClick: this.closeVideoModal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../static/close_light.svg",
        alt: "Close",
        className: "close-video"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner",
        dangerouslySetInnerHTML: {
          __html: pageData.youtube_video.html
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonGold__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "watch-video",
        onClick: this.openVideoModal
      }, pageData.cta_icon.url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: pageData.cta_icon.url,
        alt: "Play Video",
        width: "100"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "cannabis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 cannabis-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "home-section-title "
      }, pageData.cannabis_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "small-caps gold-text"
      }, pageData.cannabis_subheader != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_subheader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.cannabis_intro_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.cannabis_intro_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
        src: pageData.cannabis_image != '' && pageData.cannabis_image.url,
        alt: pageData.cannabis_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_heading),
        className: "",
        effect: "opacity"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 mobile-flex-reverse cannabis-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
        src: pageData.cannabis_image_2.url != '' && pageData.cannabis_image_2.url,
        alt: pageData.cannabis_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_heading),
        className: "",
        effect: "opacity"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "home-section-title "
      }, pageData.cannabis_heading_2 != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_heading_2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.cannabis_text_2 != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.cannabis_text_2, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"])))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 cannabis-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "home-section-title "
      }, pageData.cannabis_heading_3 != '' && pageData.cannabis_heading_3 != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_heading_3)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "small-caps gold-text"
      }, pageData.cannabis_subheader_3 != '' && pageData.cannabis_subheader_3 != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_subheader_3)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.cannabis_text_3 != '' && pageData.cannabis_text_3 != null && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.cannabis_text_3, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
        src: pageData.cannabis_image_3 != '' & pageData.cannabis_image_3 != null && pageData.cannabis_image_3.url,
        alt: pageData.cannabis_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_heading),
        className: "",
        effect: "opacity"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/cannabis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "wider"
      }, pageData.cannabis_cta_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cannabis_cta_button_text))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Quote__WEBPACK_IMPORTED_MODULE_8__["default"], {
        quotesData: quotesData,
        index: 1
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "cbd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 intro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "home-section-title "
      }, pageData.cbd_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cbd_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "small-caps gold-text"
      }, pageData.cbd_subheading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cbd_subheading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.cbd_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.cbd_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
        src: pageData.cbd_image.url != '' && pageData.cbd_image.url,
        alt: pageData.cbd_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cbd_heading),
        className: "",
        effect: "opacity"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/cbd"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "wider"
      }, pageData.cbd_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cbd_button_text))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Quote__WEBPACK_IMPORTED_MODULE_8__["default"], {
        quotesData: quotesData,
        index: 2
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "gear"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 intro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "home-section-title "
      }, pageData.gear_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.gear_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "small-caps gold-text"
      }, pageData.gear_subheading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.gear_subheading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.accessories_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.accessories_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, accessoriesImage)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 mobile-flex-reverse"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
        src: pageData.clothing_image != '' && pageData.clothing_image.url,
        alt: pageData.clothing_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.clothing_heading),
        className: "",
        effect: "opacity"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "home-section-title clothing-heading"
      }, pageData.clothing_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.clothing_heading, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "small-caps gold-text"
      }, pageData.clothing_subheading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.clothing_subheading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.clothing_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.clothing_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/gear"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "wider"
      }, pageData.accessories_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.accessories_button_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "cafe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cols-2 cannabis-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "vertical-aligner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "home-section-title "
      }, pageData.cafe_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cafe_heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "small-caps gold-text"
      }, pageData.cafe_subheader != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cafe_subheader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rich-text section-desc"
      }, pageData.cafe_intro_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].render(pageData.cafe_intro_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImage"], {
        src: pageData.cafe_image != '' && pageData.cafe_image.url,
        alt: pageData.cafe_heading != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cafe_heading),
        className: "",
        effect: "opacity"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/cafe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "wider"
      }, pageData.cafe_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.cafe_button_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Quote__WEBPACK_IMPORTED_MODULE_8__["default"], {
        quotesData: quotesData,
        index: 4,
        styleClass: "last-quote"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Newsletter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        newsletterData: newsletterData,
        page: "home"
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./components/Quote.js":
/*!*****************************!*\
  !*** ./components/Quote.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Quotes */ "./components/styles/Quotes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Quote =
/*#__PURE__*/
function (_Component) {
  _inherits(Quote, _Component);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, _getPrototypeOf(Quote).apply(this, arguments));
  }

  _createClass(Quote, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          quotesData = _this$props.quotesData,
          index = _this$props.index,
          styleClass = _this$props.styleClass;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Quotes__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: styleClass != '' ? styleClass : ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: quotesData[index].link != '' && quotesData[index].link.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "quote"
      }, "\u201C", quotesData[index].quote[0].text, "\u201D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "publication"
      }, "\u2014 ", quotesData[index].publication[0].text)));
    }
  }]);

  return Quote;
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

/***/ "./components/styles/Quotes.js":
/*!*************************************!*\
  !*** ./components/styles/Quotes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var QuoteSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Quotes__QuoteSection",
  componentId: "sc-19zs7i9-0"
})(["background-color:#ecebe9;padding-top:60px;padding-bottom:85px;&.last-quote{@media only screen and (max-width:768px){padding-bottom:0;.publication{margin-bottom:0;}}}.quote{font-size:3.9rem;line-height:1.2;text-align:center;max-width:1040px;margin-right:auto;margin-left:auto;font-family:'Lora Regular',serif;margin-bottom:28px;@media screen and (max-width:768px){font-size:3rem;}}.publication{text-align:center;margin-top:0;text-transform:uppercase;font-family:'Gotham Bold',sans-serif;letter-spacing:0.1rem;font-size:1.2rem;color:#6b6653;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuoteSection);

/***/ }),

/***/ "./components/styles/sections/homeStyles.js":
/*!**************************************************!*\
  !*** ./components/styles/sections/homeStyles.js ***!
  \**************************************************/
/*! exports provided: HomeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWrapper", function() { return HomeWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var HomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "homeStyles__HomeWrapper",
  componentId: "sc-1l3myre-0"
})(["background-color:#ecebe9;header{h1{max-width:1164px;font-size:7rem;@media only screen and (max-width:1000px){font-size:50px;}@media only screen and (max-width:768px){font-size:39px;width:92%;margin-bottom:25px;}}.publication{text-align:center;margin-top:24px;margin-bottom:50px;}}h3.small-caps{margin-top:16px;margin-bottom:24px;}.home-section-title{font-family:'Lora Regular',serif;font-size:5rem;color:#6b6653;margin:0;line-height:1.1;max-width:400px;@media only screen and (max-width:768px){font-size:37px;}}.section-desc p{font-size:1.4rem;color:#333639;letter-spacing:0.08rem;max-width:440px;@media only screen and (max-width:768px){margin-bottom:40px;}}.cannabis{padding-top:60px;padding-bottom:10px;img{@media screen and (max-width:768px){width:100%;max-width:440px;margin-right:auto;margin-top:20px;}}.mobile-flex-reverse{@media screen and (max-width:768px){padding-top:40px;}}.wider{margin-top:90px;}}.cbd,.gear{padding-top:120px;padding-bottom:120px;@media only screen and (max-width:768px){padding-top:60px;padding-bottom:60px;}img{@media screen and (max-width:768px){width:100%;max-width:440px;margin-right:auto;margin-top:30px;}}}.cbd{background-color:#dfe0db;.intro{padding-bottom:30px;}}.gear{background-color:#e0dddb;.intro{.section-desc{margin-top:35px;}}.mobile-flex-reverse{@media screen and (max-width:768px){padding-top:20px;img{margin-top:0;margin-bottom:20px;}}}}.clothing-heading{max-width:480px;@media screen and (max-width:768px){margin-top:40px;}h2{max-width:480px;margin:0;@media screen and (max-width:768px){font-size:37px;}}}.newsletter-callout{background-color:#ecebe9;form{padding-top:60px;}}header .container-sm{max-width:760px;width:80%;margin-left:auto;margin-right:auto;@media only screen and (max-width:768px){width:90%;}}.video-wrapper{position:fixed;z-index:200;top:0;left:0;right:0;width:100%;height:100%;overflow:scroll;display:flex;align-items:center;justify-content:center;background:rgba(30,30,30,0.75);opacity:0;visibility:hidden;transition:all 0.5s ease-in-out;&.showing{opacity:1;visibility:visible;}@media only screen and (max-width:768px){padding-top:30px;}}.close-video{position:absolute;top:30px;right:30px;cursor:pointer;}.video-wrapper .inner{position:relative;padding-bottom:56.25%;padding-top:25px;height:0;}.video-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%;}.last-quote{padding-bottom:0;}"]);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");


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




var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          newsletter = _this$props.newsletter,
          quotes = _this$props.quotes,
          products = _this$props.products,
          sitewideData = _this$props.sitewideData;
      var data = page.data;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pageData: data,
        newsletterData: newsletter,
        quotesData: quotes,
        products: products,
        sitewideData: sitewideData
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
                pageId = 'XJQ3WREAAEWRl5ja';
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageApi"])(pageId);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return Object(_api__WEBPACK_IMPORTED_MODULE_2__["getPageByType"])('product');

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

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map