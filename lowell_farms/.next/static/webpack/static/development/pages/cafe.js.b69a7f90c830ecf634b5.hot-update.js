webpackHotUpdate("static/development/pages/cafe.js",{

/***/ "./components/Cafe.js":
/*!****************************!*\
  !*** ./components/Cafe.js ***!
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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Newsletter */ "./components/Newsletter.js");
/* harmony import */ var _styles_ButtonDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ButtonDark */ "./components/styles/ButtonDark.js");
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.js");
/* harmony import */ var _KeyInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyInfo */ "./components/KeyInfo.js");
/* harmony import */ var _styles_sections_cafeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/cafeStyles */ "./components/styles/sections/cafeStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
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
      }, cafeButtonText), reservationButtonText != '' && reservation_link != '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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

/***/ })

})
//# sourceMappingURL=cafe.js.b69a7f90c830ecf634b5.hot-update.js.map