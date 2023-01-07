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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>UserIds[Math.round(Math.random())];\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    }));\nconsole.log(JSON.stringify(originalMsgs));\nconst MsgList = ()=>{\n    _s();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n    };\n    const onUpdate = (text, id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const onDelete = (id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const doneEdit = ()=>setEditingId(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(x.id),\n                        startEdit: ()=>setEditingId(x.id),\n                        isEditing: editingId === x.id\n                    }, x.id, false, {\n                        fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jihyepark/project/23_1/api-practice/client/components/MsgList.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnQztBQUNEO0FBQ0U7QUFFakMsTUFBTUcsVUFBVTtJQUFDO0lBQU87Q0FBTTtBQUM5QixNQUFNQyxrQkFBa0IsSUFBTUQsT0FBTyxDQUFDRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sSUFBSTtBQUVoRSxNQUFNQyxlQUFlQyxNQUFNLElBQ3RCQyxJQUFJLENBQUMsR0FDTEMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQU87UUFDWkMsSUFBSSxLQUFLRDtRQUNURSxRQUFRWDtRQUNSWSxXQUFXLGdCQUFnQixDQUFDLEtBQUtILENBQUFBLElBQUssT0FBTztRQUM3Q0ksTUFBTSxHQUFVLE9BQVAsS0FBS0osR0FBRTtJQUNwQjtBQUNKSyxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ2I7QUFFM0IsTUFBTWMsVUFBVSxJQUFNOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR3hCLCtDQUFRQSxDQUFDUTtJQUNqQyxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU0yQixXQUFXVixDQUFBQSxPQUFRO1FBQ3JCLE1BQU1XLFNBQVM7WUFDWGQsSUFBSVMsS0FBS00sTUFBTSxHQUFHO1lBQ2xCZCxRQUFRWDtZQUNSWSxXQUFXYyxLQUFLQyxHQUFHO1lBQ25CZCxNQUFNLEdBQXNCQSxPQUFuQk0sS0FBS00sTUFBTSxHQUFHLEdBQUUsS0FBUSxPQUFMWjtRQUNoQztRQUNBTyxRQUFRRCxDQUFBQSxPQUFRO2dCQUFDSzttQkFBV0w7YUFBSztJQUNyQztJQUVBLE1BQU1TLFdBQVcsQ0FBQ2YsTUFBTUgsS0FBTztRQUMzQlUsUUFBUUQsQ0FBQUEsT0FBUTtZQUNaLE1BQU1VLGNBQWNWLEtBQUtXLFNBQVMsQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSXJCLEVBQUUsS0FBS0E7WUFDckQsSUFBSW1CLGNBQWMsR0FBRyxPQUFPVjtZQUM1QixNQUFNYSxVQUFVO21CQUFJYjthQUFLO1lBQ3pCYSxRQUFRQyxNQUFNLENBQUNKLGFBQWEsR0FBRztnQkFDM0IsR0FBR1YsSUFBSSxDQUFDVSxZQUFZO2dCQUNwQmhCO1lBQ0o7WUFDQSxPQUFPbUI7UUFDWDtRQUNBRTtJQUNKO0lBRUEsTUFBTUMsV0FBV3pCLENBQUFBLEtBQU07UUFDbkJVLFFBQVFELENBQUFBLE9BQVE7WUFDWixNQUFNVSxjQUFjVixLQUFLVyxTQUFTLENBQUNDLENBQUFBLE1BQU9BLElBQUlyQixFQUFFLEtBQUtBO1lBQ3JELElBQUltQixjQUFjLEdBQUcsT0FBT1Y7WUFDNUIsTUFBTWEsVUFBVTttQkFBSWI7YUFBSztZQUN6QmEsUUFBUUMsTUFBTSxDQUFDSixhQUFhO1lBQzVCLE9BQU9HO1FBQ1g7SUFDSjtJQUVBLE1BQU1FLFdBQVcsSUFBTVosYUFBYSxJQUFJO0lBRXhDLHFCQUNJOzswQkFDSSw4REFBQ3hCLGlEQUFRQTtnQkFBQ3NDLFFBQVFiOzs7Ozs7MEJBQ2xCLDhEQUFDYztnQkFBR0MsV0FBVTswQkFDVG5CLEtBQUtaLEdBQUcsQ0FBQ2dDLENBQUFBLGtCQUNOLDhEQUFDMUMsZ0RBQU9BO3dCQUVILEdBQUcwQyxDQUFDO3dCQUNMWCxVQUFVQTt3QkFDVk8sVUFBVSxJQUFNQSxTQUFTSSxFQUFFN0IsRUFBRTt3QkFDN0I4QixXQUFXLElBQU1sQixhQUFhaUIsRUFBRTdCLEVBQUU7d0JBQ2xDK0IsV0FBV3BCLGNBQWNrQixFQUFFN0IsRUFBRTt1QkFMeEI2QixFQUFFN0IsRUFBRTs7Ozs7Ozs7Ozs7O0FBV2pDO0dBekRNUTtLQUFBQTtBQTJETiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXVxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxuXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgIGlkOiA1MCAtIGksXG4gICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgICAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXG4gICAgfSkpXG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKVxuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncylcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICAgICAgfVxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXG4gICAgfVxuXG4gICAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgICAgICAgICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXG4gICAgICAgIH0pXG4gICAgICAgIGRvbmVFZGl0KClcbiAgICB9XG5cbiAgICBjb25zdCBvbkRlbGV0ZSA9IGlkID0+IHtcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});