/*!
 * react-date-selector-tw v1.0.5
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["dateSelector"] = factory(require("react"));
	else
		root["dateSelector"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow_17_512.ba4ac1e3.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow_17_512right.a9ba951e.png";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// CONCATENATED MODULE: ./src/DateUtilities.js


function GetDateString(dte) {

    return dte.toISOString().split('T')[0];
}
function GetDate(dte) {

    return new Date(dte);
}
// EXTERNAL MODULE: ./css/DateSelector.css
var css_DateSelector = __webpack_require__(2);

// CONCATENATED MODULE: ./src/DateSelector.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DateSelector_DateSelector = function (_React$Component) {
        _inherits(DateSelector, _React$Component);

        function DateSelector(props) {
                _classCallCheck(this, DateSelector);

                var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

                var filterText = new Date().toISOString().split('T')[0];
                _this.state = { input: filterText, time: '', dte: '', hr: 0, min: 0 };

                _this.handleChange = _this.handleChange.bind(_this);
                _this.AddDay = _this.AddDay.bind(_this);
                _this.SubtractDay = _this.SubtractDay.bind(_this);

                return _this;
        }

        DateSelector.prototype.componentDidUpdate = function componentDidUpdate() {

                //Update the parent components with the DateSelector's current date.

        };

        DateSelector.prototype.handleChange = function handleChange(e) {
                var dte = new Date(e.target.value);
                this.setState({ input: e.target.value, time: this.state.time, hr: this.state.hr, min: this.state.min });
                var dteS = GetDateString(dte);
                this.GetDateValue(dteS);
        };

        DateSelector.prototype.AddDay = function AddDay() {

                var dte = GetDate(this.state.input);
                dte.setDate(dte.getDate() + 1);
                this.GetDateValue(GetDateString(dte));
                this.setState({ input: GetDateString(dte), time: this.state.time, isModalOpen: false, dte: GetDateString(dte) });
        };

        DateSelector.prototype.SubtractDay = function SubtractDay() {

                var dte = GetDate(this.state.input);
                dte.setDate(dte.getDate() - 1);
                this.GetDateValue(GetDateString(dte));
                this.setState({ input: GetDateString(dte), time: this.state.time, isModalOpen: false, dte: GetDateString(dte) });
        };

        DateSelector.prototype.GetDateValue = function GetDateValue(dte) {

                this.props.GetDateValue(dte);
        };

        DateSelector.prototype.render = function render() {

                return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](
                        'div',
                        null,
                        external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](
                                'div',
                                { className: 'container' },
                                external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](
                                        'div',
                                        { className: 'leftCol' },
                                        external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]('img', { src: __webpack_require__(4), width: '35px', onClick: this.SubtractDay })
                                ),
                                external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](
                                        'div',
                                        { className: 'middleCol' },
                                        external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]('input', { style: { fontSize: this.props.fontSize, width: '100%' },
                                                id: 'InputValue',
                                                type: 'date',
                                                value: this.state.input,
                                                onChange: this.handleChange
                                        })
                                ),
                                external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](
                                        'div',
                                        { className: 'rightCol' },
                                        external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]('img', { src: __webpack_require__(5), width: '35px', onClick: this.AddDay })
                                )
                        )
                );
        };

        return DateSelector;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_default; });
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function src_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var src_default = function (_Component) {
  src_inherits(_default, _Component);

  function _default() {
    src_classCallCheck(this, _default);

    return src_possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  _default.prototype.GetDateValue = function GetDateValue(dte) {
    this.setState({ dte: dte });
    //alert(dte);
  };

  _default.prototype.render = function render() {
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      'div',
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'h2',
        null,
        'Welcome to React components'
      ),
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        'div',
        null,
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(DateSelector_DateSelector, { GetDateValue: this.GetDateValue.bind(this) })
      )
    );
  };

  return _default;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);



/***/ })
/******/ ])["default"];
});