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

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useInfiniteScroll = (targetEl)=>{\n    _s();\n    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const [intersecting, setIntersecting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        if (!observerRef.current) {\n            observerRef.current = new IntersectionObserver((entries)=>setIntersecting(entries.some((entry)=>entry.isIntersecting)));\n        }\n        return observerRef.current;\n    }, [\n        observerRef.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (targetEl.current) getObserver().observe(targetEl.current);\n        return ()=>{\n            getObserver().disconnect();\n        };\n    }, [\n        targetEl.current\n    ]);\n    return intersecting;\n};\n_s(useInfiniteScroll, \"wgJwkE67wQsXc1eiCmrL0CTwPqc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInfiniteScroll);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFpRTtBQUVqRSxNQUFNSSxvQkFBb0JDLENBQUFBLFdBQVk7O0lBQ2xDLE1BQU1DLGNBQWNOLDZDQUFNQSxDQUFDLElBQUk7SUFDL0IsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUV0RCxNQUFNUSxjQUFjTixrREFBV0EsQ0FBQyxJQUFNO1FBQ2xDLElBQUksQ0FBQ0csWUFBWUksT0FBTyxFQUFFO1lBQ3RCSixZQUFZSSxPQUFPLEdBQUcsSUFBSUMscUJBQXFCQyxDQUFBQSxVQUFXSixnQkFDdERJLFFBQVFDLElBQUksQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsY0FBYztRQUVsRCxDQUFDO1FBQ0QsT0FBT1QsWUFBWUksT0FBTztJQUM5QixHQUFHO1FBQUNKLFlBQVlJLE9BQU87S0FBQztJQUd4QlIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlHLFNBQVNLLE9BQU8sRUFBRUQsY0FBY08sT0FBTyxDQUFDWCxTQUFTSyxPQUFPO1FBRTVELE9BQU8sSUFBTTtZQUNURCxjQUFjUSxVQUFVO1FBQzVCO0lBQ0osR0FBRztRQUFDWixTQUFTSyxPQUFPO0tBQUM7SUFFckIsT0FBT0g7QUFDWDtHQXZCTUg7QUF5Qk4sK0RBQWVBLGlCQUFpQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcz80MWUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZUluZmluaXRlU2Nyb2xsID0gdGFyZ2V0RWwgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgW2ludGVyc2VjdGluZywgc2V0SW50ZXJzZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgZ2V0T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHNldEludGVyc2VjdGluZyhcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnNvbWUoZW50cnkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXG4gICAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZlclJlZi5jdXJyZW50XG4gICAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpXG4gICAgICAgIH1cbiAgICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pXG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUluZmluaXRlU2Nyb2xsIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VJbmZpbml0ZVNjcm9sbCIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJpbnRlcnNlY3RpbmciLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsImN1cnJlbnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzb21lIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useInfiniteScroll.js\n"));

/***/ })

});