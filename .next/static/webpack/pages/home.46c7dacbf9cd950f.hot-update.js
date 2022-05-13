"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_NoticeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NoticeForm */ \"./components/NoticeForm.tsx\");\n/* harmony import */ var _components_NoticeLists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NoticeLists */ \"./components/NoticeLists.tsx\");\n/* harmony import */ var _components_TaskForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TaskForm */ \"./components/TaskForm.tsx\");\n/* harmony import */ var _components_TaskLists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TaskLists */ \"./components/TaskLists.tsx\");\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    var signOut = function() {\n        _utils_supabase__WEBPACK_IMPORTED_MODULE_9__.supabase.auth.signOut();\n        queryClient.removeQueries(\"todos\");\n        queryClient.removeQueries(\"notices\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n        title: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-40\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-3 flex justfy-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"book\", {\n                                    className: \" h-8 w-8 text-blue-500\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskForm__WEBPACK_IMPORTED_MODULE_7__.TaskForm, {}, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskLists__WEBPACK_IMPORTED_MODULE_8__.TaskLists, {}, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-3 flex justfy-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__.AnnotationIcon, {\n                                    className: \" h-8 w-8 text-blue-500\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoticeForm__WEBPACK_IMPORTED_MODULE_5__.NoticeForm, {}, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoticeLists__WEBPACK_IMPORTED_MODULE_6__.NoticeLists, {}, void 0, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/ssr\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"px-2 py-3 text-xl text-blue-500 hover:bg-black rounded\",\n                        children: \"Go to SSR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/isr\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"px-2 py-3 mb-3 text-xl text-blue-500 hover:bg-black rounded\",\n                        children: \"Go to ISR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/csr\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"px-2 py-3 mb-3 text-xl text-blue-500 hover:bg-black rounded\",\n                        children: \"Go to CSR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/ssg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"px-2 py-3 mb-3 text-xl text-blue-500 hover:bg-black rounded\",\n                        children: \"Go to SSG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__.LogoutIcon, {\n                className: \"my-5 mb-b h-6 w-6 cursor-pointerbtext-blue-500\",\n                onClick: signOut\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/home.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"4R+oYVB2Uc11P7bp1KcuhpkfaTw=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFLK0I7QUFDSDtBQUNIO0FBQ21CO0FBQ0M7QUFDUTtBQUNFO0FBQ047QUFDRTtBQUNQOztBQUU1QyxJQUFNVyxJQUFJLEdBQUcsV0FBTTs7SUFDakIsSUFBTUMsV0FBVyxHQUFHUiwyREFBYyxFQUFFO0lBQ3BDLElBQU1TLE9BQU8sR0FBRyxXQUFNO1FBQ3BCSCxrRUFBcUIsRUFBRTtRQUN2QkUsV0FBVyxDQUFDRyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2xDSCxXQUFXLENBQUNHLGFBQWEsQ0FBQyxTQUFTLENBQUM7S0FDckM7SUFDRCxxQkFDRSw4REFBQ1Ysc0RBQU07UUFBQ1csS0FBSyxFQUFDLE1BQU07OzBCQUNsQiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7a0NBQ3RDLDhEQUFDRCxLQUFHOzswQ0FDRiw4REFBQ0EsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHlCQUF5QjswQ0FDdEMsNEVBQUNDLE1BQUk7b0NBQUNELFNBQVMsRUFBQyx3QkFBd0I7Ozs7O3lDQUFHOzs7OztxQ0FDdkM7MENBQ04sOERBQUNWLDBEQUFROzs7O3FDQUFHOzBDQUNaLDhEQUFDQyw0REFBUzs7OztxQ0FBRzs7Ozs7OzZCQUNUO2tDQUNOLDhEQUFDUSxLQUFHOzswQ0FDRiw4REFBQ0EsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHlCQUF5QjswQ0FDdEMsNEVBQUNsQixtRUFBYztvQ0FBQ2tCLFNBQVMsRUFBQyx3QkFBd0I7Ozs7O3lDQUFHOzs7OztxQ0FDakQ7MENBRU4sOERBQUNaLDhEQUFVOzs7O3FDQUFHOzBDQUNkLDhEQUFDQyxnRUFBVzs7OztxQ0FBRzs7Ozs7OzZCQUNYOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNVLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7MEJBQy9CLDRFQUFDaEIsa0RBQUk7b0JBQUNrQixJQUFJLEVBQUMsTUFBTTs4QkFDZiw0RUFBQ0MsR0FBQzt3QkFBQ0gsU0FBUyxFQUFDLHdEQUF3RDtrQ0FBQyxXQUV0RTs7Ozs7NkJBQUk7Ozs7O3lCQUNDOzs7OztxQkFDSDswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjswQkFDL0IsNEVBQUNoQixrREFBSTtvQkFBQ2tCLElBQUksRUFBQyxNQUFNOzhCQUNmLDRFQUFDQyxHQUFDO3dCQUFDSCxTQUFTLEVBQUMsNkRBQTZEO2tDQUFDLFdBRTNFOzs7Ozs2QkFBSTs7Ozs7eUJBQ0M7Ozs7O3FCQUNIOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzBCQUMvQiw0RUFBQ2hCLGtEQUFJO29CQUFDa0IsSUFBSSxFQUFDLE1BQU07OEJBQ2YsNEVBQUNDLEdBQUM7d0JBQUNILFNBQVMsRUFBQyw2REFBNkQ7a0NBQUMsV0FFM0U7Ozs7OzZCQUFJOzs7Ozt5QkFDQzs7Ozs7cUJBQ0g7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7MEJBQy9CLDRFQUFDaEIsa0RBQUk7b0JBQUNrQixJQUFJLEVBQUMsTUFBTTs4QkFDZiw0RUFBQ0MsR0FBQzt3QkFBQ0gsU0FBUyxFQUFDLDZEQUE2RDtrQ0FBQyxXQUUzRTs7Ozs7NkJBQUk7Ozs7O3lCQUNDOzs7OztxQkFDSDswQkFDTiw4REFBQ2pCLCtEQUFVO2dCQUNUaUIsU0FBUyxFQUFDLGdEQUFnRDtnQkFDMURJLE9BQU8sRUFBRVQsT0FBTzs7Ozs7cUJBQ2hCOzs7Ozs7YUFDSyxDQUNWO0NBQ0Y7R0E1REtGLElBQUk7O1FBQ1lQLHVEQUFjOzs7QUFEOUJPLEtBQUFBLElBQUk7QUE4RFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3g/NDhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbm5vdGF0aW9uSWNvbixcbiAgRG9jdW1lbnRUZXh0SWNvbixcbiAgTG9nb3V0SWNvbixcbiAgU3RhdHVzT25saW5lSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IE5vdGljZUZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZUZvcm0nXG5pbXBvcnQgeyBOb3RpY2VMaXN0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlTGlzdHMnXG5pbXBvcnQgeyBUYXNrRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGFza0Zvcm0nXG5pbXBvcnQgeyBUYXNrTGlzdHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Rhc2tMaXN0cydcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vdXRpbHMvc3VwYWJhc2UnXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKVxuICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xuICAgIHN1cGFiYXNlLmF1dGguc2lnbk91dCgpXG4gICAgcXVlcnlDbGllbnQucmVtb3ZlUXVlcmllcygndG9kb3MnKVxuICAgIHF1ZXJ5Q2xpZW50LnJlbW92ZVF1ZXJpZXMoJ25vdGljZXMnKVxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cImhvbWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNDBcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTMgZmxleCBqdXN0ZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Ym9vayBjbGFzc05hbWU9XCIgaC04IHctOCB0ZXh0LWJsdWUtNTAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VGFza0Zvcm0gLz5cbiAgICAgICAgICA8VGFza0xpc3RzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMyBmbGV4IGp1c3RmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxBbm5vdGF0aW9uSWNvbiBjbGFzc05hbWU9XCIgaC04IHctOCB0ZXh0LWJsdWUtNTAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxOb3RpY2VGb3JtIC8+XG4gICAgICAgICAgPE5vdGljZUxpc3RzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zc3JcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0yIHB5LTMgdGV4dC14bCB0ZXh0LWJsdWUtNTAwIGhvdmVyOmJnLWJsYWNrIHJvdW5kZWRcIj5cbiAgICAgICAgICAgIEdvIHRvIFNTUlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9pc3JcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0yIHB5LTMgbWItMyB0ZXh0LXhsIHRleHQtYmx1ZS01MDAgaG92ZXI6YmctYmxhY2sgcm91bmRlZFwiPlxuICAgICAgICAgICAgR28gdG8gSVNSXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2NzclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTIgcHktMyBtYi0zIHRleHQteGwgdGV4dC1ibHVlLTUwMCBob3ZlcjpiZy1ibGFjayByb3VuZGVkXCI+XG4gICAgICAgICAgICBHbyB0byBDU1JcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3NnXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMiBweS0zIG1iLTMgdGV4dC14bCB0ZXh0LWJsdWUtNTAwIGhvdmVyOmJnLWJsYWNrIHJvdW5kZWRcIj5cbiAgICAgICAgICAgIEdvIHRvIFNTR1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8TG9nb3V0SWNvblxuICAgICAgICBjbGFzc05hbWU9XCJteS01IG1iLWIgaC02IHctNiBjdXJzb3ItcG9pbnRlcmJ0ZXh0LWJsdWUtNTAwXCJcbiAgICAgICAgb25DbGljaz17c2lnbk91dH1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkFubm90YXRpb25JY29uIiwiTG9nb3V0SWNvbiIsIkxpbmsiLCJSZWFjdCIsInVzZVF1ZXJ5Q2xpZW50IiwiTGF5b3V0IiwiTm90aWNlRm9ybSIsIk5vdGljZUxpc3RzIiwiVGFza0Zvcm0iLCJUYXNrTGlzdHMiLCJzdXBhYmFzZSIsIkhvbWUiLCJxdWVyeUNsaWVudCIsInNpZ25PdXQiLCJhdXRoIiwicmVtb3ZlUXVlcmllcyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9vayIsImhyZWYiLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

/***/ })

});