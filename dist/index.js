module.exports = /******/ (() => {
    // webpackBootstrap
    /******/ 'use strict'
    /******/ var __webpack_modules__ = {
        /***/ 932: /***/ (
            __unused_webpack___webpack_module__,
            __webpack_exports__,
            __nccwpck_require__
        ) => {
            __nccwpck_require__.r(__webpack_exports__)
            /* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
                /* harmony export */ handler: () => /* binding */ handler,
                /* harmony export */
            })
            const handler = async (event) => {
                const max = 999
                const val = 0
                const response = {
                    statusCode: 200,
                    body: `The random value (max ${max}) is: ${val}`,
                }
                return response
            }

            /***/
        },

        /******/
    }
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {}
    /******/
    /******/ // The require function
    /******/ function __nccwpck_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ var threw = true
        /******/ try {
            /******/ __webpack_modules__[moduleId](
                module,
                module.exports,
                __nccwpck_require__
            )
            /******/ threw = false
            /******/
        } finally {
            /******/ if (threw) delete __webpack_module_cache__[moduleId]
            /******/
        }
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ ;(() => {
        /******/ // define getter functions for harmony exports
        /******/ __nccwpck_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __nccwpck_require__.o(definition, key) &&
                    !__nccwpck_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    })
                    /******/
                }
                /******/
            }
            /******/
        }
        /******/
    })() /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ __nccwpck_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop)
        /******/
    })() /* webpack/runtime/make namespace object */
    /******/
    /******/
    /******/
    ;(() => {
        /******/ // define __esModule on exports
        /******/ __nccwpck_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module',
                })
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true,
            })
            /******/
        }
        /******/
    })()
    /******/
    /******/ /* webpack/runtime/compat */
    /******/
    /******/ __nccwpck_require__.ab =
        __dirname +
        '/' /************************************************************************/
    /******/ // module exports must be returned from runtime so entry inlining is disabled
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ return __nccwpck_require__(932)
    /******/
})()
