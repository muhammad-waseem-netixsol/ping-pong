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

/***/ "(app-client)/./app/components/index.tsx":
/*!**********************************!*\
  !*** ./app/components/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameContext: function() { return /* binding */ GameContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"(app-client)/./app/components/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _handleGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleGame */ \"(app-client)/./app/components/handleGame.tsx\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"(app-client)/./app/components/button.tsx\");\n/* harmony import */ var _mui_icons_material_SentimentDissatisfied__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/SentimentDissatisfied */ \"(app-client)/./node_modules/@mui/icons-material/SentimentDissatisfied.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst PinPonGame = ()=>{\n    _s();\n    const gameAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [fuser, SetFUser] = react__WEBPACK_IMPORTED_MODULE_1__.useState < string || undefined > \"\";\n    const [suser, SetSUser] = react__WEBPACK_IMPORTED_MODULE_1__.useState < string || undefined > \"\";\n    const [pauseGame, setPauseGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [restartGame, setRestartGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [firstPlay, setFirstPlay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    // useEffect(() => {\n    //     socket.on(\"testtwo\", (msg:string)=> {\n    //         alert(msg)\n    //     });\n    // }, []);\n    //    useEffect(()=> {\n    //     console.log(socket)\n    //     socket.on(\"gameState\",(payload:any)=> {\n    //         console.log(payload)\n    //     })\n    //    }, []);\n    //    const position = {x:10,y:10}\n    //     const onPlayGame =  () => {\n    //         socket.emit(\"startGame\",position);\n    //         console.log(\"emitting\")\n    //     };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block sm:hidden font-extrabold text-[#3f9150] text-sm\",\n                children: [\n                    \"*The screen width must be more than 600px to play \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_SentimentDissatisfied__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"text-[#3f9150] !block !text-9xl !w-auto pl-1/2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 134\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden mt-20 my-30 w-full hidden sm:block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: gameAreaRef,\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().area),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n                            value: {\n                                gameAreaRef,\n                                pauseGame,\n                                setPauseGame,\n                                restartGame,\n                                firstPlay,\n                                setFirstPlay\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().line)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_handleGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-around mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                values: {\n                                    class: \"\",\n                                    content: \"Pause\"\n                                },\n                                onClick: ()=>setPauseGame(true)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                values: {\n                                    class: \"\",\n                                    content: \"Play\"\n                                },\n                                onClick: ()=>{\n                                    if (fuser === \"\") {\n                                        const name1 = prompt(\"Enter First User...\");\n                                        SetFUser(name1);\n                                    }\n                                    if (suser === \"\") {\n                                        const name2 = prompt(\"Enter second name\");\n                                        SetSUser(name2);\n                                    }\n                                    setPauseGame(false);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                values: {\n                                    class: \"\",\n                                    content: \"Restart\"\n                                },\n                                onClick: ()=>setRestartGame((prevRestart)=>!prevRestart)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-xs mt-4\",\n                        children: \"* W,S on keybord to LeftPlayer, arrow directions on the keyboard to RightPlayer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SMART TECH\\\\Documents\\\\GitHub\\\\ping-pong\\\\pingpong_react-main\\\\app\\\\components\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PinPonGame, \"djrd3aKTDwSK2I2nvLH502nzQyg=\");\n_c = PinPonGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PinPonGame);\nvar _c;\n$RefreshReg$(_c, \"PinPonGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2lDO0FBQ3BDO0FBQ0o7QUFDZ0Q7QUFHM0UsTUFBTVEsNEJBQWNKLG9EQUFhQSxHQUFHO0FBRTNDLE1BQU1LLGFBQWE7O0lBQ2YsTUFBTUMsY0FBY1AsNkNBQU1BLENBQWlCO0lBQzNDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFJViwyQ0FBUUEsR0FBQ1csVUFBVUMsWUFBVztJQUN6RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBSWQsMkNBQVFBLEdBQUNXLFVBQVVDLFlBQVc7SUFDekQsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBVTtJQUNwRCxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBVTtJQUN4RCxNQUFNLENBQUNtQixXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBWVk7SUFDdEQsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1QyxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFVBQVU7SUFDZCxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDhDQUE4QztJQUM5QywrQkFBK0I7SUFDL0IsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLDZDQUE2QztJQUM3QyxrQ0FBa0M7SUFDbEMsU0FBUztJQUVMLHFCQUNJOzswQkFDSSw4REFBQ1M7Z0JBQUlDLFdBQVU7O29CQUF3RDtrQ0FBa0QsOERBQUNqQixpRkFBeUJBO3dCQUFDaUIsV0FBVTs7Ozs7O29CQUFtRDs7Ozs7OzswQkFDak4sOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlFLEtBQUtmO3dCQUFhYyxXQUFXeEIsZ0VBQVc7a0NBQ3pDLDRFQUFDUSxZQUFZbUIsUUFBUTs0QkFBQ0MsT0FBTztnQ0FBQ2xCO2dDQUFhTztnQ0FBV0M7Z0NBQWNDO2dDQUFhRTtnQ0FBV0M7NEJBQVk7OzhDQUNwRyw4REFBQ0M7b0NBQUlDLFdBQVd4QixnRUFBVzs7Ozs7OzhDQUMvQiw4REFBQ0ssbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDa0I7d0JBQ0dDLFdBQVU7OzBDQUNWLDhEQUFDbEIsK0NBQVVBO2dDQUNQd0IsUUFBUTtvQ0FBQ0MsT0FBTTtvQ0FBSUMsU0FBUTtnQ0FBTztnQ0FDbENDLFNBQVMsSUFBTWYsYUFBYTs7Ozs7OzBDQUNoQyw4REFBQ1osK0NBQVVBO2dDQUNQd0IsUUFBUTtvQ0FBQ0MsT0FBTTtvQ0FBSUMsU0FBUTtnQ0FBTTtnQ0FDakNDLFNBQVM7b0NBQ1QsSUFBR3RCLFVBQVUsSUFBRzt3Q0FDWixNQUFNdUIsUUFBUUMsT0FBTzt3Q0FDckJ2QixTQUFTc0I7b0NBQ2I7b0NBQ0EsSUFBR25CLFVBQVUsSUFBRzt3Q0FDWixNQUFNcUIsUUFBUUQsT0FBTzt3Q0FDckJuQixTQUFTb0I7b0NBQ2I7b0NBQ0FsQixhQUFhO2dDQUNiOzs7Ozs7MENBQ0osOERBQUNaLCtDQUFVQTtnQ0FDUHdCLFFBQVE7b0NBQUNDLE9BQU07b0NBQUlDLFNBQVE7Z0NBQVM7Z0NBQ3BDQyxTQUFTLElBQU1iLGVBQWVpQixDQUFBQSxjQUFlLENBQUNBOzs7Ozs7Ozs7Ozs7a0NBRXRELDhEQUFDQzt3QkFDR2QsV0FBVTtrQ0FBeUI7Ozs7Ozs7Ozs7Ozs7O0FBTXZEO0dBaEVNZjtLQUFBQTtBQWtFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9pbmRleC50c3g/MjBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGFuZGxlR2FtZSBmcm9tICcuL2hhbmRsZUdhbWUnO1xyXG5pbXBvcnQgQnV0dG9uR2FtZSBmcm9tICcuL2J1dHRvbic7XHJcbmltcG9ydCBTZW50aW1lbnREaXNzYXRpc2ZpZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VudGltZW50RGlzc2F0aXNmaWVkJztcclxuaW1wb3J0IHNvY2tldCBmcm9tICdAL3NvY2tldC1jb25uZWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFBpblBvbkdhbWUgPSAoKTpKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBnYW1lQXJlYVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgICBjb25zdCBbZnVzZXIsIFNldEZVc2VyXSAgPSB1c2VTdGF0ZTxzdHJpbmcgfHwgdW5kZWZpbmVkPihcIlwiKTtcclxuICAgIGNvbnN0IFtzdXNlciwgU2V0U1VzZXJdICA9IHVzZVN0YXRlPHN0cmluZyB8fCB1bmRlZmluZWQ+KFwiXCIpO1xyXG4gICAgY29uc3QgW3BhdXNlR2FtZSwgc2V0UGF1c2VHYW1lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW3Jlc3RhcnRHYW1lLCBzZXRSZXN0YXJ0R2FtZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbZmlyc3RQbGF5LCBzZXRGaXJzdFBsYXldID0gdXNlU3RhdGU8dW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBzb2NrZXQub24oXCJ0ZXN0dHdvXCIsIChtc2c6c3RyaW5nKT0+IHtcclxuICAgIC8vICAgICAgICAgYWxlcnQobXNnKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSwgW10pO1xyXG4vLyAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhzb2NrZXQpXHJcbi8vICAgICBzb2NrZXQub24oXCJnYW1lU3RhdGVcIiwocGF5bG9hZDphbnkpPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXHJcbi8vICAgICB9KVxyXG4vLyAgICB9LCBbXSk7XHJcbi8vICAgIGNvbnN0IHBvc2l0aW9uID0ge3g6MTAseToxMH1cclxuLy8gICAgIGNvbnN0IG9uUGxheUdhbWUgPSAgKCkgPT4ge1xyXG4vLyAgICAgICAgIHNvY2tldC5lbWl0KFwic3RhcnRHYW1lXCIscG9zaXRpb24pO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZW1pdHRpbmdcIilcclxuLy8gICAgIH07XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgc206aGlkZGVuIGZvbnQtZXh0cmFib2xkIHRleHQtWyMzZjkxNTBdIHRleHQtc21cIj4qVGhlIHNjcmVlbiB3aWR0aCBtdXN0IGJlIG1vcmUgdGhhbiA2MDBweCB0byBwbGF5IDxTZW50aW1lbnREaXNzYXRpc2ZpZWRJY29uIGNsYXNzTmFtZT1cInRleHQtWyMzZjkxNTBdICFibG9jayAhdGV4dC05eGwgIXctYXV0byBwbC0xLzJcIiAvPiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gbXQtMjAgbXktMzAgdy1mdWxsIGhpZGRlbiBzbTpibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2dhbWVBcmVhUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5hcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICA8R2FtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tnYW1lQXJlYVJlZiwgcGF1c2VHYW1lLCBzZXRQYXVzZUdhbWUsIHJlc3RhcnRHYW1lLCBmaXJzdFBsYXksIHNldEZpcnN0UGxheX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIYW5kbGVHYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HYW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17b25QbGF5R2FtZX0+cGxheSB0aGUgZ2FtZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR2FtZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7Y2xhc3M6JycsIGNvbnRlbnQ6J1BhdXNlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhdXNlR2FtZSh0cnVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR2FtZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7Y2xhc3M6JycsIGNvbnRlbnQ6J1BsYXknfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmdXNlciA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lMSA9IHByb21wdChcIkVudGVyIEZpcnN0IFVzZXIuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRGVXNlcihuYW1lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3VzZXIgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZTIgPSBwcm9tcHQoXCJFbnRlciBzZWNvbmQgbmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldFNVc2VyKG5hbWUyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGF1c2VHYW1lKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25HYW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tjbGFzczonJywgY29udGVudDonUmVzdGFydCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSZXN0YXJ0R2FtZShwcmV2UmVzdGFydCA9PiAhcHJldlJlc3RhcnQpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteHMgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICogVyxTIG9uIGtleWJvcmQgdG8gTGVmdFBsYXllciwgYXJyb3cgZGlyZWN0aW9ucyBvbiB0aGUga2V5Ym9hcmQgdG8gUmlnaHRQbGF5ZXJcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpblBvbkdhbWUiXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImNyZWF0ZUNvbnRleHQiLCJIYW5kbGVHYW1lIiwiQnV0dG9uR2FtZSIsIlNlbnRpbWVudERpc3NhdGlzZmllZEljb24iLCJHYW1lQ29udGV4dCIsIlBpblBvbkdhbWUiLCJnYW1lQXJlYVJlZiIsImZ1c2VyIiwiU2V0RlVzZXIiLCJzdHJpbmciLCJ1bmRlZmluZWQiLCJzdXNlciIsIlNldFNVc2VyIiwicGF1c2VHYW1lIiwic2V0UGF1c2VHYW1lIiwicmVzdGFydEdhbWUiLCJzZXRSZXN0YXJ0R2FtZSIsImZpcnN0UGxheSIsInNldEZpcnN0UGxheSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImFyZWEiLCJQcm92aWRlciIsInZhbHVlIiwibGluZSIsInZhbHVlcyIsImNsYXNzIiwiY29udGVudCIsIm9uQ2xpY2siLCJuYW1lMSIsInByb21wdCIsIm5hbWUyIiwicHJldlJlc3RhcnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/index.tsx\n"));

/***/ })

});