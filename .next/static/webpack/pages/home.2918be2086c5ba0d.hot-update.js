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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskItem\": function() { return /* binding */ TaskItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _hooks_useMutateTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useMutateTask */ \"./hooks/useMutateTask.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TaskItem = function(param) {\n    var id = param.id, title = param.title;\n    _s();\n    var update = (0,_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(state) {\n        return state.updateEditedTask;\n    });\n    var deleteTaskMutation = (0,_hooks_useMutateTask__WEBPACK_IMPORTED_MODULE_1__.useMutateTask)().deleteTaskMutation;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"my-5 text-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.PencilIcon, {\n                        className: \"cursor-pointer mx-3 h-5 w-5\",\n                        onClick: function() {\n                            update({\n                                id: id,\n                                title: title\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.TrashIcon, {\n                        className: \"cursor-pointer mx-3 h-5 w-5\",\n                        onClick: function() {\n                            deleteTaskMutation.mutate(id);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskItem.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(TaskItem, \"GQ+lDtk67LwlsJwRNz9zo49gznc=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useMutateTask__WEBPACK_IMPORTED_MODULE_1__.useMutateTask\n    ];\n});\n_c = TaskItem;\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBOEQ7QUFFUjtBQUN2Qjs7QUFHeEIsSUFBTUksUUFBUSxHQUE2QyxnQkFBZ0I7UUFBZEMsRUFBRSxTQUFGQSxFQUFFLEVBQUNDLEtBQUssU0FBTEEsS0FBSzs7SUFDMUUsSUFBTUMsTUFBTSxHQUFHSixrREFBUSxDQUFDLFNBQUNLLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxnQkFBZ0I7S0FBQSxDQUFDO0lBQzFELElBQU0sa0JBQW9CLEdBQUtQLG1FQUFhLEVBQUUsQ0FBdENRLGtCQUFrQjtJQUMxQixxQkFDRSw4REFBQ0MsSUFBRTtRQUFDQyxTQUFTLEVBQUMsY0FBYzs7MEJBQzFCLDhEQUFDQyxNQUFJO2dCQUFDRCxTQUFTLEVBQUMsRUFBRTswQkFBRU4sS0FBSzs7Ozs7cUJBQVE7MEJBQ2pDLDhEQUFDUSxLQUFHO2dCQUFDRixTQUFTLEVBQUMsbUNBQW1DOztrQ0FDaEQsOERBQUNaLDhEQUFVO3dCQUNUWSxTQUFTLEVBQUMsNkJBQTZCO3dCQUN2Q0csT0FBTyxFQUFFLFdBQU07NEJBQ2JSLE1BQU0sQ0FBQztnQ0FDTEYsRUFBRSxFQUFFQSxFQUFFO2dDQUNOQyxLQUFLLEVBQUVBLEtBQUs7NkJBQ2IsQ0FBQzt5QkFDSDs7Ozs7NkJBQ0Q7a0NBRUYsOERBQUNMLDZEQUFTO3dCQUNSVyxTQUFTLEVBQUMsNkJBQTZCO3dCQUN2Q0csT0FBTyxFQUFFLFdBQU07NEJBQ2JMLGtCQUFrQixDQUFDTSxNQUFNLENBQUNYLEVBQUUsQ0FBQzt5QkFDOUI7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0U7Ozs7OzthQUNILENBQ047Q0FDRjtHQTFCWUQsUUFBUTs7UUFDSkQsOENBQVE7UUFDUUQsK0RBQWE7OztBQUZqQ0UsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rhc2tJdGVtLnRzeD8zZWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlbmNpbEljb24sIFRyYXNoSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTXV0YXRlVGFzayB9IGZyb20gJy4uL2hvb2tzL3VzZU11dGF0ZVRhc2snXG5pbXBvcnQgdXNlU3RvcmUgZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBUYXNrSXRlbTogRkM8T21pdDxUYXNrLCAnY3JlYXRlZF9hdCcgfCAndXNlcl9pZCc+PiA9ICh7aWQsdGl0bGV9KSA9PiB7XG4gIGNvbnN0IHVwZGF0ZSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUudXBkYXRlRWRpdGVkVGFzaylcbiAgY29uc3QgeyBkZWxldGVUYXNrTXV0YXRpb24gfSA9IHVzZU11dGF0ZVRhc2soKVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJteS01IHRleHQtbGdcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nJz57dGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgPFBlbmNpbEljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBteC0zIGgtNSB3LTVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZSh7XG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxUcmFzaEljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBteC0zIGgtNSB3LTVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tNdXRhdGlvbi5tdXRhdGUoaWQpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJQZW5jaWxJY29uIiwiVHJhc2hJY29uIiwidXNlTXV0YXRlVGFzayIsInVzZVN0b3JlIiwiVGFza0l0ZW0iLCJpZCIsInRpdGxlIiwidXBkYXRlIiwic3RhdGUiLCJ1cGRhdGVFZGl0ZWRUYXNrIiwiZGVsZXRlVGFza011dGF0aW9uIiwibGkiLCJjbGFzc05hbWUiLCJzcGFuIiwiZGl2Iiwib25DbGljayIsIm11dGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TaskItem.tsx\n");

/***/ })

});