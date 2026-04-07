import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 3rem 1.5rem;
  margin-top: 4rem;
  background: #0A2640;
  color: #ffffff;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Cooper Black", serif;
  font-style: italic;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const MerchText = styled.p`
  color: #cbd5e1;
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div``;

const Label = styled.p`
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  margin: 0.25rem 0;
  color: #cbd5e1;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  a {
    font-size: 1.5rem;
    color: #ffffff;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: #3FD0C9;
    }
  }
`;

const FooterBottom = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #94a3b8;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContent>

      <Title>Wax Monkey</Title>
      <MerchText>Hoodies, Tie Dyes, and More!!!</MerchText>

      <Row>

        {/* FOLLOW US */}
        <Section>
          <Label>Follow Us</Label>
          <Socials>
            <a href="#" target="_blank" rel="noreferrer">📸</a>
            <a href="#" target="_blank" rel="noreferrer">🎵</a>
            <a href="#" target="_blank" rel="noreferrer">▶️</a>
          </Socials>
        </Section>

        {/* BOOKING */}
        <Section>
          <Label>Booking</Label>
          <Text>luke@atlas-touring.com</Text>
          <Text>garrett@atlas-touring.com</Text>
        </Section>

        {/* LOCATION */}
        <Section>
          <Label>Location</Label>
          <Text>Based out of Tuscaloosa, AL</Text>
        </Section>

      </Row>

      <FooterBottom>
        © {new Date().getFullYear()} Wax Monkey. All Rights Reserved.
      </FooterBottom>

    </FooterContent>
  </FooterWrapper>
);

export default Footer;