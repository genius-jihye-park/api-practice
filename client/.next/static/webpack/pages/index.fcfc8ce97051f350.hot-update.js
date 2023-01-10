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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MsgList = (param)=>{\n    let { smsgs  } = param;\n    _s();\n    const { query: { userId =\"\"  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [hasNext, setHasNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const onCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"somethong wrong\");\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n    };\n    const onUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"somethong wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const onDelete = async (id)=>{\n        const receviedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receviedId + \"\");\n            //파싱과정에서 문자열-> 숫자열 전환, 화면상에서 바로 안지워지는 문제해결\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const doneEdit = ()=>setEditingId(null);\n    const getMessages = async ()=>{\n        var _msgs_;\n        const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"get\", \"/messages\", {\n            params: {\n                cursor: ((_msgs_ = msgs[msgs.length - 1]) === null || _msgs_ === void 0 ? void 0 : _msgs_.id) || \"\"\n            }\n        });\n        if (newMsgs.length === 0) {\n            setHasNext(false);\n            return;\n        }\n        setMsgs((msgs)=>[\n                ...msgs,\n                ...newMsgs\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMessages();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (intersecting && hasNext) getMessages();\n    }, [\n        intersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 70,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(x.id),\n                        startEdit: ()=>setEditingId(x.id),\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }, x.id, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"FBTRphEmyT8h8NCifnUVQErVXg4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S1Isd0JBQVUsOERBQUNOLGlEQUFRQTtnQkFBQ2lDLFFBQVFsQjs7Ozs7OzBCQUM3Qiw4REFBQ21CO2dCQUFHQyxXQUFVOzBCQUNUNUIsS0FBSzZCLEdBQUcsQ0FBQ0MsQ0FBQUEsa0JBQ04sOERBQUN0QyxnREFBT0E7d0JBRUgsR0FBR3NDLENBQUM7d0JBQ0xsQixVQUFVQTt3QkFDVlEsVUFBVSxJQUFNQSxTQUFTVSxFQUFFakIsRUFBRTt3QkFDN0JrQixXQUFXLElBQU01QixhQUFhMkIsRUFBRWpCLEVBQUU7d0JBQ2xDbUIsV0FBVzlCLGNBQWM0QixFQUFFakIsRUFBRTt3QkFDN0JvQixNQUFNbEM7dUJBTkQrQixFQUFFakIsRUFBRTs7Ozs7Ozs7OzswQkFVckIsOERBQUNxQjtnQkFBSUMsS0FBSzdCOzs7Ozs7OztBQUl0QjtHQWhGTVY7O1FBR0VMLGtEQUFTQTtRQUtRSSxnRUFBaUJBOzs7S0FScENDO0FBa0ZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnXG5cbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncyB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxuICAgIH0gPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKVxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbClcbiAgICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbClcblxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSlcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhvbmcgd3JvbmcnKVxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXG4gICAgfVxuXG4gICAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRob25nIHdyb25nJylcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZylcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXG4gICAgICAgIH0pXG4gICAgICAgIGRvbmVFZGl0KClcbiAgICB9XG5cbiAgICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcbiAgICAgICAgY29uc3QgcmVjZXZpZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KVxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNldmllZElkICsgJycpXG4gICAgICAgICAgICAvL+2MjOyLseqzvOygleyXkOyEnCDrrLjsnpDsl7QtPiDsiKvsnpDsl7Qg7KCE7ZmYLCDtmZTrqbTsg4Hsl5DshJwg67CU66GcIOyViOyngOybjOyngOuKlCDrrLjsoJztlbTqsrBcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcblxuXG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSlcbiAgICAgICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZXRIYXNOZXh0KGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2V0TXNncyhtc2dzID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0TWVzc2FnZXMoKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXG4gICAgfSwgW2ludGVyc2VjdGluZ10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuICAgICAgICAgICAgey8qIO2ZlOuptCDsg4Hsl5Ag64KY7YOA64Ks7J2EIOuVjCDri6TsnYwg642w7J207YSw66W8IOu2iOufrOyZgOudvCAqL31cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiTXNnTGlzdCIsInNtc2dzIiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicmVjZXZpZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});