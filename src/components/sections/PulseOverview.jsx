// File: src/components/sections/PulseOverview.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  TwoColumnLayout,
  TextColumn,
  LeadParagraph,
  ImageWrapper,
  FeatureGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
  HeroButton
} from "../styles";
import { FaStethoscope, FaUserMd, FaFileInvoiceDollar, FaHeartbeat } from 'react-icons/fa';

const PulseOverview = () => (
  <Section id="pulse-overview">
    <SectionTitle>What is Pulse4Pulse?</SectionTitle>
    <LeadParagraph style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
      Pulse4Pulse is a turnkey cardiovascular wellness assessment service provided at no cost to your practice. We supply the medical assistant and equipment, conduct in-office testing, deliver real-time results, and handle all the billing and support.
    </LeadParagraph>
    
    <FeatureGrid>
      <FeatureCard>
        <IconWrapper><FaUserMd /></IconWrapper>
        <FeatureTitle>Trained Technician</FeatureTitle>
        <FeatureDescription>
          We provide a certified medical assistant to conduct the tests in your office.
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper><FaStethoscope /></IconWrapper>
        <FeatureTitle>Advanced Equipment</FeatureTitle>
        <FeatureDescription>
          All necessary ANS/ABI/Sudomotor testing equipment is supplied by Pulse4Pulse.
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper><FaHeartbeat /></IconWrapper>
        <FeatureTitle>Real-Time Results</FeatureTitle>
        <FeatureDescription>
          Get immediate, actionable results to review with your patient during their visit.
        </FeatureDescription>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper><FaFileInvoiceDollar /></IconWrapper>
        <FeatureTitle>Billing Handled</FeatureTitle>
        <FeatureDescription>
          We manage the billing process so you can focus on patient care.
        </FeatureDescription>
      </FeatureCard>
    </FeatureGrid>
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <HeroButton href="#pulse-process">See How It Works</HeroButton>
    </div>
  </Section>
);

export default PulseOverview;