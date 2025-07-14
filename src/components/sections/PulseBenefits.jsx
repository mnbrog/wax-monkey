// File: src/components/sections/PulseBenefits.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  TwoColumnLayout,
  BulletList,
  LeadParagraph,
} from "../styles";
import { FaUserShield, FaDollarSign } from 'react-icons/fa';


const PulseBenefits = () => (
  <Section id="pulse-benefits">
    <SectionTitle>Benefits & Value Proposition</SectionTitle>
    <TwoColumnLayout>
        <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaUserShield /> For Patients</h3>
            <LeadParagraph>Improved preventative care and better health outcomes.</LeadParagraph>
            <BulletList>
                <li>Early identification of disease leads to timely intervention.</li>
                <li>Better understanding of their personal health status.</li>
                <li>Improved compliance with treatment plans.</li>
                <li>Peace of mind from proactive risk detection.</li>
            </BulletList>
        </div>
        <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaDollarSign /> For Your Practice</h3>
            <LeadParagraph>A new revenue stream with no startup costs.</LeadParagraph>
            <BulletList>
                <li>New revenue averaging ~$160–$170 net per screening.</li>
                <li>No capital investment or extra staff burden required.</li>
                <li>Minimal workflow disruption (we provide staff and admin).</li>
                <li>Improved patient outcomes enhance practice reputation.</li>
            </BulletList>
        </div>
    </TwoColumnLayout>
  </Section>
);

export default PulseBenefits;