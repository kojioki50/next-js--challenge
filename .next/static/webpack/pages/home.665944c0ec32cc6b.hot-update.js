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

/***/ "./components/TaskItem.tsx":
/*!*********************************!*\
  !*** ./components/TaskItem.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskItem\": function() { return /* binding */ TaskItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _hooks_useMutateTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMutateTask */ \"./hooks/useMutateTask.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TaskItem = function(param) {\n    var id = param.id, title = param.title;\n    _s();\n    var update = (0,_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(state) {\n        return state.updateEditedTask;\n    });\n    var deleteTaskMutation = (0,_hooks_useMutateTask__WEBPACK_IMPORTED_MODULE_1__.useMutateTask)().deleteTaskMutation;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"my-5 text-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"my-5 h-5 w-5\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"ml-20 flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.PencilIcon, {\n                        className: \"cursor-pointer mx-3 h-5 w-5\",\n                        onClick: function() {\n                            update({\n                                id: id,\n                                title: title\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.TrashIcon, {\n                        className: \"cursor-pointer mx-3 h-5 w-5\",\n                        onClick: function() {\n                            deleteTaskMutation.mutate(id);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(TaskItem, \"GQ+lDtk67LwlsJwRNz9zo49gznc=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useMutateTask__WEBPACK_IMPORTED_MODULE_1__.useMutateTask\n    ];\n});\n_c = TaskItem;\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBOEQ7QUFFUjtBQUN2Qjs7QUFHeEIsSUFBTUksUUFBUSxHQUE2QyxnQkFBZ0I7UUFBZEMsRUFBRSxTQUFGQSxFQUFFLEVBQUNDLEtBQUssU0FBTEEsS0FBSzs7SUFDMUUsSUFBTUMsTUFBTSxHQUFHSixrREFBUSxDQUFDLFNBQUNLLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxnQkFBZ0I7S0FBQSxDQUFDO0lBQzFELElBQU0sa0JBQW9CLEdBQUtQLG1FQUFhLEVBQUUsQ0FBdENRLGtCQUFrQjtJQUMxQixxQkFDRSw4REFBQ0MsSUFBRTtRQUFDQyxTQUFTLEVBQUMsY0FBYzs7MEJBQzFCLDhEQUFDQyxNQUFJO2dCQUFDRCxTQUFTLEVBQUMsY0FBYzswQkFBRU4sS0FBSzs7Ozs7cUJBQVE7MEJBQzdDLDhEQUFDUSxLQUFHO2dCQUFDRixTQUFTLEVBQUMsWUFBWTs7a0NBQ3pCLDhEQUFDWiw4REFBVTt3QkFDVFksU0FBUyxFQUFDLDZCQUE2Qjt3QkFDdkNHLE9BQU8sRUFBRSxXQUFNOzRCQUNiUixNQUFNLENBQUM7Z0NBQ0xGLEVBQUUsRUFBRUEsRUFBRTtnQ0FDTkMsS0FBSyxFQUFFQSxLQUFLOzZCQUNiLENBQUM7eUJBQ0g7Ozs7OzZCQUNEO2tDQUVGLDhEQUFDTCw2REFBUzt3QkFDUlcsU0FBUyxFQUFDLDZCQUE2Qjt3QkFDdkNHLE9BQU8sRUFBRSxXQUFNOzRCQUNiTCxrQkFBa0IsQ0FBQ00sTUFBTSxDQUFDWCxFQUFFLENBQUM7eUJBQzlCOzs7Ozs2QkFDRDs7Ozs7O3FCQUNFOzs7Ozs7YUFDSCxDQUNOO0NBQ0Y7R0ExQllELFFBQVE7O1FBQ0pELDhDQUFRO1FBQ1FELCtEQUFhOzs7QUFGakNFLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXNrSXRlbS50c3g/M2VmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZW5jaWxJY29uLCBUcmFzaEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU11dGF0ZVRhc2sgfSBmcm9tICcuLi9ob29rcy91c2VNdXRhdGVUYXNrJ1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgVGFza0l0ZW06IEZDPE9taXQ8VGFzaywgJ2NyZWF0ZWRfYXQnIHwgJ3VzZXJfaWQnPj4gPSAoe2lkLHRpdGxlfSkgPT4ge1xuICBjb25zdCB1cGRhdGUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnVwZGF0ZUVkaXRlZFRhc2spXG4gIGNvbnN0IHsgZGVsZXRlVGFza011dGF0aW9uIH0gPSB1c2VNdXRhdGVUYXNrKClcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWxnXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJteS01IGgtNSB3LTVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yMCBmbGV4XCI+XG4gICAgICAgIDxQZW5jaWxJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbXgtMyBoLTUgdy01XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8VHJhc2hJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbXgtMyBoLTUgdy01XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUYXNrTXV0YXRpb24ubXV0YXRlKGlkKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApXG59XG4iXSwibmFtZXMiOlsiUGVuY2lsSWNvbiIsIlRyYXNoSWNvbiIsInVzZU11dGF0ZVRhc2siLCJ1c2VTdG9yZSIsIlRhc2tJdGVtIiwiaWQiLCJ0aXRsZSIsInVwZGF0ZSIsInN0YXRlIiwidXBkYXRlRWRpdGVkVGFzayIsImRlbGV0ZVRhc2tNdXRhdGlvbiIsImxpIiwiY2xhc3NOYW1lIiwic3BhbiIsImRpdiIsIm9uQ2xpY2siLCJtdXRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TaskItem.tsx\n");

/***/ })

});