"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nconst MsgItem = (param)=>/*#__PURE__*/ {\n    let { id , timestamp , text , onUpdate , onDelete , isEditing , startEdit , myId , user  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages_item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    user.nickname,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString(\"ko-KR\", {\n                            year: \"numeric\",\n                            month: \"numeric\",\n                            day: \"numeric\",\n                            hour: \"2-digit\",\n                            minute: \"2-digit\",\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false) : text,\n            myId === userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages_buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQWtDO0FBRWxDLE1BQU1DLFVBQVUsdUJBV1o7UUFYYSxFQUNiQyxHQUFFLEVBQ0ZDLFVBQVMsRUFDVEMsS0FBSSxFQUNKQyxTQUFRLEVBQ1JDLFNBQVEsRUFDUkMsVUFBUyxFQUNUQyxVQUFTLEVBQ1RDLEtBQUksRUFDSkMsS0FBSSxFQUNQO1dBQ0csOERBQUNDO1FBQUdDLFdBQVU7OzBCQUNWLDhEQUFDQzs7b0JBQ0lILEtBQUtJLFFBQVE7b0JBQUU7a0NBQ2hCLDhEQUFDQztrQ0FDSSxJQUFJQyxLQUFLYixXQUFXYyxjQUFjLENBQUMsU0FBUzs0QkFDekNDLE1BQU07NEJBQ05DLE9BQU87NEJBQ1BDLEtBQUs7NEJBQ0xDLE1BQU07NEJBQ05DLFFBQVE7NEJBQ1JDLFFBQVEsSUFBSTt3QkFDaEI7Ozs7Ozs7Ozs7OztZQUlQaEIsMEJBQ0c7MEJBQ0ksNEVBQUNQLGlEQUFRQTtvQkFBQ3dCLFFBQVFuQjtvQkFBVUQsTUFBTUE7b0JBQU1GLElBQUlBOzs7Ozs7Z0NBR2hERSxJQUFLO1lBRVJLLFNBQVNnQix3QkFDTiw4REFBQ0M7Z0JBQUlkLFdBQVU7O2tDQUNYLDhEQUFDZTt3QkFBT0MsU0FBU3BCO2tDQUFXOzs7Ozs7a0NBQzVCLDhEQUFDbUI7d0JBQU9DLFNBQVN0QjtrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR25DO0tBdkNGTDtBQTJDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0l0ZW0uanM/YzMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5cbmNvbnN0IE1zZ0l0ZW0gPSAoe1xuICAgIGlkLFxuICAgIHRpbWVzdGFtcCxcbiAgICB0ZXh0LFxuICAgIG9uVXBkYXRlLFxuICAgIG9uRGVsZXRlLFxuICAgIGlzRWRpdGluZyxcbiAgICBzdGFydEVkaXQsXG4gICAgbXlJZCxcbiAgICB1c2VyXG59KSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX2l0ZW1cIj5cbiAgICAgICAgPGgzPlxuICAgICAgICAgICAge3VzZXIubmlja25hbWV9eycgJ31cbiAgICAgICAgICAgIDxzdWI+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICBob3VyMTI6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3ViPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSB0ZXh0PXt0ZXh0fSBpZD17aWR9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRleHQpfVxuXG4gICAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX2J1dHRvbnMnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvbGk+XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJpZCIsInRpbWVzdGFtcCIsInRleHQiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0IiwibXlJZCIsInVzZXIiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwibmlja25hbWUiLCJzdWIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwibXV0YXRlIiwidXNlcklkIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n"));

/***/ })

});