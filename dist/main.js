/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/htmlstructure.js":
/*!******************************!*\
  !*** ./src/htmlstructure.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pagebody = (() => {\r\n    const contentContainer = document.querySelector('content');\r\n\r\n  \r\n\r\n\r\n\r\n\r\n  })();\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pagebody);\n\n//# sourceURL=webpack://todo-list-js/./src/htmlstructure.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _htmlstructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlstructure */ \"./src/htmlstructure.js\");\n\r\n\n\n//# sourceURL=webpack://todo-list-js/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n    const contentContainer = document.querySelector('body');\r\n    const header = document.createElement('header');\r\n    header.innerHTML = `\r\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">To-Do List</a>\r\n          </li>\r\n        </ul>\r\n        </div>\r\n    </div>\r\n    </nav>\r\n    `;\r\n    const main = document.createElement('main');\r\n    main.setAttribute('id', 'content');\r\n    main.classList.add('container-fluid')\r\n\r\n    const footer = document.createElement('footer');\r\n  \r\n    footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');\r\n    footer.innerHTML = `\r\n    <div class=\"container text-center\">\r\n      <a href='#' class='text-muted'>Footer</a>\r\n    </div>`;\r\n  \r\n    contentContainer.append(header);\r\n    contentContainer.append(main);\r\n    contentContainer.append(footer);\r\n    \r\n    /* Create sidebar*/\r\n    const newdivSelector = document.querySelector('main');\r\n    const createDiv = document.createElement('div');\r\n    createDiv.setAttribute('id','sidebar')\r\n    createDiv.classList.add('row','content')\r\n    newdivSelector.append(createDiv);\r\n    const sidebarSelector = document.querySelector('#sidebar');\r\n    const createDiv2 = document.createElement('div');\r\n    createDiv2.classList.add('col-sm-3','sidenav')\r\n    sidebarSelector.append(createDiv2);\r\n    const createDiv3 = document.createElement('div');\r\n    createDiv3.classList.add('col-sm-9','task');\r\n    sidebarSelector.append(createDiv3);\r\n\r\n    /* Create content inside sideBar*/\r\n    const sidenavSelector = document.querySelector('.sidenav');\r\n    const createTitle = document.createElement('h4');\r\n    createTitle.innerText = 'Projects';\r\n    sidenavSelector.append(createTitle);\r\n\r\n    /* Create form */\r\n    const createForm = document.createElement('form')\r\n    sidenavSelector.append(createForm)\r\n    \r\n    const formSelector = document.querySelector('form')\r\n    const createInputProjectName = document.createElement('input')\r\n    createInputProjectName.setAttribute('type', 'text')\r\n    createInputProjectName.setAttribute('id', 'projectName')\r\n    createInputProjectName.setAttribute('placeholder', 'New Project Name')\r\n    createInputProjectName.setAttribute('size', '15');\r\n    formSelector.append(createInputProjectName)\r\n    const submitProjectButton = document.createElement('input')\r\n    submitProjectButton.setAttribute('type', 'button')\r\n    submitProjectButton.setAttribute('value', 'Add')\r\n    formSelector.appendChild(submitProjectButton)\r\n\r\n    /* Create Todo list */\r\n    const taskSelector = document.querySelector('.task')\r\n    const createTitle2 = document.createElement('h4');\r\n    createTitle2.innerText = 'Tasks';\r\n    taskSelector.append(createTitle2);\r\n\r\n  })();\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://todo-list-js/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;