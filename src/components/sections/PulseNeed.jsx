// File: src/components/sections/PulseNeed.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  TwoColumnLayout,
  ImageWrapper,
  CenteredTextColumn,
  ImpactText,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
  BridgeText,
  HeroButton
} from "../styles";

const PulseNeed = () => (
  <Section id="pulse-need">
    <SectionTitle>The Hidden Risk of Cardiovascular Disease</SectionTitle>

    <TwoColumnLayout>
      <ImageWrapper>
        <img src="../images/cardio-patient.jpg" alt="Patient speaking with a doctor about cardiovascular health" />
      </ImageWrapper>

      <CenteredTextColumn>
        <ImpactText>
          Millions of chronic conditions go undiagnosed, but proactive screening can change that.
        </ImpactText>

        <StatGrid>
          <StatCard>
            <StatNumber>1 in 4</StatNumber>
            <StatLabel>Adults with diabetes are undiagnosed (7.2 million Americans).</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50%</StatNumber>
            <StatLabel>Of people with peripheral artery disease are asymptomatic.</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>60%+</StatNumber>
            <StatLabel>Of adult patients qualify for this preventive test.</StatLabel>
          </StatCard>
        </StatGrid>

        <BridgeText>
          Identifying serious conditions early through proactive medicine is the most effective way to treat them.
        </BridgeText>

        <HeroButton href="#pulse-overview">
          Learn How Pulse4Pulse Helps
        </HeroButton>
      </CenteredTextColumn>
    </TwoColumnLayout>
  </Section>
);

export default PulseNeed;