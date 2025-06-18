// File: src/components/NeedScreen.js

import React from "react";
import {
  Section,
  SectionTitle,
  AttentionBox,
  ImpactText,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
  QuoteText,
  BridgeText,
  SourceText,
  HeroButton
} from "../styles";

const NeedScreen = () => (
  <Section id="need-screen">
    <SectionTitle>Need to Screen</SectionTitle>

    <AttentionBox>
      <ImpactText>
        For older adults, falls are a critical threat.
      </ImpactText>

      <QuoteText>
        It’s not just about preventing a fall; it’s about preserving independence and ensuring peace of mind for the entire family.
      </QuoteText>

      <StatGrid>
        <StatCard>
          <StatNumber>1 in 4</StatNumber>
          <StatLabel>Seniors experience a fall each year.</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>1 in 5</StatNumber>
          <StatLabel>Falls result in a serious injury like a broken bone or head trauma.</StatLabel>
        </StatCard>
        <StatCard className="serious">
          <StatNumber>#1</StatNumber>
          <StatLabel>Leading cause of injury-related death among older adults.</StatLabel>
        </StatCard>
      </StatGrid>

      <BridgeText>
        Understanding the risk is the first step. The next is taking decisive, evidence-based action to prevent it.
      </BridgeText>
      
      <HeroButton href="#solution-screen">
        See How We Can Help
      </HeroButton>

      <SourceText>
        All statistics sourced from the Centers for Disease Control and Prevention (CDC). <a href="https://www.cdc.gov/falls/data-research/index.html" target="_blank" rel="noopener noreferrer">Learn more.</a>
      </SourceText>

    </AttentionBox>
  </Section>
);

export default NeedScreen;