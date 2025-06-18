import React from "react";
import { Section, SectionTitle, InfoBox, Paragraph } from "../styles";

const FraResearch = () => (
  <Section id="fra-research">
    <SectionTitle>FRA Research</SectionTitle>
    <InfoBox>
      <Paragraph>
        The webFCE Fall Risk Assessment (FRA) consists of 12 basic evaluative tools that calculate an individual’s risk (and probability) of falling. These measurements were obtained from a comprehensive fall risk “meta-study” that examined over 2,200 fall risk studies and we examined over 12,700 population norm studies found in the literature.
      </Paragraph>
      <Paragraph>
        Utilizing a statistical method of post-test probability each individual measurement will calculate a basic estimation of the probability that a future fall is likely. However, when all twelve tools are combined via complicated mathematical algorithms a much more accurate determination of fall risk is obtained.
      </Paragraph>
      <Paragraph>
        This post-test probability determination ultimately enables the clinician the ability to predict the probability of falls over a 12 month time frame for different diverse populations: healthy young, middle-aged, and older populations.
      </Paragraph>
    </InfoBox>
  </Section>
);

export default FraResearch;
