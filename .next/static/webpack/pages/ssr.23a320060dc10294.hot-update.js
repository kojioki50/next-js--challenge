"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ssr",{

/***/ "./pages/ssr.tsx":
/*!***********************!*\
  !*** ./pages/ssr.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Ssr = function(param) {\n    var tasks = param.tasks, notices = param.notices;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();\n    var signOut = function() {\n        _utils_supabase__WEBPACK_IMPORTED_MODULE_7__.supabase.auth.signOut();\n        queryClient.removeQueries(\"todos\");\n        queryClient.removeQueries(\"notices\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        title: \"SSR\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-40\"\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: tasks.map(function(task) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-blue-300\",\n                            children: task.title\n                        }, void 0, false, {\n                            fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, _this1)\n                    }, task.id, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    notices.map(function(notice) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg text-blue-300\",\n                                children: notice.content\n                            }, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this1)\n                        }, notice.id, false, {\n                            fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackButton__WEBPACK_IMPORTED_MODULE_5__.BackButton, {}, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/home\",\n                prefetch: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"my-5 text-xl text-indigo-500 bg-black py-2 px-3 hover:text-red-500 rounded\",\n                    children: \"Go Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.LogoutIcon, {\n                className: \"mb-b h-6 w-6 cursor-pointerbtext-blue-500\",\n                onClick: signOut\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssr.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Ssr, \"GXsxXqkLNpg9rNSA2fykCwUUldE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient\n    ];\n});\n_c = Ssr;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ssr);\nvar _c;\n$RefreshReg$(_c, \"Ssr\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBRXZCO0FBQ1c7QUFDZDtBQUNtQjtBQUNTO0FBQ1I7QUFFRDs7QUFtQjVDLElBQU1RLEdBQUcsR0FBMEIsZ0JBQXdCO1FBQXJCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsT0FBTyxTQUFQQSxPQUFPOzs7SUFDbEQsSUFBTUMsTUFBTSxHQUFHVCxzREFBUyxFQUFFO0lBQzFCLElBQU1VLFdBQVcsR0FBR1IsMkRBQWMsRUFBRTtJQUNwQyxJQUFNUyxPQUFPLEdBQUcsV0FBTTtRQUNwQk4sa0VBQXFCLEVBQUU7UUFDdkJLLFdBQVcsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNsQ0gsV0FBVyxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0tBQ3JDO0lBQ0QscUJBQ0UsOERBQUNULHNEQUFNO1FBQUNVLEtBQUssRUFBQyxLQUFLOzswQkFDakIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5QkFBeUI7Ozs7O3FCQUFPOzBCQUMvQyw4REFBQ0MsSUFBRTswQkFDQVYsS0FBSyxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO29CQUNuQixxQkFDRSw4REFBQ0MsSUFBRTtrQ0FDRCw0RUFBQ0MsR0FBQzs0QkFBQ0wsU0FBUyxFQUFDLHVCQUF1QjtzQ0FBRUcsSUFBSSxDQUFDTCxLQUFLOzs7OztrQ0FBSzt1QkFEOUNLLElBQUksQ0FBQ0csRUFBRTs7Ozs4QkFFWCxDQUNOO2lCQUNGLENBQUM7Ozs7O3FCQUNDOzBCQUNMLDhEQUFDTCxJQUFFOztvQkFDQVQsT0FBTyxDQUFDVSxHQUFHLENBQUMsU0FBQ0ssTUFBTSxFQUFLO3dCQUN2QixxQkFDRSw4REFBQ0gsSUFBRTtzQ0FDRCw0RUFBQ0MsR0FBQztnQ0FBQ0wsU0FBUyxFQUFDLHVCQUF1QjswQ0FBRU8sTUFBTSxDQUFDQyxPQUFPOzs7OztzQ0FBSzsyQkFEbERELE1BQU0sQ0FBQ0QsRUFBRTs7OztrQ0FFYixDQUNOO3FCQUNGLENBQUM7a0NBQ0YsOERBQUNuQiw4REFBVTs7Ozs2QkFBRzs7Ozs7O3FCQUNYOzBCQUNMLDhEQUFDSixrREFBSTtnQkFBQzBCLElBQUksRUFBQyxPQUFPO2dCQUFDQyxRQUFRLEVBQUUsS0FBSzswQkFDaEMsNEVBQUNDLEdBQUM7b0JBQUNYLFNBQVMsRUFBQyw0RUFBNEU7OEJBQUMsU0FFMUY7Ozs7O3lCQUFJOzs7OztxQkFDQzswQkFDUCw4REFBQ2xCLDhEQUFVO2dCQUNUa0IsU0FBUyxFQUFDLDJDQUEyQztnQkFDckRZLE9BQU8sRUFBRWpCLE9BQU87Ozs7O3FCQUNoQjs7Ozs7O2FBQ0ssQ0FDVjtDQUNGO0dBekNLTCxHQUFHOztRQUNRTixrREFBUztRQUNKRSx1REFBYzs7O0FBRjlCSSxLQUFBQSxHQUFHOztBQTJDVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zc3IudHN4PzZjMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nb3V0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tCdXR0b24nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IE5vdGljZSwgVGFzayB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJ1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi91dGlscy9zdXBhYmFzZSdcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgY29uc3QgeyBkYXRhOiB0YXNrcyB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgndG9kb3MnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG4gIGNvbnN0IHsgZGF0YTogbm90aWNlcyB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnbm90aWNlcycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IHRydWUgfSlcbiAgcmV0dXJue3Byb3BzOiB7dGFza3MsIG5vdGljZXN9fVxufVxuXG50eXBlIFN0YXRpY1Byb3BzID0ge1xuICB0YXNrczogVGFza1tdXG4gIG5vdGljZXM6IE5vdGljZVtdXG59XG5cbmNvbnN0IFNzcjogTmV4dFBhZ2U8U3RhdGljUHJvcHM+ID0gKHsgdGFza3MsIG5vdGljZXMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KClcbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKVxuICAgIHF1ZXJ5Q2xpZW50LnJlbW92ZVF1ZXJpZXMoJ3RvZG9zJylcbiAgICBxdWVyeUNsaWVudC5yZW1vdmVRdWVyaWVzKCdub3RpY2VzJylcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJTU1JcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNDBcIj48L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsdWUtMzAwXCI+e3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDx1bD5cbiAgICAgICAge25vdGljZXMubWFwKChub3RpY2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17bm90aWNlLmlkfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWJsdWUtMzAwXCI+e25vdGljZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPEJhY2tCdXR0b24gLz5cbiAgICAgIDwvdWw+XG4gICAgICA8TGluayBocmVmPVwiL2hvbWVcIiBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJteS01IHRleHQteGwgdGV4dC1pbmRpZ28tNTAwIGJnLWJsYWNrIHB5LTIgcHgtMyBob3Zlcjp0ZXh0LXJlZC01MDAgcm91bmRlZFwiPlxuICAgICAgICAgIEdvIEhvbWVcbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExvZ291dEljb25cbiAgICAgICAgY2xhc3NOYW1lPVwibWItYiBoLTYgdy02IGN1cnNvci1wb2ludGVyYnRleHQtYmx1ZS01MDBcIlxuICAgICAgICBvbkNsaWNrPXtzaWduT3V0fVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTc3IiXSwibmFtZXMiOlsiTG9nb3V0SWNvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVF1ZXJ5Q2xpZW50IiwiQmFja0J1dHRvbiIsIkxheW91dCIsInN1cGFiYXNlIiwiU3NyIiwidGFza3MiLCJub3RpY2VzIiwicm91dGVyIiwicXVlcnlDbGllbnQiLCJzaWduT3V0IiwiYXV0aCIsInJlbW92ZVF1ZXJpZXMiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwidGFzayIsImxpIiwicCIsImlkIiwibm90aWNlIiwiY29udGVudCIsImhyZWYiLCJwcmVmZXRjaCIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ssr.tsx\n");

/***/ })

});