"use strict";
exports.id = "component---src-pages-shows-js";
exports.ids = ["component---src-pages-shows-js"];
exports.modules = {

/***/ "./src/pages/shows.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/shows.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../data/shows.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




const ShowsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__ShowsWrapper"
})(["margin-top:3rem;display:flex;flex-direction:column;gap:3rem;"]);
const MonthGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__MonthGroup"
})(["display:flex;flex-direction:column;gap:1.25rem;"]);
const MonthHeading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "shows__MonthHeading"
})(["font-size:2rem;font-family:\"Cooper Black\",serif;font-style:italic;font-weight:700;color:#0a2640;margin:0;"]);
const ShowsList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__ShowsList"
})(["display:flex;flex-direction:column;gap:1rem;"]);
const ShowCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__ShowCard"
})(["background:#ffffff;border-radius:14px;border:1px solid #eaecef;padding:1.25rem 1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.05);transition:transform 0.25s ease,box-shadow 0.25s ease;display:flex;justify-content:space-between;align-items:center;gap:1rem;&:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.08);}@media (max-width:900px){flex-direction:column;align-items:flex-start;}"]);
const ShowInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__ShowInfo"
})(["display:grid;grid-template-columns:120px 130px 1fr;gap:1rem;width:100%;@media (max-width:900px){grid-template-columns:1fr;}"]);
const InfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__InfoBlock"
})(["display:flex;flex-direction:column;"]);
const InfoLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "shows__InfoLabel"
})(["font-size:0.72rem;text-transform:uppercase;letter-spacing:0.14em;color:#7a8ca5;margin-bottom:0.35rem;"]);
const InfoValue = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "shows__InfoValue"
})(["font-size:1rem;color:#0a2640;font-weight:600;"]);
const VenueWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__VenueWrap"
})(["display:flex;flex-direction:column;"]);
const VenueTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "shows__VenueTop"
})(["display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap;"]);
const VenueName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "shows__VenueName"
})(["margin:0;font-size:1.35rem;font-weight:700;color:#0a2640;"]);
const CityState = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "shows__CityState"
})(["margin:0.35rem 0 0;font-size:1rem;color:#334d6e;"]);
const Badge = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "shows__Badge"
})(["display:inline-flex;align-items:center;padding:0.3rem 0.65rem;border-radius:999px;font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#8a5a00;background:rgba(245,179,1,0.14);border:1px solid rgba(245,179,1,0.28);"]);
const TicketButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "shows__TicketButton"
})(["display:inline-flex;align-items:center;justify-content:center;min-width:150px;text-decoration:none;pointer-events:", ";opacity:", ";"], ({
  $disabled
}) => $disabled ? "none" : "auto", ({
  $disabled
}) => $disabled ? 0.6 : 1);
const formatDate = dateString => {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
};
const getMonthLabel = dateString => {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
};
const groupedShows = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../data/shows.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((acc, show) => {
  const month = getMonthLabel(show.date);
  if (!acc[month]) {
    acc[month] = [];
  }
  acc[month].push(show);
  return acc;
}, {});
const Shows = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    id: "shows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, "Shows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowsWrapper, null, Object.entries(groupedShows).map(([month, monthShows]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MonthGroup, {
    key: month
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MonthHeading, null, month), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowsList, null, monthShows.map((show, index) => {
    const hasTicketLink = Boolean(show.ticketLink);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowCard, {
      key: `${show.date}-${show.city}-${show.venue}-${index}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoLabel, null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoValue, null, formatDate(show.date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoLabel, null, "Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoValue, null, show.day)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VenueWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VenueTop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VenueName, null, show.venue), show.featured && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Badge, null, "Special")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CityState, null, show.city, ", ", show.state))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TicketButton, {
      href: hasTicketLink ? show.ticketLink : "#",
      target: hasTicketLink ? "_blank" : undefined,
      rel: hasTicketLink ? "noreferrer" : undefined,
      $disabled: !hasTicketLink
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      as: "span"
    }, hasTicketLink ? "Tickets" : "Tickets Soon")));
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shows);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-shows-js.js.map