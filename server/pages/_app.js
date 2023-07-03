(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2584:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Montserrat_72222f', '__Montserrat_Fallback_72222f'","fontStyle":"normal"},
	"className": "__className_72222f",
	"variable": "__variable_72222f"
};


/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6539);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1431);





const Footer = ()=>{
    const { theme  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* .ThemeContext */ .N);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: `w-full ${theme.background} border-t-2 border-solid border-dark font-medium text-lg`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: "py-8 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        new Date().getFullYear(),
                        ", All Rights Reserved"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        "Build with ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-primary text-2x1 px-1"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            target: "_blank",
                            className: "underline underline-offset-2",
                            children: "CodeBucks"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: "Say Hello"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 4851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _Context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));
const Logo = ()=>{
    const { theme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center mt-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotionLink, {
            href: "/",
            className: `w-16 h-16 ${theme.negBg} ${theme.negTx} flex items-center justify-center rounded-full text-2x1 font-bold`,
            whileHover: {
                backgroundColor: [
                    "#121212",
                    "rgba(131,58,180,1)",
                    "rgba(253,29,29,1)",
                    "rgba(252,176,69,1)",
                    "rgba(131,58,180,1)",
                    "#121212"
                ],
                transition: {
                    duration: 1,
                    repeat: Infinity
                }
            },
            children: "OS"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icons_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5191);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4851);
/* harmony import */ var _Context_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _Logo_Logo__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _Logo_Logo__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CustomLink = ({ href , title , className  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: `${className} relative group`,
        children: [
            title,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-100 ${router.asPath == href ? `w-full` : `w-0`}`
            })
        ]
    });
};
const CustomMobileLink = ({ href , title , className , toggle  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClick = ()=>{
        toggle();
        router.push(href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `${className} relative group text-light my-2`,
        onClick: handleClick,
        children: [
            title,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `h-[1px] inline-block bg-dark absolute 
            left-0 bottom-0.5 group-hover:w-full transition-[width] ease 
            duration-100 ${router.asPath == href ? `w-full` : `w-0`}`
            })
        ]
    });
};
const Navbar = ({ changeTheme  })=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { theme  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_7__/* .ThemeContext */ .N);
    const handleClick = ()=>{
        setOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `w-full px-32 py-8 ${theme.foreground} font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "flex-col justify-center items-center hidden lg:flex",
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? " rotate-45 translate-y-1" : "-translate-y-0.5"}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? " rotate-45 translate-y-1" : "translate-y-0.5"}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "w-full flex justify-between items-center lg:hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center flex justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/",
                                title: "React",
                                className: "mr-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/",
                                title: "Angular",
                                className: "mr-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/",
                                title: "Django",
                                className: "mr-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/",
                                title: "Wordpress",
                                className: "mr-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/",
                                title: "Unity",
                                className: "mr-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "w-100 flex items-center justify-center flex-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .TwitterIcon */ .Zm, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .GithubIcon */ .ET, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .LinkedInIcon */ .nI, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .PinterestIcon */ .cH, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .DribbbleIcon */ .uf, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
                                onClick: changeTheme,
                                children: "Dark Mode"
                            })
                        ]
                    })
                ]
            }),
            isOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                initial: {
                    scale: 0,
                    opacity: 0,
                    x: "-50%",
                    y: "-50%"
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                className: "min-w-[70px] flex justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   bg-dark/90 rounded-lg backdrop-blur-md py-32",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center flex-col justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/",
                                title: "Home",
                                className: "",
                                toggle: handleClick
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/about",
                                title: "About",
                                className: "",
                                toggle: handleClick
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/projects",
                                title: "projects",
                                className: "",
                                toggle: handleClick
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/articles",
                                title: "Articles",
                                className: "",
                                toggle: handleClick
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center justify-center flex-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3 sm:mx-1",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .TwitterIcon */ .Zm, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3 sm:mx-1",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .GithubIcon */ .ET, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3 sm:mx-1",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .LinkedInIcon */ .nI, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3 sm:mx-1",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .PinterestIcon */ .cH, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                href: "https://www.twiter.com",
                                target: "_blank",
                                className: "w-6 mx-3 sm:mx-1",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icons_Icons__WEBPACK_IMPORTED_MODULE_4__/* .DribbbleIcon */ .uf, {})
                            })
                        ]
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-[50%] top-2 translate-x-[-50%]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2584);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4268);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Context_ThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function App({ Component , pageProps  }) {
    const rout = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_8__/* .Themes.light */ .b.light);
    function change() {
        let th = theme;
        if (th == _Context_ThemeContext__WEBPACK_IMPORTED_MODULE_8__/* .Themes.light */ .b.light) {
            setTheme(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_8__/* .Themes.dark */ .b.dark);
        } else {
            setTheme(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_8__/* .Themes.light */ .b.light);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Context_ThemeContext__WEBPACK_IMPORTED_MODULE_8__/* .ThemeContext.Provider */ .N.Provider, {
                value: {
                    theme
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: `${(next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9___default().variable)} ${theme.background} font-mont w-full main-h-screen`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            changeTheme: change
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                            mode: "wait",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            }, rout.asPath)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,431,191], () => (__webpack_exec__(8375)));
module.exports = __webpack_exports__;

})();