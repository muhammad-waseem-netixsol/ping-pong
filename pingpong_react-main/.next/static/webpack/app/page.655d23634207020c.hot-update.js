"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index */ \"(app-client)/./app/components/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    var _playerNames, _playerNames1;\n    _s();\n    const [playerNames, setNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getName = (name)=>{\n        setNames({\n            fname: name.fname,\n            sname: name.sname\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-around items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"kkkk\",\n                            (_playerNames = playerNames) === null || _playerNames === void 0 ? void 0 : _playerNames.fname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 57\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: (_playerNames1 = playerNames) === null || _playerNames1 === void 0 ? void 0 : _playerNames1.sname\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 94\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\page.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                getNameHandler: getName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MkH4Lo3PiJx+rIadqS9jLPZ/LMg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDYTtBQUsvQixTQUFTRTtRQU8yQ0MsY0FBaUNBOztJQU5sRyxNQUFNLENBQUNBLGFBQWFDLFNBQVMsR0FBR0osK0NBQVFBO0lBQ3hDLE1BQU1LLFVBQVUsQ0FBQ0M7UUFDZkYsU0FBUztZQUFDRyxPQUFNRCxLQUFLQyxLQUFLO1lBQUNDLE9BQU1GLEtBQUtFLEtBQUs7UUFBQTtJQUM3QztJQUNBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUFtQyw4REFBQ0U7OzRCQUFLOzZCQUFLVCxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFJLEtBQUs7Ozs7Ozs7a0NBQVEsOERBQUNLO21DQUFNVCxnQkFBQUEseUJBQUFBLG9DQUFBQSxjQUFhSyxLQUFLOzs7Ozs7Ozs7Ozs7MEJBQ2hILDhEQUFDUCx5REFBWUE7Z0JBQUNZLGdCQUFnQlI7Ozs7Ozs7Ozs7OztBQUdwQztHQVh3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGluZ1BvbmdHYW1lIGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmludGVyZmFjZSBuYW1lcyB7XHJcbiAgZm5hbWU6IHN0cmluZyxcclxuICBzbmFtZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcGxheWVyTmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlPG5hbWVzPigpXHJcbiAgY29uc3QgZ2V0TmFtZSA9IChuYW1lOmFueSkgPT4ge1xyXG4gICAgc2V0TmFtZXMoe2ZuYW1lOm5hbWUuZm5hbWUsc25hbWU6bmFtZS5zbmFtZX0pXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlcic+PHNwYW4+a2tra3twbGF5ZXJOYW1lcz8uZm5hbWV9PC9zcGFuPjxzcGFuPntwbGF5ZXJOYW1lcz8uc25hbWV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICA8UGluZ1BvbmdHYW1lIGdldE5hbWVIYW5kbGVyPXtnZXROYW1lfS8+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBpbmdQb25nR2FtZSIsIkhvbWUiLCJwbGF5ZXJOYW1lcyIsInNldE5hbWVzIiwiZ2V0TmFtZSIsIm5hbWUiLCJmbmFtZSIsInNuYW1lIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJnZXROYW1lSGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});