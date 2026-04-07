
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\mnbro\\wax-monkey\\src\\pages\\about.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\mnbro\\wax-monkey\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\mnbro\\wax-monkey\\src\\pages\\index.js"))
}

