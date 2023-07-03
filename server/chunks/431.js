"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 1431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6539);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const react = __webpack_require__(6689);
const Layout = ({ children , className  })=>{
    const { theme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* .ThemeContext */ .N);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full h-full inline-block z-0 ${theme.background} p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 6539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ThemeContext),
/* harmony export */   "b": () => (/* binding */ Themes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Themes = {
    light: {
        foreground: "text-dark",
        background: "bg-light",
        negBg: "bg-dark",
        negTx: "text-light",
        fill: "fill-dark"
    },
    dark: {
        foreground: "text-light",
        background: "bg-dark",
        negBg: "bg-light",
        negTx: "text-dark",
        fill: "fill-light"
    }
};
const ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
    theme: Themes.light,
    toggleTheme: ()=>{}
});


/***/ })

};
;