// File: src/components/sections/NeedScreen.jsx

import React from "react";
// Import all the necessary styled components, including the new CenteredTextColumn
import {
  Section,
  SectionTitle,
  TwoColumnLayout,
  ImageWrapper,
  CenteredTextColumn, // Import the new component
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

const NeedScreen = React.forwardRef((props, ref) => (
  <Section id="need-screen" ref={ref}>
    <SectionTitle>The Unseen Risk in Plain Sight</SectionTitle>

    <TwoColumnLayout>
      
      {/* The image is now in the first column (on the left) */}
      <ImageWrapper>
        <img src="../images/FRA.jpg" alt="Caring healthcare professional assisting a senior patient" />
      </ImageWrapper>

      {/* The text content is now in the second column, wrapped in our new CenteredTextColumn */}
      <CenteredTextColumn>
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
        
        <HeroButton href="#fra-overview">
          See How We Can Help
        </HeroButton>

        <SourceText>
          All statistics sourced from the Centers for Disease Control and Prevention (CDC). <a href="https://www.cdc.gov/falls/data-research/index.html" target="_blank" rel="noopener noreferrer">Learn more.</a>
        </SourceText>
      </CenteredTextColumn>

    </TwoColumnLayout>
  </Section>
));

export default NeedScreen;