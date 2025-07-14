// File: src/pages/pulse4pulse.jsx

import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles"; // Import GlobalStyles
import Nav from "../components/Nav";
import PulseHero from "../components/sections/PulseHero";
import PulseNeed from "../components/sections/PulseNeed";
import PulseOverview from "../components/sections/PulseOverview";
import PulseProcess from "../components/sections/PulseProcess";
import PulseEligibility from "../components/sections/PulseEligibility";
import PulseAssessment from "../components/sections/PulseAssessment";
import PulseBenefits from "../components/sections/PulseBenefits";
import PulseSpecialties from "../components/sections/PulseSpecialties";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

// A simple styled footer for this page
const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  background: #EAECEF;
  color: #334D6E;
`;

const Pulse4Pulse = () => (
  <>
    <GlobalStyles /> {/* This component injects all global styles */}
    <Nav active="pulse4pulse" />
    <main>
      <PulseHero />
      <PulseNeed />
      <PulseOverview />
      <PulseProcess />
      <PulseEligibility />
      <PulseAssessment />
      <PulseBenefits />
      <PulseSpecialties />
      <About />
      <Contact isPulsePage={true} />
    </main>
    <Footer>
      <p>&copy; {new Date().getFullYear()} Upright Medical Solutions. All Rights Reserved.</p>
    </Footer>
  </>
);

export default Pulse4Pulse;