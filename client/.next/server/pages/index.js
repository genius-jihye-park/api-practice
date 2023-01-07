"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MsgInput = ({ mutate , text =\"\" , id =undefined  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const text = textRef.current.value;\n        textRef.current.value = \"\";\n        mutate(text, id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                defaultValue: text,\n                placeholder: \"내용을 입력하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgInput.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgInput.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgInput.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFOUIsTUFBTUMsV0FBVyxDQUFDLEVBQUVDLE9BQU0sRUFBRUMsTUFBTyxHQUFFLEVBQUVDLElBQUtDLFVBQVMsRUFBRSxHQUFLO0lBQ3hELE1BQU1DLFVBQVVOLDZDQUFNQSxDQUFDLElBQUk7SUFFM0IsTUFBTU8sV0FBV0MsQ0FBQUEsSUFBSztRQUNsQkEsRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUNqQixNQUFNUCxPQUFPRyxRQUFRSyxPQUFPLENBQUNDLEtBQUs7UUFDbENOLFFBQVFLLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1FBQ3hCVixPQUFPQyxNQUFNQztJQUNqQjtJQUVBLHFCQUNJLDhEQUFDUztRQUFLQyxXQUFVO1FBQWtCUCxVQUFVQTs7MEJBQ3hDLDhEQUFDUTtnQkFBU0MsS0FBS1Y7Z0JBQVNXLGNBQWNkO2dCQUFNZSxhQUFZOzs7Ozs7MEJBQ3hELDhEQUFDQztnQkFBT0MsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBR2xDO0FBRUEsaUVBQWVuQixRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcz9jYzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9ICcnLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZVxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xuICAgICAgICBtdXRhdGUodGV4dCwgaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MsgItem = ({ userId , timestamp , text  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages_item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString(\"ko-KR\", {\n                            year: \"numeric\",\n                            month: \"numeric\",\n                            day: \"numeric\",\n                            hour: \"2-digit\",\n                            minute: \"2-digit\",\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            text\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgItem.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxNQUFNQSxVQUFVLENBQUMsRUFDYkMsT0FBTSxFQUNOQyxVQUFTLEVBQ1RDLEtBQUksRUFDUCxpQkFDRyw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1YsOERBQUNDOztvQkFDSUw7b0JBQVE7a0NBQ1QsOERBQUNNO2tDQUNJLElBQUlDLEtBQUtOLFdBQVdPLGNBQWMsQ0FBQyxTQUFTOzRCQUN6Q0MsTUFBTTs0QkFDTkMsT0FBTzs0QkFDUEMsS0FBSzs0QkFDTEMsTUFBTTs0QkFDTkMsUUFBUTs0QkFDUkMsUUFBUSxJQUFJO3dCQUNoQjs7Ozs7Ozs7Ozs7O1lBSVBaOzs7Ozs7O0FBS1QsaUVBQWVILE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanM/YzMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNc2dJdGVtID0gKHtcbiAgICB1c2VySWQsXG4gICAgdGltZXN0YW1wLFxuICAgIHRleHRcbn0pID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfaXRlbVwiPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgICB7dXNlcklkfXsnICd9XG4gICAgICAgICAgICA8c3ViPlxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3N1Yj5cbiAgICAgICAgPC9oMz5cblxuICAgICAgICB7dGV4dH1cbiAgICA8L2xpPlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwibmFtZXMiOlsiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwic3ViIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\n\nconst UserIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>UserIds[Math.round(Math.random())];\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: `${50 - i} mock text`\n    }));\nconst MsgList = ()=>{\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: `${msgs.length + 1} ${text}`\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...x\n                    }, x.id, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                        lineNumber: 30,\n                        columnNumber: 31\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWdDO0FBQ0Q7QUFDRTtBQUVqQyxNQUFNRyxVQUFVO0lBQUM7SUFBTztDQUFNO0FBQzlCLE1BQU1DLGtCQUFrQixJQUFNRCxPQUFPLENBQUNFLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxJQUFJO0FBRWhFLE1BQU1DLGVBQWVDLE1BQU0sSUFBSUMsSUFBSSxDQUFDLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxJQUFPO1FBQ2xEQyxJQUFJLEtBQUtEO1FBQ1RFLFFBQVFYO1FBQ1JZLFdBQVcsZ0JBQWdCSCxJQUFJLE9BQU87UUFDdENJLE1BQU0sQ0FBQyxFQUFFLEtBQUtKLEVBQUUsVUFBVSxDQUFDO0lBQy9CO0FBRUEsTUFBTUssVUFBVSxJQUFNO0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHcEIsK0NBQVFBLENBQUNRO0lBQ2pDLE1BQU1hLFdBQVdKLENBQUFBLE9BQVE7UUFDckIsTUFBTUssU0FBUztZQUNYUixJQUFJSyxLQUFLSSxNQUFNLEdBQUc7WUFDbEJSLFFBQVFYO1lBQ1JZLFdBQVdRLEtBQUtDLEdBQUc7WUFDbkJSLE1BQU0sQ0FBQyxFQUFFRSxLQUFLSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUVOLEtBQUssQ0FBQztRQUN0QztRQUNBRyxRQUFRRCxDQUFBQSxPQUFTO2dCQUFDRzttQkFBV0g7YUFBSztJQUN0QztJQUNBLHFCQUNJOzswQkFDSSw4REFBQ2pCLGlEQUFRQTtnQkFBQ3dCLFFBQVFMOzs7Ozs7MEJBQ2xCLDhEQUFDTTtnQkFBR0MsV0FBVTswQkFDVlQsS0FBS1IsR0FBRyxDQUFDa0IsQ0FBQUEsa0JBQUssOERBQUM1QixnREFBT0E7d0JBQWEsR0FBRzRCLENBQUM7dUJBQVhBLEVBQUVmLEVBQUU7Ozs7Ozs7Ozs7OztBQUloRDtBQUNBLGlFQUFlSSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIlxuXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YFxufSkpXG5cbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKVxuICAgIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICAgICAgfVxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+e1xuICAgICAgICAgICAgICAgIG1zZ3MubWFwKHggPT4gPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gLz4pXG4gICAgICAgICAgICB9PC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93IiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ \"./components/MsgList.js\");\n\n\nconst Home = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Simple SNS\"\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMkM7QUFFM0MsTUFBTUMsT0FBTyxrQkFDVDs7MEJBQ0ksOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGLDJEQUFPQTs7Ozs7OztBQUloQixpRUFBZUMsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXNnTGlzdFwiXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGgxPlNpbXBsZSBTTlM8L2gxPlxuICAgICAgICA8TXNnTGlzdCAvPlxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIk1zZ0xpc3QiLCJIb21lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();