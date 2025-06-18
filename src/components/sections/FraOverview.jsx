// File: src/components/sections/FraOverview.jsx

import React from "react";
// Import all the necessary styled components, including TextColumn
import {
  Section,
  SectionTitle,
  TwoColumnLayout,
  TextColumn, // Import the new component
  LeadParagraph,
  ImageWrapper,
  FeatureGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
  HeroButton
} from "../styles";

// Import icons from react-icons
import { FaShieldAlt, FaSearch, FaUserEdit, FaChartLine } from 'react-icons/fa';


const FraOverview = () => (
  <Section id="fra-overview">
    <TwoColumnLayout>
      {/* Use the new TextColumn component to handle the specific layout */}
      <TextColumn>
        {/* The inline style is removed, as TextColumn now handles alignment */}
        <SectionTitle>
          What is Fall Risk Assessment (FRA)?
        </SectionTitle>
        <LeadParagraph>
          Our Fall Risk Assessment (FRA) program is an evidence-based platform that empowers clinicians to mitigate fall risks, identify underlying factors, and improve patient outcomes through data-driven care.
        </LeadParagraph>
        <HeroButton href="#features-benefits">Explore Features</HeroButton>
      </TextColumn>

      <ImageWrapper>
        {/* Replace with a high-quality, relevant image */}
        <img src="../images/docimg.png" alt="Clinician reviewing data on a tablet" />
      </ImageWrapper>
    </TwoColumnLayout>
    
    <FeatureGrid id="features-benefits">
      <FeatureCard>
        <IconWrapper><FaShieldAlt /></IconWrapper>
        <FeatureTitle>Mitigate Risk</FeatureTitle>
        <FeatureDescription>
          Proactively identify and address fall risks before they lead to injury, ensuring patient safety.
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper><FaSearch /></IconWrapper>
        <FeatureTitle>Identify Root Causes</FeatureTitle>
        <FeatureDescription>
          Go beyond the surface to pinpoint the specific underlying factors contributing to a patient's fall risk.
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper><FaUserEdit /></IconWrapper>
        <FeatureTitle>Customize Care Plans</FeatureTitle>
        <FeatureDescription>
          Create tailored plans of care for each patient based on their unique assessment results.
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper><FaChartLine /></IconWrapper>
        <FeatureTitle>Track Outcomes</FeatureTitle>
        <FeatureDescription>
          Monitor patient progress and track outcomes over multiple assessments with clear, visual data.
        </FeatureDescription>
      </FeatureCard>
    </FeatureGrid>
  </Section>
);

export default FraOverview;