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

/***/ "(app-client)/./app/components/handleGame.tsx":
/*!***************************************!*\
  !*** ./app/components/handleGame.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HandleSticks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _handleKeyDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleKeyDown */ \"(app-client)/./app/components/handleKeyDown.tsx\");\n/* harmony import */ var _handleBall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleBall */ \"(app-client)/./app/components/handleBall.tsx\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"(app-client)/./app/components/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HandleSticks() {\n    _s();\n    const { gameAreaRef, pauseGame, setPauseGame, restartGame, firstPlay, setFirstPlay } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_index__WEBPACK_IMPORTED_MODULE_4__.GameContext);\n    const leftStickRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const rightStickRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [leftStick, setLeftStick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0px\");\n    const [rightStick, setRightStick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0px\");\n    const [sticksRef, setSticksRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        leftStickRef,\n        rightStickRef\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (gameAreaRef.current) {\n            const height = \"\".concat(gameAreaRef.current.offsetHeight / 2 - leftStickRef.current.offsetHeight / 2, \"px\");\n            setLeftStick(height);\n            setRightStick(height);\n        }\n    }, []);\n    const handleKeyDown = (e)=>{\n        const leftStickMove = parseInt(leftStickRef.current.style.top, 10);\n        const rightStickMove = parseInt(rightStickRef.current.style.top, 10);\n        switch(e.keyCode){\n            case 87:\n                if (leftStickMove <= 0) break;\n                setLeftStick(\"\".concat(leftStickMove - 30, \"px\"));\n                break;\n            case 83:\n                if (leftStickMove >= gameAreaRef.current.offsetHeight - 30) break;\n                setLeftStick(\"\".concat(leftStickMove + 30, \"px\"));\n                break;\n            case 38:\n                if (rightStickMove <= 0) break;\n                setRightStick(\"\".concat(rightStickMove - 30, \"px\"));\n                break;\n            case 40:\n                if (rightStickMove >= gameAreaRef.current.offsetHeight - 30) break;\n                setRightStick(\"\".concat(rightStickMove + 30, \"px\"));\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: leftStickRef,\n                style: {\n                    top: leftStick\n                },\n                className: \"w-2 h-[50px] bg-black absolute z-[99] left-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\handleGame.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: rightStickRef,\n                style: {\n                    top: rightStick\n                },\n                className: \"w-1 h-[50px] bg-black absolute z-[99] right-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\handleGame.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_handleKeyDown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onKeyDown: handleKeyDown\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\handleGame.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_handleBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sticksRef: sticksRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\handleGame.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HandleSticks, \"WVmIT7/CdgxuyZeJzpURXbMPdqU=\");\n_c = HandleSticks;\nvar _c;\n$RefreshReg$(_c, \"HandleSticks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaGFuZGxlR2FtZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3NFO0FBQzFCO0FBQ047QUFDQTtBQUV2QixTQUFTUTs7SUFDcEIsTUFBTSxFQUFDQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFDLEdBQUdWLGlEQUFVQSxDQUFNRywrQ0FBV0E7SUFFaEgsTUFBTVEsZUFBZVosNkNBQU1BLENBQWlCO0lBQzVDLE1BQU1hLGdCQUFnQmIsNkNBQU1BLENBQWlCO0lBRTdDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQVM7SUFDbkQsTUFBTSxDQUFDa0IsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQVM7SUFDckQsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQVE7UUFBQ2M7UUFBYUM7S0FBYztJQUU5RWQsZ0RBQVNBLENBQUM7UUFDTixJQUFJTyxZQUFZYyxPQUFPLEVBQUU7WUFDckIsTUFBTUMsU0FBZ0IsR0FBZ0YsT0FBN0UsWUFBYUQsT0FBTyxDQUFDRSxZQUFZLEdBQUksSUFBSVYsYUFBYVEsT0FBTyxDQUFDRSxZQUFZLEdBQUMsR0FBRTtZQUN0R1AsYUFBYU07WUFDYkosY0FBY0k7UUFDbEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRSxnQkFBZ0IsQ0FBQ0M7UUFDbkIsTUFBTUMsZ0JBQXVCQyxTQUFTZCxhQUFhUSxPQUFPLENBQUNPLEtBQUssQ0FBQ0MsR0FBRyxFQUFFO1FBQ3RFLE1BQU1DLGlCQUF3QkgsU0FBU2IsY0FBY08sT0FBTyxDQUFDTyxLQUFLLENBQUNDLEdBQUcsRUFBRTtRQUV4RSxPQUFRSixFQUFFTSxPQUFPO1lBQ2pCLEtBQUs7Z0JBQ0QsSUFBSUwsaUJBQWlCLEdBQUc7Z0JBQ3hCVixhQUFhLEdBQXNCLE9BQW5CVSxnQkFBZ0IsSUFBRztnQkFDbkM7WUFDSixLQUFLO2dCQUNELElBQUlBLGlCQUFpQm5CLFlBQVljLE9BQU8sQ0FBQ0UsWUFBWSxHQUFHLElBQUk7Z0JBQzVEUCxhQUFhLEdBQXNCLE9BQW5CVSxnQkFBZ0IsSUFBRztnQkFDbkM7WUFDSixLQUFLO2dCQUNELElBQUlJLGtCQUFrQixHQUFHO2dCQUN6QlosY0FBYyxHQUF1QixPQUFwQlksaUJBQWlCLElBQUc7Z0JBQ3JDO1lBQ0osS0FBSztnQkFDRCxJQUFJQSxrQkFBa0J2QixZQUFZYyxPQUFPLENBQUNFLFlBQVksR0FBRyxJQUFJO2dCQUM3REwsY0FBYyxHQUF1QixPQUFwQlksaUJBQWlCLElBQUc7Z0JBQ3JDO1FBQ0o7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0U7Z0JBQ0dDLEtBQUtwQjtnQkFDTGUsT0FBTztvQkFBQ0MsS0FBS2Q7Z0JBQVM7Z0JBQ3RCbUIsV0FBVTs7Ozs7OzBCQUVkLDhEQUFDRjtnQkFDR0MsS0FBS25CO2dCQUNMYyxPQUFPO29CQUFDQyxLQUFLWjtnQkFBVTtnQkFDdkJpQixXQUFVOzs7Ozs7MEJBRWQsOERBQUMvQixzREFBYUE7Z0JBQUNnQyxXQUFXWDs7Ozs7OzBCQUMxQiw4REFBQ3BCLG1EQUFVQTtnQkFBQ2UsV0FBV0E7Ozs7Ozs7O0FBR25DO0dBMUR3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvaGFuZGxlR2FtZS50c3g/MzE0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIYW5kbGVLZXlEb3duIGZyb20gJy4vaGFuZGxlS2V5RG93bic7XHJcbmltcG9ydCBIYW5kbGVCYWxsIGZyb20gJy4vaGFuZGxlQmFsbCc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYW5kbGVTdGlja3MoKXtcclxuICAgIGNvbnN0IHtnYW1lQXJlYVJlZiwgcGF1c2VHYW1lLCBzZXRQYXVzZUdhbWUsIHJlc3RhcnRHYW1lLCBmaXJzdFBsYXksIHNldEZpcnN0UGxheX0gPSB1c2VDb250ZXh0PGFueT4oR2FtZUNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRTdGlja1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCByaWdodFN0aWNrUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBbbGVmdFN0aWNrLCBzZXRMZWZ0U3RpY2tdID0gdXNlU3RhdGU8c3RyaW5nPignMHB4Jyk7XHJcbiAgICBjb25zdCBbcmlnaHRTdGljaywgc2V0UmlnaHRTdGlja10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcwcHgnKTtcclxuICAgIGNvbnN0IFtzdGlja3NSZWYsIHNldFN0aWNrc1JlZl0gPSB1c2VTdGF0ZTxhcnJheT4oW2xlZnRTdGlja1JlZixyaWdodFN0aWNrUmVmXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZUFyZWFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gYCR7KGdhbWVBcmVhUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KSAvIDIgLSBsZWZ0U3RpY2tSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQvMn1weGA7XHJcbiAgICAgICAgICAgIHNldExlZnRTdGljayhoZWlnaHQpO1xyXG4gICAgICAgICAgICBzZXRSaWdodFN0aWNrKGhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnRTdGlja01vdmU6bnVtYmVyID0gcGFyc2VJbnQobGVmdFN0aWNrUmVmLmN1cnJlbnQuc3R5bGUudG9wLCAxMCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTdGlja01vdmU6bnVtYmVyID0gcGFyc2VJbnQocmlnaHRTdGlja1JlZi5jdXJyZW50LnN0eWxlLnRvcCwgMTApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSA4NzpcclxuICAgICAgICAgICAgaWYgKGxlZnRTdGlja01vdmUgPD0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHNldExlZnRTdGljayhgJHtsZWZ0U3RpY2tNb3ZlIC0gMzB9cHhgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA4MzpcclxuICAgICAgICAgICAgaWYgKGxlZnRTdGlja01vdmUgPj0gZ2FtZUFyZWFSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgLSAzMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHNldExlZnRTdGljayhgJHtsZWZ0U3RpY2tNb3ZlICsgMzB9cHhgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgaWYgKHJpZ2h0U3RpY2tNb3ZlIDw9IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBzZXRSaWdodFN0aWNrKGAke3JpZ2h0U3RpY2tNb3ZlIC0gMzB9cHhgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgaWYgKHJpZ2h0U3RpY2tNb3ZlID49IGdhbWVBcmVhUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gMzApIGJyZWFrO1xyXG4gICAgICAgICAgICBzZXRSaWdodFN0aWNrKGAke3JpZ2h0U3RpY2tNb3ZlICsgMzB9cHhgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIHJlZj17bGVmdFN0aWNrUmVmfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7dG9wOiBsZWZ0U3RpY2t9fSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0yIGgtWzUwcHhdIGJnLWJsYWNrIGFic29sdXRlIHotWzk5XSBsZWZ0LTMnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIHJlZj17cmlnaHRTdGlja1JlZn0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3RvcDogcmlnaHRTdGlja319IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xIGgtWzUwcHhdIGJnLWJsYWNrIGFic29sdXRlIHotWzk5XSByaWdodC0zXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SGFuZGxlS2V5RG93biBvbktleURvd249e2hhbmRsZUtleURvd259Lz5cclxuICAgICAgICAgICAgPEhhbmRsZUJhbGwgc3RpY2tzUmVmPXtzdGlja3NSZWZ9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiSGFuZGxlS2V5RG93biIsIkhhbmRsZUJhbGwiLCJHYW1lQ29udGV4dCIsIkhhbmRsZVN0aWNrcyIsImdhbWVBcmVhUmVmIiwicGF1c2VHYW1lIiwic2V0UGF1c2VHYW1lIiwicmVzdGFydEdhbWUiLCJmaXJzdFBsYXkiLCJzZXRGaXJzdFBsYXkiLCJsZWZ0U3RpY2tSZWYiLCJyaWdodFN0aWNrUmVmIiwibGVmdFN0aWNrIiwic2V0TGVmdFN0aWNrIiwicmlnaHRTdGljayIsInNldFJpZ2h0U3RpY2siLCJzdGlja3NSZWYiLCJzZXRTdGlja3NSZWYiLCJjdXJyZW50IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaGFuZGxlS2V5RG93biIsImUiLCJsZWZ0U3RpY2tNb3ZlIiwicGFyc2VJbnQiLCJzdHlsZSIsInRvcCIsInJpZ2h0U3RpY2tNb3ZlIiwia2V5Q29kZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsIm9uS2V5RG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/handleGame.tsx\n"));

/***/ })

});