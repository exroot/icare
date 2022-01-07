module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fetcher.js":
/*!************************!*\
  !*** ./lib/fetcher.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst fetcher = async url => {\n  const token = localStorage.getItem(\"access\");\n  const clientInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    headers: _objectSpread({\n      Accept: \"application/json\"\n    }, token ? {\n      Authorization: `${token}`\n    } : {}),\n    baseURL: \"http://localhost:5000\"\n  });\n\n  try {\n    clientInstance.interceptors.response.use( // RESPONSE\n    async response => {\n      if (!localStorage.getItem(\"access\") && response.data.is_logged_in === false) {\n        return Promise.resolve(response);\n      }\n\n      if (localStorage.getItem(\"access\") && response.data.is_logged_in === true) {\n        return Promise.resolve(response);\n      } // Try request again but with a new access token\n      // wait for a new access token\n\n\n      const refresh = {\n        refresh: localStorage.getItem(\"refresh\")\n      };\n      const {\n        data: token\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"/auth/token/refresh/\", refresh, {\n        /* Enable cookies to send the refresh token */\n        // withCredentials: true,\n        baseURL: \"http://localhost:5000\"\n      });\n      localStorage.setItem(\"access\", token.access); // New request with new token\n\n      const {\n        config\n      } = response;\n      config.headers.Authorization = `${localStorage.getItem(\"access\")}`;\n      const newResponse = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.request(_objectSpread(_objectSpread({}, config), {}, {\n        method: \"GET\"\n      }));\n      return Promise.resolve(newResponse);\n    }, // ERROR\n    async error => {\n      var _error$response;\n\n      // Return any error which is not due to authentication normally\n      if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) !== 401) {\n        return Promise.reject(error);\n      }\n      /* \n        status 401 on refresh_token endpoint => Logout user because refresh token didn't work\n        \n        Also, redirect to login page \n      */\n\n\n      if (error.config.url === \"/auth/token/refresh/\") {\n        return Promise.resolve({\n          is_logged_in: false\n        });\n      } // Try request again but with a new access token\n      // wait for a new access token\n\n\n      const refresh = {\n        refresh: localStorage.getItem(\"refresh\")\n      };\n      const {\n        data: token\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"/auth/token/refresh/\", refresh, {\n        /* Enable cookies to send the refresh token */\n        // withCredentials: true,\n        baseURL: \"http://localhost:5000\"\n      });\n      localStorage.setItem(\"access\", token.access); // New request with new token\n\n      const {\n        config\n      } = error;\n      config.headers.Authorization = `${localStorage.getItem(\"access\")}`;\n      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.request(_objectSpread(_objectSpread({}, config), {}, {\n        method: \"GET\"\n      }));\n      return Promise.resolve(response);\n    });\n    const {\n      data\n    } = await clientInstance.get(url);\n    return data;\n  } catch (err) {\n    //   Refresh token has expired or something happened\n    return Promise.resolve({\n      is_logged_in: false\n    }); // throw err;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetcher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZmV0Y2hlci5qcz80MmQxIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjbGllbnRJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJiYXNlVVJMIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImRhdGEiLCJpc19sb2dnZWRfaW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlZnJlc2giLCJwb3N0Iiwic2V0SXRlbSIsImFjY2VzcyIsImNvbmZpZyIsIm5ld1Jlc3BvbnNlIiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwic3RhdHVzIiwicmVqZWN0IiwiZ2V0IiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQzdCLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQWQ7QUFDQSxRQUFNQyxjQUFjLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUNsQ0MsV0FBTztBQUNMQyxZQUFNLEVBQUU7QUFESCxPQUVEUCxLQUFLLEdBQUc7QUFBRVEsbUJBQWEsRUFBRyxHQUFFUixLQUFNO0FBQTFCLEtBQUgsR0FBbUMsRUFGdkMsQ0FEMkI7QUFLbENTLFdBQU8sRUFBRUMsdUJBQStCQztBQUxOLEdBQWIsQ0FBdkI7O0FBUUEsTUFBSTtBQUNGUixrQkFBYyxDQUFDUyxZQUFmLENBQTRCQyxRQUE1QixDQUFxQ0MsR0FBckMsRUFDRTtBQUNBLFVBQU9ELFFBQVAsSUFBb0I7QUFDbEIsVUFDRSxDQUFDWixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBRCxJQUNBVyxRQUFRLENBQUNFLElBQVQsQ0FBY0MsWUFB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QVAsRUFBWTtBQUNaO0FBQ0EsV0FBT2QsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQ3JCRixrQkFBWSxFQUFFO0FBRE8sS0FBaEIsQ0FBUCxDQUZZLENBTVo7QUFDRDtBQUNGLENBbEdEOztBQW9HZWxCLHNFQUFmIiwiZmlsZSI6Ii4vbGliL2ZldGNoZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIik7XG4gIGNvbnN0IGNsaWVudEluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgLi4uKHRva2VuID8geyBBdXRob3JpemF0aW9uOiBgJHt0b2tlbn1gIH0gOiB7fSksXG4gICAgfSxcbiAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLFxuICB9KTtcblxuICB0cnkge1xuICAgIGNsaWVudEluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgICAvLyBSRVNQT05TRVxuICAgICAgYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIikgJiZcbiAgICAgICAgICByZXNwb25zZS5kYXRhLmlzX2xvZ2dlZF9pbiA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzXCIpICYmXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5pc19sb2dnZWRfaW4gPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHJlcXVlc3QgYWdhaW4gYnV0IHdpdGggYSBuZXcgYWNjZXNzIHRva2VuXG4gICAgICAgIC8vIHdhaXQgZm9yIGEgbmV3IGFjY2VzcyB0b2tlblxuICAgICAgICBjb25zdCByZWZyZXNoID0geyByZWZyZXNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgfTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiB0b2tlbiB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICBcIi9hdXRoL3Rva2VuL3JlZnJlc2gvXCIsXG4gICAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvKiBFbmFibGUgY29va2llcyB0byBzZW5kIHRoZSByZWZyZXNoIHRva2VuICovXG4gICAgICAgICAgICAvLyB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NcIiwgdG9rZW4uYWNjZXNzKTtcbiAgICAgICAgLy8gTmV3IHJlcXVlc3Qgd2l0aCBuZXcgdG9rZW5cbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHJlc3BvbnNlO1xuICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIil9YDtcbiAgICAgICAgY29uc3QgbmV3UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXdSZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgLy8gRVJST1JcbiAgICAgIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICAvLyBSZXR1cm4gYW55IGVycm9yIHdoaWNoIGlzIG5vdCBkdWUgdG8gYXV0aGVudGljYXRpb24gbm9ybWFsbHlcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgIT09IDQwMSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgLyogXG4gICAgICAgICAgc3RhdHVzIDQwMSBvbiByZWZyZXNoX3Rva2VuIGVuZHBvaW50ID0+IExvZ291dCB1c2VyIGJlY2F1c2UgcmVmcmVzaCB0b2tlbiBkaWRuJ3Qgd29ya1xuICAgICAgICAgIFxuICAgICAgICAgIEFsc28sIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgXG4gICAgICAqL1xuXG4gICAgICAgIGlmIChlcnJvci5jb25maWcudXJsID09PSBcIi9hdXRoL3Rva2VuL3JlZnJlc2gvXCIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGlzX2xvZ2dlZF9pbjogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHJlcXVlc3QgYWdhaW4gYnV0IHdpdGggYSBuZXcgYWNjZXNzIHRva2VuXG4gICAgICAgIC8vIHdhaXQgZm9yIGEgbmV3IGFjY2VzcyB0b2tlblxuICAgICAgICBjb25zdCByZWZyZXNoID0geyByZWZyZXNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgfTtcbiAgICAgICAgY29uc3QgeyBkYXRhOiB0b2tlbiB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICBcIi9hdXRoL3Rva2VuL3JlZnJlc2gvXCIsXG4gICAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvKiBFbmFibGUgY29va2llcyB0byBzZW5kIHRoZSByZWZyZXNoIHRva2VuICovXG4gICAgICAgICAgICAvLyB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NcIiwgdG9rZW4uYWNjZXNzKTtcbiAgICAgICAgLy8gTmV3IHJlcXVlc3Qgd2l0aCBuZXcgdG9rZW5cbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IGVycm9yO1xuICAgICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIil9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudEluc3RhbmNlLmdldCh1cmwpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgIFJlZnJlc2ggdG9rZW4gaGFzIGV4cGlyZWQgb3Igc29tZXRoaW5nIGhhcHBlbmVkXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBpc19sb2dnZWRfaW46IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgLy8gdGhyb3cgZXJyO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/fetcher.js\n");

/***/ }),

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/*! exports provided: GA_TRACKING_ID, pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GA_TRACKING_ID\", function() { return GA_TRACKING_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageview\", function() { return pageview; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"event\", function() { return event; });\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages\n\nconst pageview = url => {\n  window.gtag(\"config\", GA_TRACKING_ID, {\n    page_path: url\n  });\n}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events\n\nconst event = ({\n  action,\n  category,\n  label,\n  value\n}) => {\n  window.gtag(\"event\", action, {\n    event_category: category,\n    event_label: label,\n    value\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ3RhZy5qcz8zMzRmIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQUFuQyxDLENBRVA7O0FBQ08sTUFBTUMsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDL0JDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JQLGNBQXRCLEVBQXNDO0FBQ3BDUSxhQUFTLEVBQUVIO0FBRHlCLEdBQXRDO0FBR0QsQ0FKTSxDLENBTVA7O0FBQ08sTUFBTUksS0FBSyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQyxVQUFWO0FBQW9CQyxPQUFwQjtBQUEyQkM7QUFBM0IsQ0FBRCxLQUF3QztBQUMzRFAsUUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixFQUFxQkcsTUFBckIsRUFBNkI7QUFDM0JJLGtCQUFjLEVBQUVILFFBRFc7QUFFM0JJLGVBQVcsRUFBRUgsS0FGYztBQUczQkM7QUFIMkIsR0FBN0I7QUFLRCxDQU5NIiwiZmlsZSI6Ii4vbGliL2d0YWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRDtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9wYWdlc1xuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICB3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KTtcbn07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWUsXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./node_modules/react-image-crop/dist/ReactCrop.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-image-crop/dist/ReactCrop.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-image-crop/dist/ReactCrop.css\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ \"react-toast-notifications\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ \"@emotion/css\");\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\n/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ \"./node_modules/react-image-crop/dist/ReactCrop.css\");\n/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_slick_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/slick.scss */ \"./styles/slick.scss\");\n/* harmony import */ var _styles_slick_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_slick_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_nprogress_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/nprogress.scss */ \"./styles/nprogress.scss\");\n/* harmony import */ var _styles_nprogress_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_scss__WEBPACK_IMPORTED_MODULE_12__);\nvar _jsxFileName = \"/home/binaural14/projects/personal/icare/pages/_app.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\nvar _ref = false ? undefined : {\n  name: \"14mv86q\",\n  styles: \"*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Helvetica Neue\\\",Arial,\\\"Noto Sans\\\",sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\",\\\"Segoe UI Symbol\\\",\\\"Noto Color Emoji\\\";}body{margin:0;font-family:inherit;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0;color:inherit;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role=\\\"button\\\"]{cursor:pointer;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\\\"Liberation Mono\\\",\\\"Courier New\\\",monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}[hidden]{display:none;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}}\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nconst _GlobalStyles = () => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"Global\"], {\n  styles: _ref,\n  __self: undefined\n});\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({\n  showSpinner: false\n});\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n\nnext_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const handleRouteChange = url => {\n      _lib_gtag__WEBPACK_IMPORTED_MODULE_7__[\"pageview\"](url);\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [router.events]);\n  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(swr__WEBPACK_IMPORTED_MODULE_2__[\"SWRConfig\"], {\n    value: {\n      fetcher: _lib_fetcher__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"CacheProvider\"], {\n    value: _emotion_css__WEBPACK_IMPORTED_MODULE_6__[\"cache\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_GlobalStyles, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__[\"ToastProvider\"], {\n    autoDismissTimeout: 5000,\n    placement: \"bottom-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0Iiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImd0YWciLCJldmVudHMiLCJvbiIsIm9mZiIsImZldGNoZXIiLCJjYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLGdEQUFTLENBQUNDLFNBQVYsQ0FBb0I7QUFDbEJDLGFBQVcsRUFBRTtBQURLLENBQXBCOztBQUlBQyxrREFBTSxDQUFDQyxrQkFBUCxHQUE0QixNQUFNSixnREFBUyxDQUFDSyxLQUFWLEVBQWxDOztBQUNBRixrREFBTSxDQUFDRyxxQkFBUCxHQUErQixNQUFNTixnREFBUyxDQUFDTyxJQUFWLEVBQXJDOztBQUNBSixrREFBTSxDQUFDSyxrQkFBUCxHQUE0QixNQUFNUixnREFBUyxDQUFDTyxJQUFWLEVBQWxDOztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLGlCQUFpQixHQUFJQyxHQUFELElBQVM7QUFDakNDLHdEQUFBLENBQWNELEdBQWQ7QUFDRCxLQUZEOztBQUdBSixVQUFNLENBQUNNLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NKLGlCQUF4QztBQUNBLFdBQU8sTUFBTTtBQUNYSCxZQUFNLENBQUNNLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNMLGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ0gsTUFBTSxDQUFDTSxNQUFSLENBUk0sQ0FBVDtBQVVBLFNBQ0UsMkRBQUMsNkNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEcsbUVBQU9BO0FBREYsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsMkRBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVDLGtEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsMkRBQUMsdUVBQUQ7QUFBZSxzQkFBa0IsRUFBRSxJQUFuQztBQUF5QyxhQUFTLEVBQUMsY0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDJEQUFDLFNBQUQsZUFBZVgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FGRixDQUxGLENBREY7QUFjRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gJ3N3cidcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSAndHdpbi5tYWNybydcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vY3NzJ1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZydcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2xpYi9mZXRjaGVyJ1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvc2xpY2suc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL25wcm9ncmVzcy5zY3NzJ1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHtcbiAgc2hvd1NwaW5uZXI6IGZhbHNlLFxufSlcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybClcbiAgICB9XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIH1cbiAgfSwgW3JvdXRlci5ldmVudHNdKVxuXG4gIHJldHVybiAoXG4gICAgPFNXUkNvbmZpZ1xuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZmV0Y2hlcixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8VG9hc3RQcm92aWRlciBhdXRvRGlzbWlzc1RpbWVvdXQ9ezUwMDB9IHBsYWNlbWVudD1cImJvdHRvbS1yaWdodFwiPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Ub2FzdFByb3ZpZGVyPlxuICAgICAgPC9DYWNoZVByb3ZpZGVyPlxuICAgIDwvU1dSQ29uZmlnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.scss\n");

/***/ }),

/***/ "./styles/nprogress.scss":
/*!*******************************!*\
  !*** ./styles/nprogress.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9ucHJvZ3Jlc3Muc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/nprogress.scss\n");

/***/ }),

/***/ "./styles/slick.scss":
/*!***************************!*\
  !*** ./styles/slick.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zbGljay5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/slick.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/css\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jc3NcIj9lODJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2Nzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/css\n");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiPzZkMDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/react\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nprogress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIj8xNTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nprogress\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toast-notifications\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI/ZjA3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toast-notifications\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });