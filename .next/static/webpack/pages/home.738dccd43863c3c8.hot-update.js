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

/***/ "./components/TaskLists.tsx":
/*!**********************************!*\
  !*** ./components/TaskLists.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskLists\": function() { return /* binding */ TaskLists; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_getQueryTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/getQueryTasks */ \"./hooks/getQueryTasks.ts\");\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner */ \"./components/Spinner.tsx\");\nvar _this = undefined;\n\n\n\nvar TaskLists = function() {\n    var _this1 = _this;\n    var ref = (0,_hooks_getQueryTasks__WEBPACK_IMPORTED_MODULE_1__.GetQueryTasks)(), tasks = ref.data, status = ref.status;\n    if (status === \"loading\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}, void 0, false, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskLists.tsx\",\n        lineNumber: 9,\n        columnNumber: 36\n    }, _this);\n    if (status === \"error\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Error\"\n    }, void 0, false, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskLists.tsx\",\n        lineNumber: 10,\n        columnNumber: 34\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"my-5\",\n        children: tasks === null || tasks === void 0 ? void 0 : tasks.map(function(task) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskIcons, {\n                id: task.id,\n                title: task.title\n            }, task.id, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskLists.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/TaskLists.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = TaskLists;\nvar _c;\n$RefreshReg$(_c, \"TaskLists\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tMaXN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFc0Q7QUFDbkI7QUFHNUIsSUFBTUUsU0FBUyxHQUFPLFdBQU07O0lBQ2pDLElBQWdDRixHQUFlLEdBQWZBLG1FQUFhLEVBQUUsRUFBdkNHLEtBQVcsR0FBYUgsR0FBZSxDQUF2Q0csSUFBSSxFQUFTRSxNQUFNLEdBQUtMLEdBQWUsQ0FBMUJLLE1BQU07SUFDM0IsSUFBSUEsTUFBTSxLQUFLLFNBQVMsRUFBRSxxQkFBTyw4REFBQ0osNkNBQU87Ozs7YUFBRztJQUM1QyxJQUFJSSxNQUFNLEtBQUssT0FBTyxFQUFFLHFCQUFPLDhEQUFDQyxHQUFDO2tCQUFFLE9BQU87Ozs7O2FBQUs7SUFDL0MscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLE1BQU07a0JBQ2pCSixLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRUssR0FBRyxDQUFDLFNBQUNDLElBQUk7aUNBQ2YsOERBQUNDLFNBQVM7Z0JBQWVDLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQUFFO2dCQUFFQyxLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FBSztlQUF2Q0gsSUFBSSxDQUFDRSxFQUFFOzs7O3NCQUFvQztTQUM1RCxDQUFDOzs7OzthQUNDLENBQ047Q0FDRjtBQVhZVixLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFza0xpc3RzLnRzeD80NDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgR2V0UXVlcnlUYXNrcyB9IGZyb20gJy4uL2hvb2tzL2dldFF1ZXJ5VGFza3MnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyJ1xuaW1wb3J0IHsgVGFza0l0ZW0gfSBmcm9tICcuL1Rhc2tJdGVtJ1xuXG5leHBvcnQgY29uc3QgVGFza0xpc3RzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiB0YXNrcywgc3RhdHVzIH0gPSBHZXRRdWVyeVRhc2tzKClcbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm4gPFNwaW5uZXIgLz5cbiAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykgcmV0dXJuIDxwPnsnRXJyb3InfTwvcD5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibXktNVwiPlxuICAgICAge3Rhc2tzPy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgPFRhc2tJY29ucyBrZXk9e3Rhc2suaWR9IGlkPXt0YXNrLmlkfSB0aXRsZT17dGFzay50aXRsZX0gLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHZXRRdWVyeVRhc2tzIiwiU3Bpbm5lciIsIlRhc2tMaXN0cyIsImRhdGEiLCJ0YXNrcyIsInN0YXR1cyIsInAiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsInRhc2siLCJUYXNrSWNvbnMiLCJpZCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TaskLists.tsx\n");

/***/ })

});