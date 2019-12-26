webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/home.tsx":
/*!*******************************************!*\
  !*** ./packages/src/routes/home/home.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.styled */ "./packages/src/routes/home/home.styled.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/app.context */ "./packages/src/context/app.context.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};






var Home = function Home(_) {
  var state = Object(_context_app_context__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])()[0];

  var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    total: 0,
    tickets: {}
  }),
      selected = _a[0],
      setSelected = _a[1];

  var tickets = state.tickets,
      meta = state.meta,
      location = state.location;
  var types = meta.types;
  var onTicketSelect = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (i, j) {
    var _a, _b;

    if (selected[i + "_" + j]) {
      setSelected(__assign(__assign({}, selected), {
        tickets: __assign(__assign({}, selected.tickets), (_a = {}, _a[i + "_" + j] = null, _a.total = selected.total - 1, _a))
      }));
    } else {
      if (selected.total === 6) {
        return alert('max tickets pick');
      }

      setSelected(__assign(__assign({}, selected), (_b = {}, _b[i + "_" + j] = tickets[i][j], _b.total = selected.total + 1, _b)));
    }
  }, [selected, state]);

  var calculatePrice = function calculatePrice() {
    return Object.keys(selected).reduce(function (results, item) {
      var ticket = selected[item];
      console.log(ticket, item, selected);

      if (ticket) {
        return results + meta[ticket.type].price;
      }

      return results;
    }, 0);
  };

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["MovieTitle"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "M\u1EAFt bi\u1EBFc")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["TicketWrapper"], null, tickets.map(function (item, rowIndex) {
    var seatRow = String.fromCharCode(65 + rowIndex);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      key: 'row' + rowIndex
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, seatRow), item.map(function (_item, colIndex) {
      if (_item.isPicked) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["ColPicked"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        key: 'col' + colIndex,
        onClick: function onClick() {
          return onTicketSelect(rowIndex, colIndex);
        },
        type: _item.type,
        selected: !!selected[rowIndex + "_" + colIndex]
      }, !!selected[rowIndex + "_" + colIndex] ? seatRow + " " + (colIndex + 1) : '');
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["TicketStatus"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, types.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      style: {
        color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"][item]["default"]
      }
    }, item, ": ", meta[item].price);
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["PaymentInfo"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.name), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "movie-time"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.start), "|", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.end)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "movie-total"
  }, calculatePrice())), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["PaymentActions"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "Combo"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "Thanh to\xE1n")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.808426f0dbfceb3d63dd.hot-update.js.map