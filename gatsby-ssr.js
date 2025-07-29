const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <React.Fragment key="gtag">
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRRKEY5NP8"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PRRKEY5NP8');
        `,
        }}
      />
    </React.Fragment>,
  ])
}
