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

/***/ "(app-client)/./app/components/EASAttest.jsx":
/*!**************************************!*\
  !*** ./app/components/EASAttest.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethereum-attestation-service/eas-sdk */ \"(app-client)/./node_modules/@ethereum-attestation-service/eas-sdk/dist/index.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/address/lib.esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst EASContractAddress = \"0xC2679fBD37d54388Ce493F1DB75320D236e1815e\";\nfunction EASAttest() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [submitUID, setSubmitUID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const validateName = (name)=>name.trim() !== \"\";\n    const validateAddress = (address)=>ethers__WEBPACK_IMPORTED_MODULE_4__.isAddress(address);\n    const validateMessage = (message)=>message.trim() !== \"\";\n    const isFormValid = ()=>{\n        return validateName(name) && validateAddress(address) && validateMessage(message);\n    };\n    const submitAttestation = async ()=>{\n        if (!isFormValid()) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill all fields correctly.\");\n            return;\n        }\n        setSubmitUID(\"\");\n        try {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.Web3Provider(window.ethereum);\n            await provider.send(\"eth_requestAccounts\", []);\n            const signer = provider.getSigner();\n            const eas = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.EAS(EASContractAddress);\n            eas.connect(signer);\n            const schemaEncoder = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.SchemaEncoder(\"string name, string message\");\n            const encodedData = schemaEncoder.encodeData([\n                {\n                    name: \"name\",\n                    value: name,\n                    type: \"string\"\n                },\n                {\n                    name: \"message\",\n                    value: message,\n                    type: \"string\"\n                }\n            ]);\n            const schemaUID = \"0xb28844791177681bd44d983e8aaa017f6a378e297271a46fd20d81a5cbadc386\";\n            const tx = await eas.attest({\n                schema: schemaUID,\n                data: {\n                    recipient: address,\n                    revocable: true,\n                    data: encodedData\n                }\n            });\n            setLoading(true);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loading(\"Wait for transaction....!\");\n            const receipt = await tx.wait();\n            const newAttestationUID = receipt.events[0].args.uid;\n            setLoading(false);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n            setSubmitUID(newAttestationUID);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Attestation Done!\");\n            setName(\"\");\n            setAddress(\"\");\n            setMessage(\"\");\n        } catch (err) {\n            console.error(\"Error while attestation:\", err);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Error while attestation!\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dismiss();\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                position: \"top-right\",\n                reverseOrder: false\n            }, void 0, false, {\n                fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full flex-col items-center mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-80 p-2 mt-4 text-black rounded-md\",\n                        type: \"text\",\n                        placeholder: \"Enter Name...\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-80 p-2 mt-4 text-black rounded-md\",\n                        type: \"text\",\n                        placeholder: \"Enter Address...\",\n                        value: address,\n                        onChange: (e)=>setAddress(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-80 p-2 mt-4 text-black rounded-md\",\n                        type: \"text\",\n                        placeholder: \"Enter Message...\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: submitAttestation,\n                                className: \"w-40 p-2 text-black rounded-md bg-slate-400 hover:bg-slate-500\",\n                                disabled: loading || !isFormValid(),\n                                children: loading ? \"Submitting...\" : \"Submit Attestation\"\n                            }, void 0, false, {\n                                fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: submitUID ? \"https://sepolia.easscan.org/attestation/view/\".concat(submitUID) : \"#\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"w-40 p-2 text-black rounded-md bg-slate-400 inline-block text-center \".concat(!submitUID ? \"disabled-link\" : \"hover:bg-slate-500\"),\n                                onClick: (e)=>!submitUID && e.preventDefault(),\n                                children: \"View Attestation\"\n                            }, void 0, false, {\n                                fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jitendra/EAS-For-Certificates/client/app/components/EASAttest.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(EASAttest, \"vQjzMiX0p7VhRrh7N5gC6uEr8Js=\");\n_c = EASAttest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EASAttest);\nvar _c;\n$RefreshReg$(_c, \"EASAttest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRUFTQXR0ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUyRTtBQUMzQztBQUNDO0FBQ2dCO0FBRWpELE1BQU1NLHFCQUFxQjtBQUUzQixTQUFTQzs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1lLGVBQWUsQ0FBQ1YsT0FBU0EsS0FBS1csSUFBSSxPQUFPO0lBQy9DLE1BQU1DLGtCQUFrQixDQUFDVixVQUFZUiw2Q0FBc0IsQ0FBQ1E7SUFDNUQsTUFBTWEsa0JBQWtCLENBQUNYLFVBQVlBLFFBQVFPLElBQUksT0FBTztJQUV4RCxNQUFNSyxjQUFjO1FBQ2xCLE9BQU9OLGFBQWFWLFNBQVNZLGdCQUFnQlYsWUFBWWEsZ0JBQWdCWDtJQUMzRTtJQUVBLE1BQU1hLG9CQUFvQjtRQUN4QixJQUFJLENBQUNELGVBQWU7WUFDbEJwQix1REFBS0EsQ0FBQ3NCLEtBQUssQ0FBQztZQUNaO1FBQ0Y7UUFFQVgsYUFBYTtRQUNiLElBQUk7WUFDRixNQUFNWSxXQUFXLElBQUl6QixnREFBNkIsQ0FBQzRCLE9BQU9DLFFBQVE7WUFDbEUsTUFBTUosU0FBU0ssSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzdDLE1BQU1DLFNBQVNOLFNBQVNPLFNBQVM7WUFFakMsTUFBTUMsTUFBTSxJQUFJbkMsc0VBQUdBLENBQUNNO1lBQ3BCNkIsSUFBSUMsT0FBTyxDQUFDSDtZQUVaLE1BQU1JLGdCQUFnQixJQUFJcEMsZ0ZBQWFBLENBQUM7WUFDeEMsTUFBTXFDLGNBQWNELGNBQWNFLFVBQVUsQ0FBQztnQkFDM0M7b0JBQUUvQixNQUFNO29CQUFRZ0MsT0FBT2hDO29CQUFNaUMsTUFBTTtnQkFBUztnQkFDNUM7b0JBQUVqQyxNQUFNO29CQUFXZ0MsT0FBTzVCO29CQUFTNkIsTUFBTTtnQkFBUzthQUNuRDtZQUVELE1BQU1DLFlBQ0o7WUFFRixNQUFNQyxLQUFLLE1BQU1SLElBQUlTLE1BQU0sQ0FBQztnQkFDMUJDLFFBQVFIO2dCQUNSSSxNQUFNO29CQUNKQyxXQUFXckM7b0JBQ1hzQyxXQUFXO29CQUNYRixNQUFNUjtnQkFDUjtZQUNGO1lBRUFyQixXQUFXO1lBQ1hiLHVEQUFLQSxDQUFDWSxPQUFPLENBQUM7WUFFZCxNQUFNaUMsVUFBVSxNQUFNTixHQUFHTyxJQUFJO1lBQzdCLE1BQU1DLG9CQUFvQkYsUUFBUUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO1lBRXBEckMsV0FBVztZQUNYYix1REFBS0EsQ0FBQ21ELE9BQU87WUFDYnhDLGFBQWFvQztZQUNiL0MsdURBQUtBLENBQUNvRCxPQUFPLENBQUM7WUFDZC9DLFFBQVE7WUFDUkUsV0FBVztZQUNYRSxXQUFXO1FBQ2IsRUFBRSxPQUFPNEMsS0FBSztZQUNaQyxRQUFRaEMsS0FBSyxDQUFDLDRCQUE0QitCO1lBQzFDckQsdURBQUtBLENBQUNzQixLQUFLLENBQUM7WUFDWnRCLHVEQUFLQSxDQUFDbUQsT0FBTztZQUNidEMsV0FBVztRQUNiO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzBDOzswQkFDQyw4REFBQ3RELG9EQUFPQTtnQkFBQ3VELFVBQVM7Z0JBQVlDLGNBQWM7Ozs7OzswQkFDNUMsOERBQUNGO2dCQUFJRyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZyQixNQUFLO3dCQUNMdUIsYUFBWTt3QkFDWnhCLE9BQU9oQzt3QkFDUHlELFVBQVUsQ0FBQ0MsSUFBTXpELFFBQVF5RCxFQUFFQyxNQUFNLENBQUMzQixLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDdUI7d0JBQ0NELFdBQVU7d0JBQ1ZyQixNQUFLO3dCQUNMdUIsYUFBWTt3QkFDWnhCLE9BQU85Qjt3QkFDUHVELFVBQVUsQ0FBQ0MsSUFBTXZELFdBQVd1RCxFQUFFQyxNQUFNLENBQUMzQixLQUFLOzs7Ozs7a0NBRTVDLDhEQUFDdUI7d0JBQ0NELFdBQVU7d0JBQ1ZyQixNQUFLO3dCQUNMdUIsYUFBWTt3QkFDWnhCLE9BQU81Qjt3QkFDUHFELFVBQVUsQ0FBQ0MsSUFBTXJELFdBQVdxRCxFQUFFQyxNQUFNLENBQUMzQixLQUFLOzs7Ozs7a0NBRTVDLDhEQUFDbUI7d0JBQUlHLFdBQVU7OzBDQUNiLDhEQUFDTTtnQ0FDQ0MsU0FBUzVDO2dDQUNUcUMsV0FBVTtnQ0FDVlEsVUFBVXRELFdBQVcsQ0FBQ1E7MENBRXJCUixVQUFVLGtCQUFrQjs7Ozs7OzBDQUcvQiw4REFBQ3VEO2dDQUNDQyxNQUFNMUQsWUFBWSxnREFBMEQsT0FBVkEsYUFBYztnQ0FDaEZxRCxRQUFPO2dDQUNQTSxLQUFJO2dDQUNKWCxXQUFXLHdFQUVWLE9BREMsQ0FBQ2hELFlBQVksa0JBQWtCO2dDQUVqQ3VELFNBQVMsQ0FBQ0gsSUFBTSxDQUFDcEQsYUFBYW9ELEVBQUVRLGNBQWM7MENBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXRIU25FO0tBQUFBO0FBd0hULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0VBU0F0dGVzdC5qc3g/MzkzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRUFTLCBTY2hlbWFFbmNvZGVyIH0gZnJvbSBcIkBldGhlcmV1bS1hdHRlc3RhdGlvbi1zZXJ2aWNlL2Vhcy1zZGtcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuY29uc3QgRUFTQ29udHJhY3RBZGRyZXNzID0gXCIweEMyNjc5ZkJEMzdkNTQzODhDZTQ5M0YxREI3NTMyMEQyMzZlMTgxNWVcIjtcblxuZnVuY3Rpb24gRUFTQXR0ZXN0KCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VibWl0VUlELCBzZXRTdWJtaXRVSURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2YWxpZGF0ZU5hbWUgPSAobmFtZSkgPT4gbmFtZS50cmltKCkgIT09IFwiXCI7XG4gIGNvbnN0IHZhbGlkYXRlQWRkcmVzcyA9IChhZGRyZXNzKSA9PiBldGhlcnMudXRpbHMuaXNBZGRyZXNzKGFkZHJlc3MpO1xuICBjb25zdCB2YWxpZGF0ZU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4gbWVzc2FnZS50cmltKCkgIT09IFwiXCI7XG5cbiAgY29uc3QgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlTmFtZShuYW1lKSAmJiB2YWxpZGF0ZUFkZHJlc3MoYWRkcmVzcykgJiYgdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEF0dGVzdGF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNGb3JtVmFsaWQoKSkge1xuICAgICAgdG9hc3QuZXJyb3IoXCJQbGVhc2UgZmlsbCBhbGwgZmllbGRzIGNvcnJlY3RseS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U3VibWl0VUlEKFwiXCIpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cbiAgICAgIGNvbnN0IGVhcyA9IG5ldyBFQVMoRUFTQ29udHJhY3RBZGRyZXNzKTtcbiAgICAgIGVhcy5jb25uZWN0KHNpZ25lcik7XG5cbiAgICAgIGNvbnN0IHNjaGVtYUVuY29kZXIgPSBuZXcgU2NoZW1hRW5jb2RlcihcInN0cmluZyBuYW1lLCBzdHJpbmcgbWVzc2FnZVwiKTtcbiAgICAgIGNvbnN0IGVuY29kZWREYXRhID0gc2NoZW1hRW5jb2Rlci5lbmNvZGVEYXRhKFtcbiAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IG5hbWUsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIm1lc3NhZ2VcIiwgdmFsdWU6IG1lc3NhZ2UsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBzY2hlbWFVSUQgPVxuICAgICAgICBcIjB4YjI4ODQ0NzkxMTc3NjgxYmQ0NGQ5ODNlOGFhYTAxN2Y2YTM3OGUyOTcyNzFhNDZmZDIwZDgxYTVjYmFkYzM4NlwiO1xuXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IGVhcy5hdHRlc3Qoe1xuICAgICAgICBzY2hlbWE6IHNjaGVtYVVJRCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHJlY2lwaWVudDogYWRkcmVzcyxcbiAgICAgICAgICByZXZvY2FibGU6IHRydWUsXG4gICAgICAgICAgZGF0YTogZW5jb2RlZERhdGEsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHRvYXN0LmxvYWRpbmcoXCJXYWl0IGZvciB0cmFuc2FjdGlvbi4uLi4hXCIpO1xuXG4gICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuICAgICAgY29uc3QgbmV3QXR0ZXN0YXRpb25VSUQgPSByZWNlaXB0LmV2ZW50c1swXS5hcmdzLnVpZDtcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB0b2FzdC5kaXNtaXNzKCk7XG4gICAgICBzZXRTdWJtaXRVSUQobmV3QXR0ZXN0YXRpb25VSUQpO1xuICAgICAgdG9hc3Quc3VjY2VzcyhcIkF0dGVzdGF0aW9uIERvbmUhXCIpO1xuICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgIHNldEFkZHJlc3MoXCJcIik7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGF0dGVzdGF0aW9uOlwiLCBlcnIpO1xuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciB3aGlsZSBhdHRlc3RhdGlvbiFcIik7XG4gICAgICB0b2FzdC5kaXNtaXNzKCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJ0b3AtcmlnaHRcIiByZXZlcnNlT3JkZXI9e2ZhbHNlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtOFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgwIHAtMiBtdC00IHRleHQtYmxhY2sgcm91bmRlZC1tZFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZS4uLlwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04MCBwLTIgbXQtNCB0ZXh0LWJsYWNrIHJvdW5kZWQtbWRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3MuLi5cIlxuICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctODAgcC0yIG10LTQgdGV4dC1ibGFjayByb3VuZGVkLW1kXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZXNzYWdlLi4uXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTQgbXQtNFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEF0dGVzdGF0aW9ufVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00MCBwLTIgdGV4dC1ibGFjayByb3VuZGVkLW1kIGJnLXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS01MDBcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIWlzRm9ybVZhbGlkKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyBcIlN1Ym1pdHRpbmcuLi5cIiA6IFwiU3VibWl0IEF0dGVzdGF0aW9uXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17c3VibWl0VUlEID8gYGh0dHBzOi8vc2Vwb2xpYS5lYXNzY2FuLm9yZy9hdHRlc3RhdGlvbi92aWV3LyR7c3VibWl0VUlEfWAgOiBcIiNcIn1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNDAgcC0yIHRleHQtYmxhY2sgcm91bmRlZC1tZCBiZy1zbGF0ZS00MDAgaW5saW5lLWJsb2NrIHRleHQtY2VudGVyICR7XG4gICAgICAgICAgICAgICFzdWJtaXRVSUQgPyBcImRpc2FibGVkLWxpbmtcIiA6IFwiaG92ZXI6Ymctc2xhdGUtNTAwXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+ICFzdWJtaXRVSUQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgQXR0ZXN0YXRpb25cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVBU0F0dGVzdDtcbiJdLCJuYW1lcyI6WyJFQVMiLCJTY2hlbWFFbmNvZGVyIiwiZXRoZXJzIiwidXNlU3RhdGUiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJFQVNDb250cmFjdEFkZHJlc3MiLCJFQVNBdHRlc3QiLCJuYW1lIiwic2V0TmFtZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdWJtaXRVSUQiLCJzZXRTdWJtaXRVSUQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbGlkYXRlTmFtZSIsInRyaW0iLCJ2YWxpZGF0ZUFkZHJlc3MiLCJ1dGlscyIsImlzQWRkcmVzcyIsInZhbGlkYXRlTWVzc2FnZSIsImlzRm9ybVZhbGlkIiwic3VibWl0QXR0ZXN0YXRpb24iLCJlcnJvciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzZW5kIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiZWFzIiwiY29ubmVjdCIsInNjaGVtYUVuY29kZXIiLCJlbmNvZGVkRGF0YSIsImVuY29kZURhdGEiLCJ2YWx1ZSIsInR5cGUiLCJzY2hlbWFVSUQiLCJ0eCIsImF0dGVzdCIsInNjaGVtYSIsImRhdGEiLCJyZWNpcGllbnQiLCJyZXZvY2FibGUiLCJyZWNlaXB0Iiwid2FpdCIsIm5ld0F0dGVzdGF0aW9uVUlEIiwiZXZlbnRzIiwiYXJncyIsInVpZCIsImRpc21pc3MiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImRpdiIsInBvc2l0aW9uIiwicmV2ZXJzZU9yZGVyIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImEiLCJocmVmIiwicmVsIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/EASAttest.jsx\n"));

/***/ })

});