import React from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Shows from "../components/sections/shows";

const ShowsPage = () => (
  <>
    <GlobalStyles />
    <Nav active="shows" />

    <main>
      <Shows />
    </main>

    <Footer />
  </>
);

export default ShowsPage;
