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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_gallerySlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/gallerySlice */ \"./pages/redux/gallerySlice.ts\");\n/* harmony import */ var _useGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGallery */ \"./pages/useGallery.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    var pictures = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.pictures;\n    });\n    var status = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.status;\n    });\n    var error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.gallery.error;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), data = ref[0], setData = ref[1];\n    var galleryHook = (0,_useGallery__WEBPACK_IMPORTED_MODULE_4__.useGallery)(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_redux_gallerySlice__WEBPACK_IMPORTED_MODULE_3__.fetchImages)());\n        setData(pictures);\n    }, [\n        dispatch,\n        pictures\n    ]);\n    // Renderiza el contenido según el estado de la solicitud fetch\n    if (status == \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                role: \"status\",\n                                className: \"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                role: \"status\",\n                                className: \"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    } else if (status === \"failed\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error al obtener las im\\xe1genes: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: galleryHook\n    }, void 0, false, {\n        fileName: \"/Users/yassineelmarkhi/Documents/github/gallery/pages/index.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qcwBhjhU3GJtqochDFiDxozqQWs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _useGallery__WEBPACK_IMPORTED_MODULE_4__.useGallery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // import Image from 'next/image'\n // import { useState, useEffect } from 'react'\n // import axios from 'axios';\n // import { useGallery } from './useGallery';\n // export async function getStaticProps() {\n //   try {\n //     const response = await axios.get('/api');\n //     const images = response.data;\n //     return {\n //       props: {\n //         images: images,\n //       },\n //     };\n //   } catch (error) {\n //     console.error('Error al obtener las imágenes:', error);\n //     return {\n //       props: {\n //         images: [],\n //       },\n //     };\n //   }\n // }\n // export default function MyComponent({ images }: { images: any[] }) {\n //   return (\n //     <div>\n //       {useGallery(images)}\n //     </div>\n //   );\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBdUQ7QUFDWDtBQUNPO0FBRVQ7QUFZMUMsU0FBU00sSUFBSSxHQUFHOztJQUNkLElBQU1DLFFBQVEsR0FBZ0JOLHdEQUFXLEVBQUU7SUFDM0MsSUFBTU8sUUFBUSxHQUFHUix3REFBVyxDQUFDLFNBQUNTLEtBQWdCO2VBQUtBLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixRQUFRO0tBQUEsQ0FBQztJQUMxRSxJQUFNRyxNQUFNLEdBQUdYLHdEQUFXLENBQUMsU0FBQ1MsS0FBZ0I7ZUFBS0EsS0FBSyxDQUFDQyxPQUFPLENBQUNDLE1BQU07S0FBQSxDQUFDO0lBQ3RFLElBQU1DLEtBQUssR0FBR1osd0RBQVcsQ0FBQyxTQUFDUyxLQUFnQjtlQUFLQSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsS0FBSztLQUFBLENBQUM7SUFDcEUsSUFBd0JULEdBQXFCLEdBQXJCQSwrQ0FBUSxDQUFVLEVBQUUsQ0FBQyxFQUF0Q1UsSUFBSSxHQUFhVixHQUFxQixHQUFsQyxFQUFFVyxPQUFPLEdBQUlYLEdBQXFCLEdBQXpCO0lBRXBCLElBQU1ZLFdBQVcsR0FBR1YsdURBQVUsQ0FBQ1EsSUFBSSxDQUFDO0lBQ3BDWCxnREFBUyxDQUFDLFdBQU07UUFDZEssUUFBUSxDQUFDSCxnRUFBVyxFQUFFLENBQUMsQ0FBQztRQUN4QlUsT0FBTyxDQUFDTixRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDLEVBQUU7UUFBQ0QsUUFBUTtRQUFFQyxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRXpCLCtEQUErRDtJQUMvRCxJQUFJRyxNQUFNLElBQUksU0FBUyxFQUFFO1FBQ3ZCLHFCQUFPO3NCQUNMLDRFQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0VBQW9FOztrQ0FDakYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQywyREFBMkQ7Ozs7OzRCQUFPO2tDQUNqRiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDJGQUEyRjs7MENBRXhHLDhEQUFDRCxLQUFHO2dDQUFDRSxJQUFJLEVBQUMsUUFBUTtnQ0FBQ0QsU0FBUyxFQUFDLDJFQUEyRTs7a0RBQ3RHLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsMkZBQTJGOzs7Ozs0Q0FDcEc7a0RBQ04sOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQywyREFBMkQ7Ozs7OzRDQUFPO2tEQUNyRiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7Ozs7NENBQU87a0RBQzFGLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsc0RBQXNEOzs7Ozs0Q0FBTztrREFDNUUsOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQyxvRUFBb0U7Ozs7OzRDQUFPO2tEQUMxRiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7Ozs7NENBQU87a0RBQzFGLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsNkRBQTZEOzs7Ozs0Q0FBTzs7Ozs7O29DQUMzRTswQ0FDTiw4REFBQ0QsS0FBRztnQ0FBQ0UsSUFBSSxFQUFDLFFBQVE7Z0NBQUNELFNBQVMsRUFBQywyRUFBMkU7MENBQ3RHLDRFQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsMkZBQTJGOzs7Ozt3Q0FDcEc7Ozs7O29DQUNGOzs7Ozs7NEJBRUY7Ozs7OztvQkFJRjt5QkFDTCxDQUFDO0lBQ04sT0FDSyxJQUFJTixNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzVCLHFCQUFPLDhEQUFDSyxLQUFHOztnQkFBQyxvQ0FBK0I7Z0JBQUNKLEtBQUs7Ozs7OztnQkFBTyxDQUFDO0lBQzNELENBQUM7SUFFRCxxQkFDRSw4REFBQ0ksS0FBRztrQkFDREQsV0FBVzs7Ozs7WUFDUixDQUNOO0FBRUosQ0FBQztHQXBEUVQsSUFBSTs7UUFDbUJMLG9EQUFXO1FBQ3hCRCxvREFBVztRQUNiQSxvREFBVztRQUNaQSxvREFBVztRQUdMSyxtREFBVTs7O0FBUHZCQyxLQUFBQSxJQUFJO0FBc0RiLCtEQUFlQSxJQUFJLEVBQUMsQ0FJcEIsaUNBQWlDO0NBQ2pDLDhDQUE4QztDQUM5Qyw2QkFBNkI7Q0FDN0IsNkNBQTZDO0NBRTdDLDJDQUEyQztDQUMzQyxVQUFVO0NBQ1YsZ0RBQWdEO0NBQ2hELG9DQUFvQztDQUNwQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsU0FBUztDQUNULHNCQUFzQjtDQUN0Qiw4REFBOEQ7Q0FDOUQsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFNBQVM7Q0FDVCxNQUFNO0NBQ04sSUFBSTtDQUdKLHVFQUF1RTtDQUN2RSxhQUFhO0NBQ2IsWUFBWTtDQUNaLDZCQUE2QjtDQUM3QixhQUFhO0NBQ2IsT0FBTztDQUNQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZldGNoSW1hZ2VzIH0gZnJvbSAnLi9yZWR1eC9nYWxsZXJ5U2xpY2UnO1xuaW1wb3J0IHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gJy4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgdXNlR2FsbGVyeSB9IGZyb20gJy4vdXNlR2FsbGVyeSc7XG5cbmludGVyZmFjZSBJbWFnZSB7XG4gIGlkOiBudW1iZXI7XG4gIGF1dGhvcjogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIGRvd25sb2FkX3VybDogc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGRpc3BhdGNoOiBBcHBEaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHBpY3R1cmVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmdhbGxlcnkucGljdHVyZXMpO1xuICBjb25zdCBzdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZ2FsbGVyeS5zdGF0dXMpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5nYWxsZXJ5LmVycm9yKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SW1hZ2VbXT4oW10pO1xuXG4gIGNvbnN0IGdhbGxlcnlIb29rID0gdXNlR2FsbGVyeShkYXRhKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoSW1hZ2VzKCkpO1xuICAgIHNldERhdGEocGljdHVyZXMpO1xuICB9LCBbZGlzcGF0Y2gsIHBpY3R1cmVzXSk7XG5cbiAgLy8gUmVuZGVyaXphIGVsIGNvbnRlbmlkbyBzZWfDum4gZWwgZXN0YWRvIGRlIGxhIHNvbGljaXR1ZCBmZXRjaFxuICBpZiAoc3RhdHVzID09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIuNSBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgZGFyazpiZy1ncmF5LTcwMCB3LTQ4IG1iLTRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuXG4gICAgICAgICAgPGRpdiByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwic3BhY2UteS04IGFuaW1hdGUtcHVsc2UgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtOCBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC00OCBiZy1ncmF5LTMwMCByb3VuZGVkIHNtOnctOTYgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMi41IGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWdyYXktNzAwIHctNDggbWItNFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgZGFyazpiZy1ncmF5LTcwMCBtYXgtdy1bNDgwcHhdIG1iLTIuNVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMiBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgZGFyazpiZy1ncmF5LTcwMCBtYi0yLjVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGRhcms6YmctZ3JheS03MDAgbWF4LXctWzQ0MHB4XSBtYi0yLjVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGRhcms6YmctZ3JheS03MDAgbWF4LXctWzQ2MHB4XSBtYi0yLjVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGRhcms6YmctZ3JheS03MDAgbWF4LXctWzM2MHB4XVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgcm9sZT1cInN0YXR1c1wiIGNsYXNzTmFtZT1cInNwYWNlLXktOCBhbmltYXRlLXB1bHNlIG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTggbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtNDggYmctZ3JheS0zMDAgcm91bmRlZCBzbTp3LTk2IGRhcms6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgPC9kaXY+XG4gICAgPC8+O1xuICB9XG4gIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvciBhbCBvYnRlbmVyIGxhcyBpbcOhZ2VuZXM6IHtlcnJvcn08L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Z2FsbGVyeUhvb2t9XG4gICAgPC9kaXY+XG4gICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCB7IHVzZUdhbGxlcnkgfSBmcm9tICcuL3VzZUdhbGxlcnknO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGknKTtcbi8vICAgICBjb25zdCBpbWFnZXMgPSByZXNwb25zZS5kYXRhO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBpbWFnZXM6IGltYWdlcyxcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBvYnRlbmVyIGxhcyBpbcOhZ2VuZXM6JywgZXJyb3IpO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBpbWFnZXM6IFtdLFxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlDb21wb25lbnQoeyBpbWFnZXMgfTogeyBpbWFnZXM6IGFueVtdIH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAge3VzZUdhbGxlcnkoaW1hZ2VzKX1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hJbWFnZXMiLCJ1c2VHYWxsZXJ5IiwiSG9tZSIsImRpc3BhdGNoIiwicGljdHVyZXMiLCJzdGF0ZSIsImdhbGxlcnkiLCJzdGF0dXMiLCJlcnJvciIsImRhdGEiLCJzZXREYXRhIiwiZ2FsbGVyeUhvb2siLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});