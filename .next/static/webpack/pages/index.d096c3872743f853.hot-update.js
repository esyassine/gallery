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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_gallerySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/gallerySlice */ \"./pages/redux/gallerySlice.ts\");\n/* harmony import */ var _useGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGallery */ \"./pages/useGallery.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var pictures = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.pictures;\n    });\n    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.status;\n    });\n    var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.error;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var galleryHook = (0,_useGallery__WEBPACK_IMPORTED_MODULE_4__.useGallery)(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_redux_gallerySlice__WEBPACK_IMPORTED_MODULE_3__.fetchImages)());\n        setData(pictures);\n    }, [\n        dispatch,\n        pictures\n    ]);\n    // Renderiza el contenido según el estado de la solicitud fetch\n    if (status == \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                role: \"status\",\n                                className: \"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                role: \"status\",\n                                className: \"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    } else if (status === \"failed\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error al obtener las im\\xe1genes: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: galleryHook\n    }, void 0, false, {\n        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qcwBhjhU3GJtqochDFiDxozqQWs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _useGallery__WEBPACK_IMPORTED_MODULE_4__.useGallery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // import Image from 'next/image'\n // import { useState, useEffect } from 'react'\n // import axios from 'axios';\n // import { useGallery } from './useGallery';\n // export async function getStaticProps() {\n //   try {\n //     const response = await axios.get('/api');\n //     const images = response.data;\n //     return {\n //       props: {\n //         images: images,\n //       },\n //     };\n //   } catch (error) {\n //     console.error('Error al obtener las imágenes:', error);\n //     return {\n //       props: {\n //         images: [],\n //       },\n //     };\n //   }\n // }\n // export default function MyComponent({ images }: { images: any[] }) {\n //   return (\n //     <div>\n //       {useGallery(images)}\n //     </div>\n //   );\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtDQUNiLE9BQU87Q0FDUCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmZXRjaEltYWdlcyB9IGZyb20gJy4vcmVkdXgvZ2FsbGVyeVNsaWNlJztcbmltcG9ydCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IHVzZUdhbGxlcnkgfSBmcm9tICcuL3VzZUdhbGxlcnknO1xuXG5pbnRlcmZhY2UgSW1hZ2Uge1xuICBpZDogbnVtYmVyO1xuICBhdXRob3I6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xuICBkb3dubG9hZF91cmw6IHN0cmluZztcbn1cblxuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwaWN0dXJlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5nYWxsZXJ5LnBpY3R1cmVzKTtcbiAgY29uc3Qgc3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmdhbGxlcnkuc3RhdHVzKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZ2FsbGVyeS5lcnJvcik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEltYWdlW10+KFtdKTtcblxuICBjb25zdCBnYWxsZXJ5SG9vayA9IHVzZUdhbGxlcnkoZGF0YSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEltYWdlcygpKTtcbiAgICBzZXREYXRhKHBpY3R1cmVzKTtcbiAgfSwgW2Rpc3BhdGNoLCBwaWN0dXJlc10pO1xuXG4gIC8vIFJlbmRlcml6YSBlbCBjb250ZW5pZG8gc2Vnw7puIGVsIGVzdGFkbyBkZSBsYSBzb2xpY2l0dWQgZmV0Y2hcbiAgaWYgKHN0YXR1cyA9PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHktMTYgcHgtNCBzbTpweS0yNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMi41IGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWdyYXktNzAwIHctNDggbWItNFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICBcbiAgICAgICAgICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJzcGFjZS15LTggYW5pbWF0ZS1wdWxzZSBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC04IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTQ4IGJnLWdyYXktMzAwIHJvdW5kZWQgc206dy05NiBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJzcGFjZS15LTggYW5pbWF0ZS1wdWxzZSBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC04IG1kOmZsZXggbWQ6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTQ4IGJnLWdyYXktMzAwIHJvdW5kZWQgc206dy05NiBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz47XG4gIH1cbiAgZWxzZSBpZiAoc3RhdHVzID09PSAnZmFpbGVkJykge1xuICAgIHJldHVybiA8ZGl2PkVycm9yIGFsIG9idGVuZXIgbGFzIGltw6FnZW5lczoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtnYWxsZXJ5SG9va31cbiAgICA8L2Rpdj5cbiAgKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0IHsgdXNlR2FsbGVyeSB9IGZyb20gJy4vdXNlR2FsbGVyeSc7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaScpO1xuLy8gICAgIGNvbnN0IGltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIGltYWdlczogaW1hZ2VzLFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIG9idGVuZXIgbGFzIGltw6FnZW5lczonLCBlcnJvcik7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIGltYWdlczogW10sXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgIH1cbi8vIH1cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUNvbXBvbmVudCh7IGltYWdlcyB9OiB7IGltYWdlczogYW55W10gfSkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICB7dXNlR2FsbGVyeShpbWFnZXMpfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfSJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaEltYWdlcyIsInVzZUdhbGxlcnkiLCJIb21lIiwiZGlzcGF0Y2giLCJwaWN0dXJlcyIsInN0YXRlIiwiZ2FsbGVyeSIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsInNldERhdGEiLCJnYWxsZXJ5SG9vayIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});