"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ssg",{

/***/ "./pages/ssg.tsx":
/*!***********************!*\
  !*** ./pages/ssg.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Ssg = function(props) {\n    var _this1 = _this;\n    _s();\n    var tasks = props.tasks, notices = props.notices;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();\n    var signOut = function() {\n        _utils_supabase__WEBPACK_IMPORTED_MODULE_6__.supabase.auth.signOut();\n        queryClient.removeQueries(\"todos\");\n        queryClient.removeQueries(\"notices\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n        title: \"SSG\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-40\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: tasks.map(function(task) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"my-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg text-blue-500\",\n                                    children: task.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, task.id, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: notices.map(function(notice) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg text-blue-300\",\n                                    children: notice.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, notice.id, false, {\n                                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackButton__WEBPACK_IMPORTED_MODULE_4__.BackButton, {}, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/home\",\n                prefetch: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"my-5 text-xl text-indigo-500 bg-black py-2 px-3 hover:text-red-500 rounded\",\n                    children: \"Go Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.LogoutIcon, {\n                className: \"mb-b h-6 w-6 cursor-pointerbtext-blue-500\",\n                onClick: signOut\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/ssg.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Ssg, \"GXsxXqkLNpg9rNSA2fykCwUUldE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient\n    ];\n});\n_c = Ssg;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ssg);\nvar _c;\n$RefreshReg$(_c, \"Ssg\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zc2cudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUV2QjtBQUNXO0FBQ0s7QUFDUztBQUNSO0FBRUQ7O0FBb0I1QyxJQUFNTyxHQUFHLEdBQTBCLFNBQUNDLEtBQUssRUFBSzs7O0lBQzVDLElBQVFDLEtBQUssR0FBY0QsS0FBSyxDQUF4QkMsS0FBSyxFQUFFQyxPQUFPLEdBQUtGLEtBQUssQ0FBakJFLE9BQU87SUFDdEIsSUFBTUMsTUFBTSxHQUFHVCxzREFBUyxFQUFFO0lBQzFCLElBQU1VLFdBQVcsR0FBR1QsMkRBQWMsRUFBRTtJQUNwQyxJQUFNVSxPQUFPLEdBQUcsV0FBTTtRQUNwQlAsa0VBQXFCLEVBQUU7UUFDdkJNLFdBQVcsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNsQ0gsV0FBVyxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0tBQ3JDO0lBQ0QscUJBQ0UsOERBQUNWLHNEQUFNO1FBQUNXLEtBQUssRUFBQyxLQUFLOzswQkFDakIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5QkFBeUI7O2tDQUV4Qyw4REFBQ0MsSUFBRTtrQ0FDQVYsS0FBSyxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLOzRCQUNuQixxQkFDRSw4REFBQ0MsSUFBRTtnQ0FBQ0osU0FBUyxFQUFDLE1BQU07MENBQ2xCLDRFQUFDSyxHQUFDO29DQUFDTCxTQUFTLEVBQUMsdUJBQXVCOzhDQUFFRyxJQUFJLENBQUNMLEtBQUs7Ozs7OzBDQUFLOytCQUQ3QkssSUFBSSxDQUFDRyxFQUFFOzs7O3NDQUU1QixDQUNOO3lCQUNGLENBQUM7Ozs7OzZCQUNDO2tDQUNMLDhEQUFDTCxJQUFFO2tDQUNBVCxPQUFPLENBQUNVLEdBQUcsQ0FBQyxTQUFDSyxNQUFNLEVBQUs7NEJBQ3ZCLHFCQUNFLDhEQUFDSCxJQUFFOzBDQUNELDRFQUFDQyxHQUFDO29DQUFDTCxTQUFTLEVBQUMsdUJBQXVCOzhDQUFFTyxNQUFNLENBQUNDLE9BQU87Ozs7OzBDQUFLOytCQURsREQsTUFBTSxDQUFDRCxFQUFFOzs7O3NDQUViLENBQ047eUJBQ0YsQ0FBQzs7Ozs7NkJBQ0M7Ozs7OztxQkFDRzswQkFDTiw4REFBQ3BCLDhEQUFVOzs7O3FCQUFHOzBCQUNoQiw4REFBQ0gsa0RBQUk7Z0JBQUMwQixJQUFJLEVBQUMsT0FBTztnQkFBQ0MsUUFBUSxFQUFFLEtBQUs7MEJBQ2hDLDRFQUFDQyxHQUFDO29CQUFDWCxTQUFTLEVBQUMsNEVBQTRFOzhCQUFDLFNBRTFGOzs7Ozt5QkFBSTs7Ozs7cUJBQ0M7MEJBQ1AsOERBQUNsQiw4REFBVTtnQkFDVGtCLFNBQVMsRUFBQywyQ0FBMkM7Z0JBQ3JEWSxPQUFPLEVBQUVqQixPQUFPOzs7OztxQkFDZDs7Ozs7O2FBQ0csQ0FDVjtDQUNGO0dBNUNLTixHQUFHOztRQUVRTCxrREFBUztRQUNKQyx1REFBYzs7O0FBSDlCSSxLQUFBQSxHQUFHOztBQThDVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zc2cudHN4PzdiZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nb3V0SWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0J1dHRvbidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgTm90aWNlLCBUYXNrIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL3V0aWxzL3N1cGFiYXNlJ1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgY29uc29sZS5sb2coJ2dldFN0YXRpY1Byb3BzL3NzZyBpbnZva2VkJylcbiAgY29uc3QgeyBkYXRhOiB0YXNrcyB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgndG9kb3MnKVxuICAgIC5zZWxlY3QoJyonKVxuICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiB0cnVlIH0pXG4gIGNvbnN0IHsgZGF0YTogbm90aWNlcyB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnbm90aWNlcycpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IHRydWUgfSlcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdGFza3MsIG5vdGljZXMgfSB9XG59XG5cbnR5cGUgU3RhdGljUHJvcHMgPSB7XG4gIHRhc2tzOiBUYXNrW11cbiAgbm90aWNlczogTm90aWNlW11cbn1cblxuY29uc3QgU3NnOiBOZXh0UGFnZTxTdGF0aWNQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0YXNrcywgbm90aWNlcyB9ID0gcHJvcHNcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpXG4gIGNvbnN0IHNpZ25PdXQgPSAoKSA9PiB7XG4gICAgc3VwYWJhc2UuYXV0aC5zaWduT3V0KClcbiAgICBxdWVyeUNsaWVudC5yZW1vdmVRdWVyaWVzKCd0b2RvcycpXG4gICAgcXVlcnlDbGllbnQucmVtb3ZlUXVlcmllcygnbm90aWNlcycpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiU1NHXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQwXCI+XG5cbiAgICAgIDx1bD5cbiAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiIGtleT17dGFzay5pZH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ibHVlLTUwMFwiPnt0YXNrLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8dWw+XG4gICAgICAgIHtub3RpY2VzLm1hcCgobm90aWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e25vdGljZS5pZH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ibHVlLTMwMFwiPntub3RpY2UuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJhY2tCdXR0b24gLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZVwiIHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm15LTUgdGV4dC14bCB0ZXh0LWluZGlnby01MDAgYmctYmxhY2sgcHktMiBweC0zIGhvdmVyOnRleHQtcmVkLTUwMCByb3VuZGVkXCI+XG4gICAgICAgICAgR28gSG9tZVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TG9nb3V0SWNvblxuICAgICAgICBjbGFzc05hbWU9XCJtYi1iIGgtNiB3LTYgY3Vyc29yLXBvaW50ZXJidGV4dC1ibHVlLTUwMFwiXG4gICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XG4gICAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3NnXG4iXSwibmFtZXMiOlsiTG9nb3V0SWNvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeUNsaWVudCIsIkJhY2tCdXR0b24iLCJMYXlvdXQiLCJzdXBhYmFzZSIsIlNzZyIsInByb3BzIiwidGFza3MiLCJub3RpY2VzIiwicm91dGVyIiwicXVlcnlDbGllbnQiLCJzaWduT3V0IiwiYXV0aCIsInJlbW92ZVF1ZXJpZXMiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwidGFzayIsImxpIiwicCIsImlkIiwibm90aWNlIiwiY29udGVudCIsImhyZWYiLCJwcmVmZXRjaCIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ssg.tsx\n");

/***/ })

});