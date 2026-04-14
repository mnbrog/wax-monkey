import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 3rem 1.5rem;
  margin-top: 4rem;
  background: #0a2640;
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
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.06);
    background: #3fd0c9;
    color: #0a2640;
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
    fill: currentColor;
  }
`;

const FooterBottom = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #94a3b8;
`;

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.6 2h2.45c.2 1.7 1.2 3.2 2.75 4.05v2.5a7.15 7.15 0 0 1-3.45-1V14.3a5.3 5.3 0 1 1-5.3-5.3c.35 0 .7.03 1.05.1v2.55a2.7 2.7 0 1 0 1.5 2.45V2Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.58 7.19a2.99 2.99 0 0 0-2.1-2.11C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.48.58A2.99 2.99 0 0 0 2.42 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .42 4.81 2.99 2.99 0 0 0 2.1 2.11c1.88.58 7.48.58 7.48.58s5.6 0 7.48-.58a2.99 2.99 0 0 0 2.1-2.11c.28-1.59.42-3.2.42-4.81s-.14-3.22-.42-4.81ZM10.2 15.1V8.9l5.4 3.1-5.4 3.1Z" />
  </svg>
);

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <Title>Wax Monkey</Title>
      <MerchText>Hoodies, Tie Dyes, and More!!!</MerchText>

      <Row>
        <Section>
          <Label>Follow Us</Label>
          <Socials>
            <SocialLink
              href="https://www.instagram.com/waxmonkey"
              target="_blank"
              rel="noreferrer"
              aria-label="Wax Monkey Instagram"
            >
              <InstagramIcon />
            </SocialLink>

            <SocialLink
              href="https://www.tiktok.com/@waxmonkeyband"
              target="_blank"
              rel="noreferrer"
              aria-label="Wax Monkey TikTok"
            >
              <TikTokIcon />
            </SocialLink>

            <SocialLink
              href="https://www.youtube.com/@waxmonkeyband"
              target="_blank"
              rel="noreferrer"
              aria-label="Wax Monkey YouTube"
            >
              <YouTubeIcon />
            </SocialLink>
          </Socials>
        </Section>

        <Section>
          <Label>Booking</Label>
          <Text>luke@atlas-touring.com</Text>
          <Text>garrett@atlas-touring.com</Text>
        </Section>

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