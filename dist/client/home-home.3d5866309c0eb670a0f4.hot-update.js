webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/childs/index.ts":
/*!**************************************************!*\
  !*** ./packages/src/routes/home/childs/index.ts ***!
  \**************************************************/
/*! exports provided: PayAction, PayInfo, ScaleButton, Tickets, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payAction_payAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payAction/payAction */ "./packages/src/routes/home/childs/payAction/payAction.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayAction", function() { return _payAction_payAction__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payInfo/payInfo */ "./packages/src/routes/home/childs/payInfo/payInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayInfo", function() { return _payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _scale_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale/scale */ "./packages/src/routes/home/childs/scale/scale.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleButton", function() { return _scale_scale__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tickets_tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets/tickets */ "./packages/src/routes/home/childs/tickets/tickets.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tickets", function() { return _tickets_tickets__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _status_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status */ "./packages/src/routes/home/childs/status/status.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status_status__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./packages/src/routes/home/childs/status/status.tsx":
/*!***********************************************************!*\
  !*** ./packages/src/routes/home/childs/status/status.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");



var Status = function Status(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, types.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      style: {
        color: _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][item]["default"]
      }
    }, item, ": ", meta[item].price);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ })

})
//# sourceMappingURL=home-home.3d5866309c0eb670a0f4.hot-update.js.map