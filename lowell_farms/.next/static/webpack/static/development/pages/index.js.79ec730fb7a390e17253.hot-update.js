webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_ButtonGold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ButtonGold */ "./components/styles/ButtonGold.js");
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/HeaderStyles */ "./components/styles/HeaderStyles.js");
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Quote */ "./components/Quote.js");
/* harmony import */ var _styles_sections_homeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/homeStyles */ "./components/styles/sections/homeStyles.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
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
      }, pageData.accessories_button_text != '' && prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__["RichText"].asText(pageData.accessories_button_text, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__["linkResolver"]))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ })

})
//# sourceMappingURL=index.js.79ec730fb7a390e17253.hot-update.js.map