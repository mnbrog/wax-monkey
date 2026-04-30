"use strict";
exports.id = "component---src-pages-shows-js";
exports.ids = ["component---src-pages-shows-js"];
exports.modules = {

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer.withConfig({
  displayName: "Footer__FooterWrapper"
})(["text-align:center;padding:3rem 1.5rem;margin-top:4rem;background:#0a2640;color:#ffffff;"]);
const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__FooterContent"
})(["max-width:1000px;margin:0 auto;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Footer__Title"
})(["font-family:\"Cooper Black\",serif;font-style:italic;font-size:2rem;margin-bottom:1rem;"]);
const MerchText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__MerchText"
})(["color:#cbd5e1;margin-bottom:2rem;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__Row"
})(["display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;text-align:center;@media (max-width:768px){grid-template-columns:1fr;}"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__Section"
})([""]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__Label"
})(["font-weight:700;margin-bottom:0.75rem;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__Text"
})(["margin:0.25rem 0;color:#cbd5e1;"]);
const Socials = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__Socials"
})(["display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;"]);
const SocialLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Footer__SocialLink"
})(["width:52px;height:52px;border-radius:999px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);display:inline-flex;align-items:center;justify-content:center;color:#ffffff;transition:transform 0.2s ease,background 0.2s ease,color 0.2s ease;&:hover{transform:translateY(-2px) scale(1.06);background:#3fd0c9;color:#0a2640;}svg{width:24px;height:24px;display:block;fill:currentColor;}"]);
const FooterBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Footer__FooterBottom"
})(["margin-top:2rem;font-size:0.85rem;color:#94a3b8;"]);
const InstagramIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z"
}));
const TikTokIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M14.6 2h2.45c.2 1.7 1.2 3.2 2.75 4.05v2.5a7.15 7.15 0 0 1-3.45-1V14.3a5.3 5.3 0 1 1-5.3-5.3c.35 0 .7.03 1.05.1v2.55a2.7 2.7 0 1 0 1.5 2.45V2Z"
}));
const YouTubeIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M21.58 7.19a2.99 2.99 0 0 0-2.1-2.11C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.48.58A2.99 2.99 0 0 0 2.42 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .42 4.81 2.99 2.99 0 0 0 2.1 2.11c1.88.58 7.48.58 7.48.58s5.6 0 7.48-.58a2.99 2.99 0 0 0 2.1-2.11c.28-1.59.42-3.2.42-4.81s-.14-3.22-.42-4.81ZM10.2 15.1V8.9l5.4 3.1-5.4 3.1Z"
}));
const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, "Wax Monkey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MerchText, null, "Hoodies, Tie Dyes, and More!!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, null, "Follow Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Socials, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialLink, {
  href: "https://www.instagram.com/waxmonkey",
  target: "_blank",
  rel: "noreferrer",
  "aria-label": "Wax Monkey Instagram"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InstagramIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialLink, {
  href: "https://www.tiktok.com/@waxmonkeyband",
  target: "_blank",
  rel: "noreferrer",
  "aria-label": "Wax Monkey TikTok"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TikTokIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SocialLink, {
  href: "https://www.youtube.com/@waxmonkeyband",
  target: "_blank",
  rel: "noreferrer",
  "aria-label": "Wax Monkey YouTube"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(YouTubeIcon, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, null, "Booking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "luke@atlas-touring.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "garrett@atlas-touring.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label, null, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, "Based out of Tuscaloosa, AL"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterBottom, null, "\xA9 ", new Date().getFullYear(), " Wax Monkey. All Rights Reserved.")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout/GlobalStyles.jsx":
/*!************************************************!*\
  !*** ./src/components/Layout/GlobalStyles.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;margin:0;padding:50;}body{font-family:'Inter',sans-serif;background:#F7F9FA;color:#0A2640;line-height:1.5;}a{text-decoration:none;color:inherit;}ul{list-style:none;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-thumb{background-color:#000000;border-radius:4px;}"]));

/***/ }),

/***/ "./src/components/Nav.jsx":
/*!********************************!*\
  !*** ./src/components/Nav.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/styles.js");


const Nav = ({
  active
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.NavBar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.LogoWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/wax-monkey-logo.jpg",
    alt: "Wax Monkey Logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Hamburger, {
    onClick: () => setIsOpen(!isOpen)
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.NavLinks, {
    className: isOpen ? "open" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: active === "home" ? "active" : ""
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/shows",
    className: active === "shows" ? "active" : ""
  }, "Shows")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/about",
    className: active === "about" ? "active" : ""
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.bonfire.com/store/wax-monkey/",
    className: active === "merch" ? "active" : ""
  }, "Merch")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact",
    className: active === "booking" ? "active" : ""
  }, "Booking"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./src/components/sections/shows.jsx":
/*!*******************************************!*\
  !*** ./src/components/sections/shows.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./src/components/styles.js");
/* harmony import */ var _data_shows_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/shows.json */ "./src/data/shows.json");




const ShowsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__ShowsWrapper"
})(["margin-top:3rem;display:flex;flex-direction:column;gap:3rem;"]);
const MonthGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__MonthGroup"
})(["display:flex;flex-direction:column;gap:1.25rem;"]);
const MonthHeading = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.withConfig({
  displayName: "shows__MonthHeading"
})(["font-size:2rem;font-family:\"Cooper Black\",serif;font-style:italic;font-weight:700;color:#0a2640;margin:0;"]);
const ShowsList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__ShowsList"
})(["display:flex;flex-direction:column;gap:1rem;"]);
const ShowCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__ShowCard"
})(["background:#ffffff;border-radius:14px;border:1px solid #eaecef;padding:1.25rem 1.5rem;box-shadow:0 4px 12px rgba(0,0,0,0.05);transition:transform 0.25s ease,box-shadow 0.25s ease;display:flex;justify-content:space-between;align-items:center;gap:1rem;&:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.08);}@media (max-width:900px){flex-direction:column;align-items:flex-start;}"]);
const ShowInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__ShowInfo"
})(["display:grid;grid-template-columns:150px 1fr;gap:1rem;width:100%;@media (max-width:900px){grid-template-columns:1fr;}"]);
const InfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__InfoBlock"
})(["display:flex;flex-direction:column;"]);
const InfoLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "shows__InfoLabel"
})(["font-size:0.72rem;text-transform:uppercase;letter-spacing:0.14em;color:#7a8ca5;margin-bottom:0.35rem;"]);
const InfoValue = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "shows__InfoValue"
})(["font-size:1rem;color:#0a2640;font-weight:600;letter-spacing:0.02em;"]);
const VenueWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__VenueWrap"
})(["display:flex;flex-direction:column;"]);
const VenueTop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "shows__VenueTop"
})(["display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap;"]);
const VenueName = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h4.withConfig({
  displayName: "shows__VenueName"
})(["margin:0;font-size:1.35rem;font-weight:700;color:#0a2640;"]);
const CityState = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "shows__CityState"
})(["margin:0.35rem 0 0;font-size:1rem;color:#334d6e;"]);
const Badge = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "shows__Badge"
})(["display:inline-flex;align-items:center;padding:0.3rem 0.65rem;border-radius:999px;font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#8a5a00;background:rgba(245,179,1,0.14);border:1px solid rgba(245,179,1,0.28);"]);
const TicketButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
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
const groupedShows = _data_shows_json__WEBPACK_IMPORTED_MODULE_2__.reduce((acc, show) => {
  const month = getMonthLabel(show.date);
  if (!acc[month]) acc[month] = [];
  acc[month].push(show);
  return acc;
}, {});
const Shows = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Section, {
    id: "shows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, null, "Shows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowsWrapper, null, Object.entries(groupedShows).map(([month, monthShows]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MonthGroup, {
    key: month
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MonthHeading, null, month), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowsList, null, monthShows.map((show, index) => {
    const hasTicketLink = Boolean(show.ticketLink);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowCard, {
      key: `${show.date}-${show.city}-${show.venue}-${index}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoLabel, null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoValue, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        opacity: 0.8
      }
    }, show.day), " \xB7", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontWeight: 600
      }
    }, formatDate(show.date)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VenueWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VenueTop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VenueName, null, show.venue), show.featured && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Badge, null, "Low Tickets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CityState, null, show.city, ", ", show.state))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TicketButton, {
      href: hasTicketLink ? show.ticketLink : "#",
      target: hasTicketLink ? "_blank" : undefined,
      rel: hasTicketLink ? "noreferrer" : undefined,
      $disabled: !hasTicketLink
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.HeroButton, {
      as: "span"
    }, hasTicketLink ? "Tickets" : "Tickets Soon")));
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shows);

/***/ }),

/***/ "./src/components/styles.js":
/*!**********************************!*\
  !*** ./src/components/styles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutIntroWrapper: () => (/* binding */ AboutIntroWrapper),
/* harmony export */   BackgroundVideo: () => (/* binding */ BackgroundVideo),
/* harmony export */   BridgeText: () => (/* binding */ BridgeText),
/* harmony export */   BulletList: () => (/* binding */ BulletList),
/* harmony export */   COLORS: () => (/* binding */ COLORS),
/* harmony export */   CTAWrapper: () => (/* binding */ CTAWrapper),
/* harmony export */   CenteredTextColumn: () => (/* binding */ CenteredTextColumn),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   ContactDetail: () => (/* binding */ ContactDetail),
/* harmony export */   ContactForm: () => (/* binding */ ContactForm),
/* harmony export */   ContactInfo: () => (/* binding */ ContactInfo),
/* harmony export */   ContactLayout: () => (/* binding */ ContactLayout),
/* harmony export */   ContactParagraph: () => (/* binding */ ContactParagraph),
/* harmony export */   FeatureCard: () => (/* binding */ FeatureCard),
/* harmony export */   FeatureDescription: () => (/* binding */ FeatureDescription),
/* harmony export */   FeatureGrid: () => (/* binding */ FeatureGrid),
/* harmony export */   FeatureTitle: () => (/* binding */ FeatureTitle),
/* harmony export */   Hamburger: () => (/* binding */ Hamburger),
/* harmony export */   HeroButton: () => (/* binding */ HeroButton),
/* harmony export */   HeroContent: () => (/* binding */ HeroContent),
/* harmony export */   HeroVideo: () => (/* binding */ HeroVideo),
/* harmony export */   IconWrapper: () => (/* binding */ IconWrapper),
/* harmony export */   ImageWrapper: () => (/* binding */ ImageWrapper),
/* harmony export */   ImpactText: () => (/* binding */ ImpactText),
/* harmony export */   LeadParagraph: () => (/* binding */ LeadParagraph),
/* harmony export */   LogoWrapper: () => (/* binding */ LogoWrapper),
/* harmony export */   MemberBio: () => (/* binding */ MemberBio),
/* harmony export */   MemberName: () => (/* binding */ MemberName),
/* harmony export */   MemberPhoto: () => (/* binding */ MemberPhoto),
/* harmony export */   MemberTitle: () => (/* binding */ MemberTitle),
/* harmony export */   MethodologyContainer: () => (/* binding */ MethodologyContainer),
/* harmony export */   MissionStatement: () => (/* binding */ MissionStatement),
/* harmony export */   NavBar: () => (/* binding */ NavBar),
/* harmony export */   NavLinks: () => (/* binding */ NavLinks),
/* harmony export */   PrivacyNote: () => (/* binding */ PrivacyNote),
/* harmony export */   ProcessStep: () => (/* binding */ ProcessStep),
/* harmony export */   ProcessStepper: () => (/* binding */ ProcessStepper),
/* harmony export */   QuoteText: () => (/* binding */ QuoteText),
/* harmony export */   SecondaryButton: () => (/* binding */ SecondaryButton),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   SectionTitle: () => (/* binding */ SectionTitle),
/* harmony export */   SourceText: () => (/* binding */ SourceText),
/* harmony export */   StatCard: () => (/* binding */ StatCard),
/* harmony export */   StatGrid: () => (/* binding */ StatGrid),
/* harmony export */   StatLabel: () => (/* binding */ StatLabel),
/* harmony export */   StatNumber: () => (/* binding */ StatNumber),
/* harmony export */   StepDescription: () => (/* binding */ StepDescription),
/* harmony export */   StepIcon: () => (/* binding */ StepIcon),
/* harmony export */   StepTitle: () => (/* binding */ StepTitle),
/* harmony export */   Subheading: () => (/* binding */ Subheading),
/* harmony export */   TabButton: () => (/* binding */ TabButton),
/* harmony export */   TabContainer: () => (/* binding */ TabContainer),
/* harmony export */   TabContent: () => (/* binding */ TabContent),
/* harmony export */   TeamGrid: () => (/* binding */ TeamGrid),
/* harmony export */   TeamMemberCard: () => (/* binding */ TeamMemberCard),
/* harmony export */   TextColumn: () => (/* binding */ TextColumn),
/* harmony export */   TwoColumnLayout: () => (/* binding */ TwoColumnLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const COLORS = {
  darkBlue: "#0a2640",
  teal: "#0a2640",
  cardBg: "#FFFFFF",
  lightTeal: "#A7F3D0",
  seriousRed: "#EF4444",
  neutralGray: "#6B7280",
  lightBg: "#F9FAFB"
};
const NavBar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "styles__NavBar"
})(["position:sticky;top:0;width:100%;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);z-index:200;display:flex;flex-direction:column;align-items:center;padding-bottom:0.5rem;"], COLORS.cardBg);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__LogoWrapper"
})(["margin:1rem 0 0.5rem;img{display:block;height:100px;width:auto;}@media (min-width:600px){img{height:140px;}}"]);
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styles__NavLinks"
})(["list-style:none;display:flex;gap:1rem;margin:0;padding:0.5rem 1rem;position:relative;> li{position:relative;}a,button{display:block;padding:0.5rem 0.75rem;font-size:1rem;background:none;border:none;text-align:left;cursor:pointer;width:100%;color:", ";transition:color 0.2s ease-in-out,font-weight 0.2s ease-in-out;font-family:\"Cooper Black\",serif;font-style:italic;font-weight:700;letter-spacing:0.5px;}a:hover,button:hover{background:#f2f4f5;color:", ";}a.active{color:", ";font-weight:600;text-decoration:underline;}ul{display:none;position:absolute;top:100%;left:0;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);margin:0;padding:0;list-style:none;min-width:200px;z-index:10;}li:hover > ul,li:focus-within > ul{display:block;}ul li{position:relative;white-space:nowrap;}ul li ul{top:0;left:100%;}@media (max-width:768px){flex-direction:column;align-items:flex-start;position:fixed;top:0;left:0;height:100vh;width:260px;transform:translateX(-100%);transition:transform 0.2s ease;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);&.open{transform:translateX(0);}> li{width:100%;}> li > ul{position:static;box-shadow:none;}> li.open > ul{display:block;}ul li ul{position:static;}}"], COLORS.darkBlue, COLORS.teal, COLORS.teal, COLORS.cardBg, COLORS.cardBg);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styles__Section"
})(["max-width:1100px;margin:5rem auto;padding:2rem 1.5rem;scroll-margin-top:200px;"]);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "styles__SectionTitle"
})(["font-size:clamp(1.75rem,5vw,2.25rem);margin-bottom:1rem;text-align:center;font-family:\"Cooper Black\",serif;font-style:italic;font-weight:700;"]);
const BulletList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styles__BulletList"
})(["margin-left:1.25rem;li{margin-bottom:0.5rem;position:relative;padding-left:1rem;&::before{content:\"\u2022\";position:absolute;left:0;color:", ";}}"], COLORS.teal);
const HeroVideo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styles__HeroVideo"
})(["position:relative;height:70vh;min-height:450px;overflow:hidden;display:flex;align-items:center;justify-content:center;@media (max-width:768px){height:auto;min-height:0;padding:6rem 1rem;}"]);
const BackgroundVideo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].video.withConfig({
  displayName: "styles__BackgroundVideo"
})(["position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%);z-index:1;object-fit:cover;filter:brightness(0.6);"]);
const HeroButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "styles__HeroButton"
})(["background:", ";color:#ffffff;padding:0.75rem 1.5rem;border-radius:4px;font-weight:600;transition:background 0.2s ease-in-out;display:inline-block;margin-top:2rem;&:hover{background:#64ffda;}"], COLORS.teal);
const ContactForm = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({
  displayName: "styles__ContactForm"
})(["display:flex;flex-direction:column;gap:0.75rem;max-width:400px;margin:0 auto;input,textarea{padding:0.5rem;border:1px solid #ccc;border-radius:4px;}button{background:", ";color:#fff;padding:0.5rem 1rem;border:none;border-radius:4px;cursor:pointer;font-weight:600;}"], COLORS.teal);
const ImpactText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "styles__ImpactText"
})(["font-size:clamp(1.25rem,3vw,2rem);font-weight:700;line-height:1.2;color:", ";margin-bottom:0.75rem;"], COLORS.darkBlue);
const QuoteText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__QuoteText"
})(["font-style:italic;font-size:clamp(0.7rem,1.5vw,1rem);line-height:1.6;color:#334D6E;max-width:550px;margin:0 auto 1.5rem auto;position:relative;padding:0 1rem;&::before,&::after{content:'\"'; font-size: 2rem; color: ", "; position: absolute; line-height: 1; } &::before { top: -0.25rem; left: 0; } &::after { bottom: -1rem; right: 0; }"], COLORS.lightTeal);
const StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__StatGrid"
})(["display:grid;gap:1.5rem;width:100%;margin:1.5rem 0;grid-template-columns:repeat(3,1fr);@media (max-width:768px){grid-template-columns:1fr;}"]);
const StatNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__StatNumber"
})(["font-size:clamp(1.2rem,3.5vw,1.8rem);font-weight:700;color:", ";line-height:0.7;transition:color 0.3s ease-in-out;"], COLORS.darkBlue);
const StatLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__StatLabel"
})(["font-size:0.85rem;color:#334D6E;line-height:1.4;"]);
const StatCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__StatCard"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background:transparent;padding:0.75rem;border-top:3px solid ", ";transition:transform 0.3s ease;&.serious{border-top-color:", ";}&:hover{transform:translateY(-5px);", "{color:", ";}}"], COLORS.lightTeal, COLORS.seriousRed, StatNumber, COLORS.seriousRed);
const BridgeText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__BridgeText"
})(["font-size:clamp(0.7rem,1.8vw,1rem);font-weight:500;max-width:550px;margin:0 auto 1.25rem auto;line-height:1.6;"]);
const SourceText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__SourceText"
})(["font-size:0.5rem;color:", ";margin-top:3rem;a{color:", ";text-decoration:underline;transition:color 0.2s ease;&:hover{color:", ";}}"], COLORS.neutralGray, COLORS.neutralGray, COLORS.teal);
const TwoColumnLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__TwoColumnLayout"
})(["display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;margin-bottom:4rem;@media (max-width:768px){grid-template-columns:1fr;}"]);
const LeadParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__LeadParagraph"
})(["font-size:clamp(1rem,2.5vw,1.1rem);line-height:1.6;color:#334D6E;margin-bottom:1.5rem;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ImageWrapper"
})(["img{width:100%;height:auto;border-radius:16px;box-shadow:0 8px 32px rgba(10,38,64,0.1);}"]);
const FeatureGrid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__FeatureGrid"
})(["display:grid;gap:1.5rem;scroll-margin-top:400px;grid-template-columns:1fr;@media (min-width:600px){grid-template-columns:repeat(2,1fr);}@media (min-width:992px){grid-template-columns:repeat(4,1fr);}"]);
const FeatureCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__FeatureCard"
})(["background:", ";border-radius:12px;border:1px solid #EAECEF;padding:1.5rem;text-align:center;box-shadow:0 1px 2px rgba(0,0,0,0.03),0 4px 8px rgba(0,0,0,0.05);transition:box-shadow 0.3s ease,transform 0.3s ease;&:hover{transform:translateY(-5px);box-shadow:0 2px 4px rgba(0,0,0,0.05),0 8px 16px rgba(0,0,0,0.08);}"], COLORS.cardBg);
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__IconWrapper"
})(["display:inline-flex;align-items:center;justify-content:center;padding:1rem;background-color:", ";border-radius:50%;margin-bottom:1rem;color:", ";font-size:1.75rem;"], COLORS.lightTeal, COLORS.darkBlue);
const FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "styles__FeatureTitle"
})(["font-size:1.25rem;margin-bottom:0.5rem;font-weight:600;"]);
const FeatureDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__FeatureDescription"
})(["font-size:0.95rem;line-height:1.5;color:#334D6E;"]);
const TextColumn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__TextColumn"
})(["display:flex;flex-direction:column;justify-content:center;h2,p{text-align:center;}a{align-self:center;margin-top:1.5rem;}"]);
const MethodologyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__MethodologyContainer"
})(["margin-top:4rem;"]);
const StepIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__StepIcon"
})(["display:inline-flex;align-items:center;justify-content:center;width:70px;height:70px;background-color:", ";border-radius:50%;margin-bottom:1rem;color:", ";font-size:2rem;box-shadow:0 4px 12px rgba(10,38,64,0.2);"], COLORS.darkBlue, COLORS.cardBg);
const StepTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "styles__StepTitle"
})(["font-size:1.25rem;margin-bottom:0.5rem;font-weight:600;"]);
const StepDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__StepDescription"
})(["font-size:0.95rem;line-height:1.5;color:#334D6E;"]);
const SecondaryButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "styles__SecondaryButton"
})(["display:inline-block;background:transparent;color:", ";padding:0.75rem 1.5rem;border-radius:8px;font-weight:600;border:1px solid ", ";transition:background 0.2s ease,color 0.2s ease,border-color 0.2s ease;&:hover{background:", ";border-color:", ";}"], COLORS.darkBlue, COLORS.neutralGray, COLORS.lightBg, COLORS.darkBlue);
const TabContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__TabContainer"
})(["display:flex;justify-content:center;margin-bottom:2.5rem;border-bottom:1px solid #EAECEF;"]);
const TabButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styles__TabButton"
})(["padding:1rem 1.5rem;font-size:1.125rem;font-weight:600;color:", ";background:none;border:none;cursor:pointer;position:relative;transition:color 0.3s ease;&::after{content:\"\";position:absolute;bottom:-1px;left:0;right:0;height:3px;background-color:", ";transform:", ";transition:transform 0.3s ease-in-out;}&:hover{color:", ";}"], props => props.active ? COLORS.darkBlue : COLORS.neutralGray, COLORS.teal, props => props.active ? "scaleX(1)" : "scaleX(0)", COLORS.darkBlue);
const TabContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__TabContent"
})(["animation:fadeIn 0.5s ease-in-out;@keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}"]);
const CTAWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__CTAWrapper"
})(["text-align:center;margin-top:4rem;padding:3rem 1.5rem;background:", ";border-radius:16px;box-shadow:0 8px 32px rgba(10,38,64,0.08);"], COLORS.cardBg);
const AboutIntroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__AboutIntroWrapper"
})(["text-align:center;max-width:800px;margin:0 auto 4rem auto;"]);
const MissionStatement = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "styles__MissionStatement"
})(["font-size:1.5rem;font-weight:500;line-height:1.6;color:#334D6E;margin-bottom:2rem;"]);
const TeamGrid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__TeamGrid"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;"]);
const TeamMemberCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__TeamMemberCard"
})(["background:", ";border-radius:16px;padding:2rem;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.05);transition:transform 0.3s ease,box-shadow 0.3s ease;&:hover{transform:translateY(-5px);box-shadow:0 8px 24px rgba(0,0,0,0.08);}"], COLORS.cardBg);
const MemberPhoto = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styles__MemberPhoto"
})(["width:140px;height:140px;border-radius:50%;object-fit:cover;margin-bottom:1.5rem;border:4px solid ", ";"], COLORS.lightTeal);
const MemberName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "styles__MemberName"
})(["font-size:1.35rem;font-weight:700;margin-bottom:0.25rem;"]);
const MemberTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__MemberTitle"
})(["font-size:1rem;color:", ";font-weight:600;margin-bottom:1rem;"], COLORS.teal);
const MemberBio = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__MemberBio"
})(["font-size:0.95rem;line-height:1.5;color:#334D6E;"]);
const ContactLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ContactLayout"
})(["display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-top:3rem;@media (max-width:820px){grid-template-columns:1fr;}"]);
const ContactInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ContactInfo"
})([""]);
const Subheading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "styles__Subheading"
})(["font-size:1.75rem;font-weight:600;line-height:1.3;margin-bottom:1rem;"]);
const ContactParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__ContactParagraph"
})(["font-size:1.125rem;color:#334D6E;margin-bottom:2rem;"]);
const ContactDetail = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ContactDetail"
})(["display:flex;align-items:center;gap:1rem;margin-bottom:1rem;font-size:1.1rem;font-weight:500;a{color:", ";text-decoration:none;transition:color 0.2s ease;&:hover{color:", ";}}"], COLORS.darkBlue, COLORS.teal);
const PrivacyNote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__PrivacyNote"
})(["font-size:0.875rem;color:", ";margin-top:1rem;text-align:center;"], COLORS.neutralGray);
const CenteredTextColumn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__CenteredTextColumn"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;"]);
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Hamburger"
})(["display:none;cursor:pointer;padding:0.5rem;z-index:201;div{width:25px;height:3px;background-color:", ";margin:4px 0;transition:0.4s;}@media (max-width:768px){display:block;}"], COLORS.darkBlue);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__CloseIcon"
})(["position:relative;width:25px;height:25px;&::before,&::after{content:\"\";position:absolute;top:11px;left:0;width:25px;height:3px;background-color:", ";}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}"], COLORS.darkBlue);
const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__HeroContent"
})(["position:relative;z-index:2;color:#ffffff;max-width:950px;margin:0 auto;padding:0 1rem;text-align:center;h2{font-size:clamp(2.25rem,6vw,3.5rem);margin-bottom:1rem;}h3{font-size:clamp(1.1rem,4vw,1.35rem);font-weight:500;line-height:1.6;max-width:800px;margin:0 auto 2rem auto;}"]);
const ProcessStepper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ProcessStepper"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:3rem;"]);
const ProcessStep = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ProcessStep"
})(["text-align:center;position:relative;padding:0 1rem;&:not(:last-child)::after{content:\"\u2192\";font-size:2.5rem;color:", ";position:absolute;top:30px;right:-40px;@media (max-width:820px){content:\"\u2193\";top:auto;bottom:-50px;left:50%;transform:translateX(-50%);}}"], COLORS.lightTeal);

/***/ }),

/***/ "./src/data/shows.json":
/*!*****************************!*\
  !*** ./src/data/shows.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"date":"2026-05-28","day":"Thursday","city":"Jacksonville","state":"FL","venue":"The Blue Jay","featured":false,"ticketLink":""},{"date":"2026-05-29","day":"Friday","city":"Charleston","state":"SC","venue":"The Pour House Deck","featured":false,"ticketLink":""},{"date":"2026-06-03","day":"Wednesday","city":"Wilmington","state":"NC","venue":"Bowstring","featured":false,"ticketLink":""},{"date":"2026-06-04","day":"Thursday","city":"Richmond","state":"VA","venue":"Get Tight Lounge","featured":false,"ticketLink":""},{"date":"2026-06-05","day":"Friday","city":"Roanoke","state":"VA","venue":"Martin\'s Downtown","featured":false,"ticketLink":""},{"date":"2026-06-06","day":"Saturday","city":"Boone","state":"NC","venue":"Boone Saloon","featured":false,"ticketLink":""},{"date":"2026-06-12","day":"Friday","city":"Chattanooga","state":"TN","venue":"Hifi Clydes","featured":false,"ticketLink":""},{"date":"2026-06-13","day":"Saturday","city":"Roanoke","state":"VA","venue":"NokeFest","featured":false,"ticketLink":""},{"date":"2026-06-14","day":"Sunday","city":"Asheville","state":"NC","venue":"Sierra Nevada Brewing","featured":false,"ticketLink":""},{"date":"2026-06-25","day":"Thursday","city":"Franklin","state":"TN","venue":"Kimbros","featured":false,"ticketLink":""},{"date":"2026-06-26","day":"Friday","city":"Lexington","state":"KY","venue":"The Burl","featured":false,"ticketLink":""},{"date":"2026-06-27","day":"Saturday","city":"Rothbury","state":"MI","venue":"Electric Forest","featured":false,"ticketLink":""},{"date":"2026-06-28","day":"Sunday","city":"Rothbury","state":"MI","venue":"Electric Forest","featured":false,"ticketLink":""},{"date":"2026-07-10","day":"Friday","city":"Charlotte","state":"NC","venue":"The Evening Muse","featured":false,"ticketLink":""},{"date":"2026-07-11","day":"Saturday","city":"Norfolk","state":"VA","venue":"The Annex","featured":false,"ticketLink":""},{"date":"2026-07-15","day":"Wednesday","city":"Marshfield","state":"MA","venue":"Levitate Backyard","featured":false,"ticketLink":""},{"date":"2026-07-16","day":"Thursday","city":"New Bedford","state":"MA","venue":"Cisco Brewing","featured":false,"ticketLink":""},{"date":"2026-07-17","day":"Friday","city":"Hyannis","state":"MA","venue":"Neptune\'s","featured":false,"ticketLink":""},{"date":"2026-07-18","day":"Saturday","city":"Stowe","state":"VT","venue":"Shakedown Lounge","featured":false,"ticketLink":""},{"date":"2026-07-19","day":"Sunday","city":"Hampton Beach","state":"NH","venue":"Wally\'s","featured":false,"ticketLink":""},{"date":"2026-07-21","day":"Tuesday","city":"Nantucket","state":"MA","venue":"Cisco Brewing","featured":false,"ticketLink":""},{"date":"2026-07-22","day":"Wednesday","city":"Nantucket","state":"MA","venue":"Cisco Brewing","featured":false,"ticketLink":""},{"date":"2026-07-24","day":"Friday","city":"New York City","state":"NY","venue":"Berlin","featured":false,"ticketLink":""},{"date":"2026-07-25","day":"Saturday","city":"Washington","state":"DC","venue":"Pearl Street Warehouse","featured":false,"ticketLink":""},{"date":"2026-07-26","day":"Sunday","city":"Ocean City","state":"MD","venue":"Fager\'s Island","featured":false,"ticketLink":""},{"date":"2026-07-28","day":"Tuesday","city":"Chicago","state":"IL","venue":"Subterranean Downstairs","featured":false,"ticketLink":""},{"date":"2026-07-30","day":"Thursday","city":"Appleton","state":"WI","venue":"Mile of Music Festival","featured":false,"ticketLink":""},{"date":"2026-07-31","day":"Friday","city":"Appleton","state":"WI","venue":"Mile of Music Festival","featured":false,"ticketLink":""},{"date":"2026-08-01","day":"Saturday","city":"Appleton","state":"WI","venue":"Mile of Music Festival","featured":false,"ticketLink":""},{"date":"2026-08-02","day":"Sunday","city":"Swisher","state":"IA","venue":"Cedar Ridge Distillery","featured":false,"ticketLink":""},{"date":"2026-08-04","day":"Tuesday","city":"Des Moines","state":"IA","venue":"Locals","featured":false,"ticketLink":""},{"date":"2026-08-05","day":"Wednesday","city":"Omaha","state":"NE","venue":"Reverb Lounge","featured":false,"ticketLink":""},{"date":"2026-08-07","day":"Friday","city":"Evergreen","state":"CO","venue":"Little Bear Saloon","featured":false,"ticketLink":""},{"date":"2026-08-08","day":"Saturday","city":"Steamboat","state":"CO","venue":"Schmiggity\'s","featured":false,"ticketLink":""},{"date":"2026-08-14","day":"Friday","city":"Denver","state":"CO","venue":"Cervantes\' Other Side","featured":false,"ticketLink":""},{"date":"2026-08-15","day":"Saturday","city":"Littleton","state":"CO","venue":"Farm House Music Series","featured":false,"ticketLink":""},{"date":"2026-08-16","day":"Sunday","city":"Colorado Springs","state":"CO","venue":"Vultures","featured":false,"ticketLink":""},{"date":"2026-08-17","day":"Monday","city":"Carbondale","state":"CO","venue":"Steve\'s Guitars","featured":false,"ticketLink":""},{"date":"2026-08-19","day":"Wednesday","city":"Fort Collins","state":"CO","venue":"Aggie Theatre","featured":false,"ticketLink":""},{"date":"2026-08-20","day":"Thursday","city":"Boulder","state":"CO","venue":"Fox Theatre","featured":false,"ticketLink":""},{"date":"2026-08-21","day":"Friday","city":"Eagle","state":"CO","venue":"Moes BBQ","featured":false,"ticketLink":""},{"date":"2026-08-22","day":"Saturday","city":"Telluride","state":"CO","venue":"The Alibi","featured":false,"ticketLink":""}]');

/***/ }),

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
/* harmony import */ var _components_Layout_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/GlobalStyles */ "./src/components/Layout/GlobalStyles.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _components_sections_shows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/shows */ "./src/components/sections/shows.jsx");





const ShowsPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  active: "shows"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_shows__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-shows-js.js.map