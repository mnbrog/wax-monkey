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
  width: 80%;
  max-width: 200px;
  height: auto;
  margin: 2rem auto;
  display: block;
`;

const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  color: #000000;
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
        src="/images/Upright Medical Solutions Logo.png"
        alt="Upright Medical Solutions Logo"
      />
      <Heading>About Upright Medical Solutions</Heading>
      <Paragraph>
        With over <strong>50 years of healthcare experience</strong> Upright Medical Solutions has grown nationwide led by a dedicated team of experts, providing providing clinicians
ranging from single-practicing physicians to
healthcare systems with the tools needed to optimize
patient care.
      </Paragraph>
      <Paragraph>
        Our mission is simple: to empower healthier communities by putting patients at the heart of every decision.
      </Paragraph>
    </Main>
    <Footer />
  </>
);

export default AboutPage;
