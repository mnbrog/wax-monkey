// File: src/components/sections/PulseEligibility.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  LeadParagraph,
  BulletList
} from "../styles";

const PulseEligibility = () => (
  <Section id="pulse-eligibility">
    <SectionTitle>Who Is Eligible?</SectionTitle>
    <LeadParagraph style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
      Any one of the following conditions means a patient can benefit from Pulse4Pulse screening. About 60% of adult patients meet at least one criterion.
    </LeadParagraph>
    <div style={{ maxWidth: '800px', margin: '0 auto', columns: '2', gap: '2rem' }}>
        <BulletList>
            <li>Diabetes</li>
            <li>High Blood Pressure</li>
            <li>High Cholesterol</li>
            <li>Sleep Apnea</li>
            <li>Erectile Dysfunction</li>
            <li>Chronic Kidney Disease</li>
            <li>Heart Disease</li>
            <li>History of nicotine use</li>
            <li>Numbness in extremities</li>
            <li>Leg pain when walking</li>
        </BulletList>
    </div>
  </Section>
);

export default PulseEligibility;