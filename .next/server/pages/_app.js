/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n    defaultOptions: {\n        queries: {\n            retry: false,\n            refetchOnWindowFocus: false\n        }\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    const { push , pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const RoutePath = async ()=>{\n        const user = _utils_supabase__WEBPACK_IMPORTED_MODULE_5__.supabase.auth.user();\n        if (user && pathname === \"/\") {\n            push(\"/home\");\n        } else if (!user && pathname !== \"/\") {\n            await push(\"/\");\n        }\n    };\n    _utils_supabase__WEBPACK_IMPORTED_MODULE_5__.supabase.auth.onAuthStateChange((event, _)=>{\n        if (event === \"SIGNED_IN\" && pathname === \"/\") {\n            push(\"/home\");\n        }\n        if (event === \"SIGNED_OUT\") {\n            push(\"/\");\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        RoutePath();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_3__.ReactQueryDevtools, {\n                initialIsOpen: false\n            }, void 0, false, {\n                fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koji/Desktop/next-js-challengetask/pages/_app.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRWdDO0FBQ0w7QUFDbEI7QUFDSztBQUNYO0FBRWpDLE1BQU1NLFdBQVcsR0FBRyxJQUFJTixvREFBVyxDQUFDO0lBQ2xDTyxjQUFjLEVBQUU7UUFDZEMsT0FBTyxFQUFFO1lBQ1BDLEtBQUssRUFBRSxLQUFLO1lBQ1pDLG9CQUFvQixFQUFFLEtBQUs7U0FDNUI7S0FDRjtDQUNGLENBQUM7QUFFRixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdaLHNEQUFTLEVBQUU7SUFDdEMsTUFBTWEsU0FBUyxHQUFHLFVBQVk7UUFDNUIsTUFBTUMsSUFBSSxHQUFHYiwrREFBa0IsRUFBRTtRQUNqQyxJQUFJYSxJQUFJLElBQUlGLFFBQVEsS0FBSyxHQUFHLEVBQUU7WUFDNUJELElBQUksQ0FBQyxPQUFPLENBQUM7U0FDZCxNQUFNLElBQUksQ0FBQ0csSUFBSSxJQUFJRixRQUFRLEtBQUssR0FBRyxFQUFFO1lBQ3BDLE1BQU1ELElBQUksQ0FBQyxHQUFHLENBQUM7U0FDaEI7S0FDRjtJQUNEViw0RUFBK0IsQ0FBQyxDQUFDZ0IsS0FBSyxFQUFFQyxDQUFDLEdBQUs7UUFDNUMsSUFBSUQsS0FBSyxLQUFLLFdBQVcsSUFBSUwsUUFBUSxLQUFLLEdBQUcsRUFBRTtZQUM3Q0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNkO1FBQ0QsSUFBSU0sS0FBSyxLQUFLLFlBQVksRUFBRTtZQUMxQk4sSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNWO0tBQ0YsQ0FBQztJQUNGVCxnREFBUyxDQUFDLElBQU07UUFDZFcsU0FBUyxFQUFFO0tBQ1osRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ2YsNERBQW1CO1FBQUNxQixNQUFNLEVBQUVoQixXQUFXOzswQkFDdEMsOERBQUNNLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7MEJBQzVCLDhEQUFDWCxvRUFBa0I7Z0JBQUNxQixhQUFhLEVBQUUsS0FBSzs7Ozs7b0JBQUk7Ozs7OztZQUN4QixDQUN2QjtDQUNGO0FBRUQsaUVBQWVaLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLWNoYWxsZW5nZXRhc2svLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL3V0aWxzL3N1cGFiYXNlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICByZXRyeTogZmFsc2UsXG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgeyBwdXNoLCBwYXRobmFtZSB9ID0gdXNlUm91dGVyKClcbiAgY29uc3QgUm91dGVQYXRoID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBzdXBhYmFzZS5hdXRoLnVzZXIoKVxuICAgIGlmICh1c2VyICYmIHBhdGhuYW1lID09PSAnLycpIHtcbiAgICAgIHB1c2goJy9ob21lJylcbiAgICB9IGVsc2UgaWYgKCF1c2VyICYmIHBhdGhuYW1lICE9PSAnLycpIHtcbiAgICAgIGF3YWl0IHB1c2goJy8nKVxuICAgIH1cbiAgfVxuICBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChldmVudCwgXykgPT4ge1xuICAgIGlmIChldmVudCA9PT0gJ1NJR05FRF9JTicgJiYgcGF0aG5hbWUgPT09ICcvJykge1xuICAgICAgcHVzaCgnL2hvbWUnKVxuICAgIH1cbiAgICBpZiAoZXZlbnQgPT09ICdTSUdORURfT1VUJykge1xuICAgICAgcHVzaCgnLycpXG4gICAgfVxuICB9KVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFJvdXRlUGF0aCgpXG4gIH0sIFtdKVxuICBcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJ1c2VFZmZlY3QiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJldHJ5IiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInB1c2giLCJwYXRobmFtZSIsIlJvdXRlUGF0aCIsInVzZXIiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJldmVudCIsIl8iLCJjbGllbnQiLCJpbml0aWFsSXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/supabase.ts":
/*!***************************!*\
  !*** ./utils/supabase.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://pvkulwyjvzknnjlxsvxc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2a3Vsd3lqdnprbm5qbHhzdnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEwMzIzMTIsImV4cCI6MTk2NjYwODMxMn0.2oMfir1OpEP7OQTuu6xesWi2PKXL7zUNo2k3EywBaeQ\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFN0MsTUFBTUMsUUFBUSxHQUFHRCxtRUFBWSxDQUNsQ0UsMENBQW9DLEVBQ3BDQSxrTkFBd0MsQ0FDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLWNoYWxsZW5nZXRhc2svLi91dGlscy9zdXBhYmFzZS50cz83ZGUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgYXMgc3RyaW5nLFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BUElfS0VZIGFzIHN0cmluZ1xuKVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/supabase.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();