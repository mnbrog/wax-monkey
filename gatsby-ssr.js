const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="icon"
      href="/images/wax-monkey-logo.jpg"
      key="favicon"
    />,
  ]);
};