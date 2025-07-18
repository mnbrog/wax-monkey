"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
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
})(["text-align:center;padding:2rem;margin-top:4rem;background:#EAECEF;color:#334D6E;"]);
const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", new Date().getFullYear(), " Upright Medical Solutions. All Rights Reserved."));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;margin:0;padding:50;}body{font-family:'Inter',sans-serif;background:#F7F9FA;color:#0A2640;line-height:1.5;}a{text-decoration:none;color:inherit;}ul{list-style:none;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-thumb{background-color:#3FD0C9;border-radius:4px;}"]));

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
    src: "/images/Upright Medical Solutions Logo.png",
    alt: "Upright Medical Solutions"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Hamburger, {
    onClick: () => setIsOpen(!isOpen)
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.NavLinks, {
    className: isOpen ? "open" : ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: active === "home" ? "active" : ""
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: `dropdown-toggle ${active === "fall-risk" || active === "pulse4pulse" ? "active" : ""}`
  }, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "dropdown-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/fall-risk",
    className: active === "fall-risk" ? "active" : ""
  }, "Fall Risk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/Pulse4Pulse",
    className: active === "pulse4pulse" ? "active" : ""
  }, "Pulse4Pulse")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/about",
    className: active === "about" ? "active" : ""
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/#contact",
    className: active === "contact" ? "active" : ""
  }, "Contact"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

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
// File: src/components/styles/index.js


const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  cardBg: "#FFFFFF",
  // FIX 1: Added missing color definitions
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
})(["list-style:none;display:flex;gap:1rem;margin:0;padding:0.5rem 1rem;position:relative;> li{position:relative;}a,button{display:block;padding:0.5rem 0.75rem;font-size:1rem;background:none;border:none;text-align:left;cursor:pointer;width:100%;color:", ";transition:color 0.2s ease-in-out,font-weight 0.2s ease-in-out;}a:hover,button:hover{background:#f2f4f5;color:", ";}a.active{color:", ";font-weight:600;text-decoration:underline;}ul{display:none;position:absolute;top:100%;left:0;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);margin:0;padding:0;list-style:none;min-width:200px;z-index:10;}li:hover > ul,li:focus-within > ul{display:block;}ul li{position:relative;white-space:nowrap;}ul li ul{top:0;left:100%;}@media (max-width:768px){flex-direction:column;align-items:flex-start;position:fixed;top:0;left:0;height:100vh;width:260px;transform:translateX(-100%);transition:transform 0.2s ease;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);&.open{transform:translateX(0);}> li{width:100%;}> li > ul{position:static;box-shadow:none;}> li.open > ul{display:block;}ul li ul{position:static;}}"], COLORS.darkBlue, COLORS.teal, COLORS.teal, COLORS.cardBg, COLORS.cardBg);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styles__Section"
})(["max-width:1100px;margin:5rem auto;padding:2rem 1.5rem;scroll-margin-top:200px;"]);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "styles__SectionTitle"
})(["font-size:clamp(1.75rem,5vw,2.25rem);margin-bottom:1rem;text-align:center;font-weight:700;"]);
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

// --- STYLES FOR THE "NEED SCREEN" SECTION ---

const ImpactText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "styles__ImpactText"
})(["font-size:clamp(1.25rem,3vw,2rem);font-weight:700;line-height:1.2;color:", ";margin-bottom:0.75rem;"], COLORS.darkBlue);
const QuoteText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__QuoteText"
})(["font-style:italic;font-size:clamp(0.7rem,1.5vw,1rem);line-height:1.6;color:#334D6E;max-width:550px;margin:0 auto 1.5rem auto;position:relative;padding:0 1rem;&::before,&::after{content:'\"'; font-size: 2rem; color: ", "; position: absolute; line-height: 1; } &::before { top: -0.25rem; left: 0; } &::after { bottom: -1rem; right: 0; }"], COLORS.lightTeal);

// Recommended responsive 3-column grid
const StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__StatGrid"
})(["display:grid;gap:1.5rem;width:100%;margin:1.5rem 0;grid-template-columns:repeat(3,1fr);@media (max-width:768px){grid-template-columns:1fr;}"]);

// Define StatNumber FIRST to prevent initialization errors
const StatNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__StatNumber"
})(["font-size:clamp(1.2rem,3.5vw,1.8rem);font-weight:700;color:", ";line-height:.7;transition:color 0.3s ease-in-out;"], COLORS.darkBlue);
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

// Find and replace the existing ProcessStepper with this version

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
})(["padding:1rem 1.5rem;font-size:1.125rem;font-weight:600;color:", ";background:none;border:none;cursor:pointer;position:relative;transition:color 0.3s ease;&::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:3px;background-color:", ";transform:", ";transition:transform 0.3s ease-in-out;}&:hover{color:", ";}"], props => props.active ? COLORS.darkBlue : COLORS.neutralGray, COLORS.teal, props => props.active ? 'scaleX(1)' : 'scaleX(0)', COLORS.darkBlue);
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
// Find and replace the existing ProcessStepper with this version

const CenteredTextColumn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__CenteredTextColumn"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;"]);
// ... (existing styles)

const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Hamburger"
})(["display:none;cursor:pointer;padding:0.5rem;z-index:201;div{width:25px;height:3px;background-color:", ";margin:4px 0;transition:0.4s;}@media (max-width:768px){display:block;}"], COLORS.darkBlue);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__CloseIcon"
})(["&::before,&::after{content:\"\";position:absolute;width:25px;height:3px;background-color:", ";}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}"], COLORS.darkBlue);

// ... (rest of the styles)
// ... (existing styles)

const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__HeroContent"
})(["position:relative;z-index:2;color:#ffffff;max-width:950px;margin:0 auto;padding:0 1rem;text-align:center;h2{font-size:clamp(2.25rem,6vw,3.5rem);margin-bottom:1rem;}h3{font-size:clamp(1.1rem,4vw,1.35rem);font-weight:500;line-height:1.6;max-width:800px;margin:0 auto 2rem auto;}"]);
// ... (existing styles)

// Find and replace the existing ProcessStepper with this version
const ProcessStepper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ProcessStepper"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:3rem;"]);
const ProcessStep = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ProcessStep"
})(["text-align:center;position:relative;padding:0 1rem;&:not(:last-child)::after{content:'\u2192';font-size:2.5rem;color:", ";position:absolute;top:30px;right:-40px;@media (max-width:820px){content:'\u2193';top:auto;bottom:-50px;left:50%;transform:translateX(-50%);}}"], COLORS.lightTeal);

// ... (rest of the styles)

// ... (rest of the styles)

/***/ }),

/***/ "./src/pages/about.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/about.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Layout_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/GlobalStyles */ "./src/components/Layout/GlobalStyles.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.jsx");






// Page wrapper to ensure white background across all devices
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "about__PageWrapper"
})(["background-color:#ffffff;min-height:100vh;display:flex;flex-direction:column;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].main.withConfig({
  displayName: "about__Main"
})(["width:90%;max-width:800px;margin:2rem auto;padding:1rem;text-align:center;line-height:1.6;background-color:#ffffff;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img.withConfig({
  displayName: "about__Logo"
})(["width:80%;max-width:200px;height:auto;margin:2rem auto;display:block;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "about__Heading"
})(["font-size:clamp(2rem,5vw,2.5rem);margin-bottom:1rem;color:#000000;"]);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "about__Paragraph"
})(["font-size:clamp(1rem,2.5vw,1.125rem);margin-bottom:1.5rem;color:#333333;"]);
const AboutPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  active: "about"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logo, {
  src: "/images/Upright Medical Solutions Logo.png",
  alt: "Upright Medical Solutions Logo"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, "About Upright Medical Solutions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "With over ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "50 years of healthcare experience"), ", Upright Medical Solutions has grown nationwide led by a dedicated team of experts, providing clinicians ranging from single-practicing physicians to healthcare systems with the tools needed to optimize patient care."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Our mission is simple: to empower healthier communities by putting patients at the heart of every decision.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map