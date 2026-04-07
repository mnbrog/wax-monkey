import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Page wrapper to ensure white background across all devices
const PageWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 90%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  line-height: 1.6;
  background-color: #ffffff;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 0rem auto;
  display: block;
`;

const Heading = styled.h1`
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  margin-bottom: 1rem;
  
  font-family: "Cooper Black", serif;
  font-style: italic;
  font-weight: 700;

  color: #000000;
  letter-spacing: 0.5px;
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  margin-bottom: 1.5rem;
  color: #333333;
`;

const AboutPage = () => (
  <>
    <GlobalStyles />
    <Nav active="about" />
    <Main>
      {/* Logo */}
      <Logo
        src="/images/Porch+pic.jpg"
        alt="Wax Monkey Logo"
      />
      <Heading>About Us</Heading>
      <Paragraph>
        Wax Monkey is a 5-piece jam band composed of childhood friends hailing from Birmingham, AL. The members first started jamming together in high school before officially forming the band in 2023 while attending their freshman year at the University of Alabama. Rooted in the spirit of musical exploration, Wax Monkey draws inspiration from legends such as The Grateful Dead, Phish, The Allman Brothers Band and many more — blending aspects of southern rock, psychedelic rock, and improvisational jams.
      </Paragraph>
    </Main>
    <Footer />
  </>
);

export default AboutPage;
