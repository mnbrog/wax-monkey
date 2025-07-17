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
      {/* Responsive grid with styles now in styles.js */}
      <ProcessStepper>
        <ProcessStep>
          <StepIcon><FaSignInAlt size="1.5em" /></StepIcon>
          <StepTitle>Patient Appointment</StepTitle>
          <StepDescription>Patient arrives for their regular appointment.</StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon><FaClipboardList size="1.5em" /></StepIcon>
          <StepTitle>Intake Form</StepTitle>
          <StepDescription>Patient completes a simple intake form to determine eligibility.</StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon><FaProcedures size="1.5em" /></StepIcon>
          <StepTitle>In-Office Testing</StepTitle>
          <StepDescription>Our technician conducts the cardiovascular tests in an exam room.</StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon><FaChartLine size="1.5em" /></StepIcon>
          <StepTitle>Instant Results</StepTitle>
          <StepDescription>Results are immediately available for you to review with the patient.</StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon><FaCalendarCheck size="1.5em" /></StepIcon>
          <StepTitle>Follow-Up</StepTitle>
          <StepDescription>A follow-up visit is scheduled if needed based on the results.</StepDescription>
        </ProcessStep>
        <ProcessStep>
          <StepIcon><FaFileSignature size="1.5em" /></StepIcon>
          <StepTitle>Billing Handled</StepTitle>
          <StepDescription>The practice receives reimbursements; we invoice per test.</StepDescription>
        </ProcessStep>
      </ProcessStepper>
    </MethodologyContainer>
  </Section>
);

export default PulseProcess;