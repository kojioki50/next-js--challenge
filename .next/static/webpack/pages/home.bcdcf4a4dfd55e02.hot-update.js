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

/***/ "./components/NoticeItem.tsx":
/*!***********************************!*\
  !*** ./components/NoticeItem.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NoticeItem\": function() { return /* binding */ NoticeItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useMutateNotices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMutateNotices */ \"./hooks/useMutateNotices.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store.ts\");\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.ts\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NoticeItem = function(param) {\n    var id = param.id, content = param.content, user_id = param.user_id;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userId = ref1[0], setUserId = ref1[1];\n    var update = (0,_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(state) {\n        return state.updateEditedNotice;\n    });\n    var deleteNoticeMutation = (0,_hooks_useMutateNotices__WEBPACK_IMPORTED_MODULE_2__.useMutateNotice)().deleteNoticeMutation;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ref;\n        setUserId((ref = _utils_supabase__WEBPACK_IMPORTED_MODULE_4__.supabase.auth.user()) === null || ref === void 0 ? void 0 : ref.id);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"my-5 text-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/NoticeItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            userId === user_id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.PencilIcon, {\n                        className: \"cursor-pointer mx-3 h-5 w-5\",\n                        onClick: function() {\n                            update({\n                                id: id,\n                                content: content\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/NoticeItem.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.TrashIcon, {\n                        className: \"cursor-pointer mx-3 h-5 w-5\",\n                        onClick: function() {\n                            deleteNoticeMutation.mutate(id);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/NoticeItem.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/components/NoticeItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/components/NoticeItem.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(NoticeItem, \"IgouKnTp2OFCg6IaOjUhorGUFKo=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_useMutateNotices__WEBPACK_IMPORTED_MODULE_2__.useMutateNotice\n    ];\n});\n_c = NoticeItem;\nvar _c;\n$RefreshReg$(_c, \"NoticeItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGljZUl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUErRDtBQUNmO0FBQ1k7QUFDNUI7QUFFYTs7QUFFdEMsSUFBTU8sVUFBVSxHQUFtQyxnQkFJcEQ7UUFISkMsRUFBRSxTQUFGQSxFQUFFLEVBQ0ZDLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxPQUFPLFNBQVBBLE9BQU87O0lBRVAsSUFBNEJQLElBQWdDLEdBQWhDQSwrQ0FBUSxDQUFxQixFQUFFLENBQUMsRUFaOUQsTUFZZSxHQUFlQSxJQUFnQyxHQUEvQyxFQVpmLFNBWTBCLEdBQUlBLElBQWdDLEdBQXBDO0lBQ3hCLElBQU1VLE1BQU0sR0FBR1Isa0RBQVEsQ0FBQyxTQUFDUyxLQUFLO2VBQUtBLEtBQUssQ0FBQ0Msa0JBQWtCO0tBQUEsQ0FBQztJQUM1RCxJQUFNLG9CQUFzQixHQUFLWCx3RUFBZSxFQUFFLENBQTFDWSxvQkFBb0I7SUFDNUJkLGdEQUFTLENBQUMsV0FBTTtZQUNKSSxHQUFvQjtRQUE5Qk0sU0FBUyxDQUFDTixDQUFBQSxHQUFvQixHQUFwQkEsK0RBQWtCLEVBQUUsY0FBcEJBLEdBQW9CLFdBQUksR0FBeEJBLEtBQUFBLENBQXdCLEdBQXhCQSxHQUFvQixDQUFFRSxFQUFFLENBQUM7S0FDcEMsRUFBRSxFQUFFLENBQUM7SUFDTixxQkFDRSw4REFBQ1csSUFBRTtRQUFDQyxTQUFTLEVBQUMsY0FBYzs7MEJBQzFCLDhEQUFDQyxNQUFJOzBCQUFFWixPQUFPOzs7OztxQkFBUTtZQUNyQkUsTUFBTSxLQUFLRCxPQUFPLGtCQUNqQiw4REFBQ1ksS0FBRztnQkFBQ0YsU0FBUyxFQUFDLG1DQUFtQzs7a0NBQ2hELDhEQUFDcEIsOERBQVU7d0JBQ1RvQixTQUFTLEVBQUMsNkJBQThCO3dCQUN4Q0csT0FBTyxFQUFFLFdBQU07NEJBQ2JWLE1BQU0sQ0FBQztnQ0FDTEwsRUFBRSxFQUFFQSxFQUFFO2dDQUNOQyxPQUFPLEVBQUVBLE9BQU87NkJBQ2pCLENBQUM7eUJBQ0g7Ozs7OzZCQUNEO2tDQUVGLDhEQUFDUiw2REFBUzt3QkFDUm1CLFNBQVMsRUFBQyw2QkFBNkI7d0JBQ3ZDRyxPQUFPLEVBQUUsV0FBTTs0QkFDYlAsb0JBQW9CLENBQUNRLE1BQU0sQ0FBQ2hCLEVBQUUsQ0FBQzt5QkFDaEM7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0U7Ozs7OzthQUVMLENBQ047Q0FFRjtHQXJDWUQsVUFBVTs7UUFNTkYsOENBQVE7UUFDVUQsb0VBQWU7OztBQVByQ0csS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05vdGljZUl0ZW0udHN4P2JlNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVuY2lsSWNvbiwgVHJhc2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGVOb3RpY2UgfSBmcm9tIFwiLi4vaG9va3MvdXNlTXV0YXRlTm90aWNlc1wiO1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgTm90aWNlIH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi91dGlscy9zdXBhYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgTm90aWNlSXRlbTogRkM8T21pdDxOb3RpY2UsICdjcmVhdGVkX2F0Jz4+ID0gKHtcbiAgaWQsXG4gIGNvbnRlbnQsXG4gIHVzZXJfaWRcbn0pID0+IHtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oJycpXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUudXBkYXRlRWRpdGVkTm90aWNlKVxuICBjb25zdCB7IGRlbGV0ZU5vdGljZU11dGF0aW9uIH0gPSB1c2VNdXRhdGVOb3RpY2UoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXJJZChzdXBhYmFzZS5hdXRoLnVzZXIoKT8uaWQpXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJteS01IHRleHQtbGdcIj5cbiAgICAgIDxzcGFuPntjb250ZW50fTwvc3Bhbj5cbiAgICAgIHt1c2VySWQgPT09IHVzZXJfaWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgIDxQZW5jaWxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgbXgtMyBoLTUgdy01XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlKHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxUcmFzaEljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG14LTMgaC01IHctNVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRlbGV0ZU5vdGljZU11dGF0aW9uLm11dGF0ZShpZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbGk+XG4gIClcblxufSJdLCJuYW1lcyI6WyJQZW5jaWxJY29uIiwiVHJhc2hJY29uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNdXRhdGVOb3RpY2UiLCJ1c2VTdG9yZSIsInN1cGFiYXNlIiwiTm90aWNlSXRlbSIsImlkIiwiY29udGVudCIsInVzZXJfaWQiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ1cGRhdGUiLCJzdGF0ZSIsInVwZGF0ZUVkaXRlZE5vdGljZSIsImRlbGV0ZU5vdGljZU11dGF0aW9uIiwiYXV0aCIsInVzZXIiLCJsaSIsImNsYXNzTmFtZSIsInNwYW4iLCJkaXYiLCJvbkNsaWNrIiwibXV0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NoticeItem.tsx\n");

/***/ })

});