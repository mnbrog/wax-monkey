// File: src/components/sections/PulseProcess.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  MethodologyContainer,
  ProcessStepper,
  ProcessStep,
  StepIcon,
  StepTitle,
  StepDescription
} from "../styles";
import { FaSignInAlt, FaClipboardList, FaProcedures, FaChartLine, FaCalendarCheck, FaFileSignature } from 'react-icons/fa';

const PulseProcess = () => (
  <Section id="pulse-process">
    <SectionTitle>How Pulse4Pulse Works</SectionTitle>
    <MethodologyContainer>
      <ProcessStepper style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <ProcessStep>
          <StepIcon>1</StepIcon>
          <StepTitle>Patient Appointment</StepTitle>
          <StepDescription>
            Patient arrives for their regular appointment.
          </StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon>2</StepIcon>
          <StepTitle>Intake Form</StepTitle>
          <StepDescription>
            Patient completes a simple intake form to determine eligibility.
          </StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon>3</StepIcon>
          <StepTitle>In-Office Testing</StepTitle>
          <StepDescription>
            Our technician conducts the cardiovascular tests in an exam room.
          </StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon>4</StepIcon>
          <StepTitle>Instant Results</StepTitle>
          <StepDescription>
            Results are immediately available for you to review with the patient.
          </StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon>5</StepIcon>
          <StepTitle>Follow-Up</StepTitle>
          <StepDescription>
            A follow-up visit is scheduled if needed based on the results.
          </StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon>6</StepIcon>
          <StepTitle>Billing Handled</StepTitle>
          <StepDescription>
            The practice receives reimbursements; we invoice per test.
          </StepDescription>
        </ProcessStep>
      </ProcessStepper>
    </MethodologyContainer>
  </Section>
);

export default PulseProcess;