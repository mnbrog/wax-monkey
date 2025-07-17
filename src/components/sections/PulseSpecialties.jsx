import React from "react";
import {
  Section,
  SectionTitle,
  LeadParagraph,
  CTAWrapper,
  HeroButton
} from "../styles";

const PulseSpecialties = () => (
  <Section id="pulse-specialties">
    <CTAWrapper>
      <SectionTitle>Applicable To A Wide Range of Specialties</SectionTitle>
      <LeadParagraph>
        Pulse4Pulse is ideal for use in cardiology, primary care, endocrinology, neurology, pain management, geriatrics, and many other specialties to uncover underlying contributors to patient conditions.
      </LeadParagraph>
      <HeroButton href="/#contact">Contact Us</HeroButton>
    </CTAWrapper>
  </Section>
);

export default PulseSpecialties;
