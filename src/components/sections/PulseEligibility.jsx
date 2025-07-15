import React from "react";
import styled from "styled-components";
import {
  Section,
  SectionTitle,
  LeadParagraph,
  BulletList as StyledBulletList
} from "../styles";

// Wrapper for two bullet lists, becomes one column on mobile
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Reset list styling for consistent padding
const BulletList = styled(StyledBulletList)`
  margin: 0;
  padding-left: 1.25rem;
`;

const PulseEligibility = () => (
  <Section id="pulse-eligibility">
    <SectionTitle>Who Is Eligible?</SectionTitle>
    <LeadParagraph style={{
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 2rem'
    }}>
      Any one of the following conditions means a patient can benefit from Pulse4Pulse screening. About 60% of adult patients meet at least one criterion.
    </LeadParagraph>

    <ListContainer>
      <BulletList>
        <li>Diabetes</li>
        <li>High Blood Pressure</li>
        <li>High Cholesterol</li>
        <li>Sleep Apnea</li>
        <li>Erectile Dysfunction</li>
      </BulletList>
      <BulletList>
        <li>Chronic Kidney Disease</li>
        <li>Heart Disease</li>
        <li>History of nicotine use</li>
        <li>Numbness in extremities</li>
        <li>Leg pain when walking</li>
      </BulletList>
    </ListContainer>
  </Section>
);

export default PulseEligibility;
