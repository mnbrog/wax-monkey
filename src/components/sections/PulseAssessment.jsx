// File: src/components/sections/PulseAssessment.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  LeadParagraph,
  FeatureGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription
} from "../styles";
import { FaBrain, FaWalking, FaThermometerHalf } from 'react-icons/fa';

const PulseAssessment = () => (
  <Section id="pulse-assessment">
    <SectionTitle>What Does the Test Include?</SectionTitle>
    <LeadParagraph style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        Our non-invasive, 20-minute assessment runs three tests simultaneously to provide a comprehensive view of cardiovascular health.
    </LeadParagraph>
    <FeatureGrid style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <FeatureCard>
            <IconWrapper><FaBrain /></IconWrapper>
            <FeatureTitle>Autonomic Nervous System (ANS) Testing</FeatureTitle>
            <FeatureDescription>
            Measures heart rate variability and autonomic adaptability using blood pressure cuffs, EKG leads, and SpO2 sensors during guided breathing.
            </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
            <IconWrapper><FaWalking /></IconWrapper>
            <FeatureTitle>Ankle-Brachial Index (ABI) Testing</FeatureTitle>
            <FeatureDescription>
            Checks for early signs of peripheral vascular disease using blood pressure cuffs on the arms and legs.
            </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
            <IconWrapper><FaThermometerHalf /></IconWrapper>
            <FeatureTitle>Sudomotor Testing</FeatureTitle>
            <FeatureDescription>
            Detects early neuropathy and microvascular disease by measuring sweat gland activity on the patient’s hands and feet.
            </FeatureDescription>
        </FeatureCard>
    </FeatureGrid>
  </Section>
);

export default PulseAssessment;