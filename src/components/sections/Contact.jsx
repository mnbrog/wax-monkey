// File: src/components/sections/Contact.jsx

import React from "react";
import {
  Section,
  SectionTitle,
  ContactLayout,
  ContactInfo,
  Subheading,
  ContactParagraph,
  ContactDetail,
  ContactForm,
  PrivacyNote
} from "../styles";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ isPulsePage = false }) => (
  <Section id="contact">
    <SectionTitle>Get in Touch</SectionTitle>

    <ContactLayout>
      <ContactInfo>
        <Subheading>
            {isPulsePage ? "Let’s Talk Cardiovascular Wellness." : "Let’s Talk Fall Prevention."}
        </Subheading>
        <ContactParagraph>
            {isPulsePage 
                ? "Learn how our Pulse4Pulse assessment program can benefit your practice and patients. Contact us for a demo, billing details, or to discuss how to implement this turnkey service."
                : "Interested in learning more about how our Fall Risk Assessment program can benefit your practice and patients? Contact us for a demo, pricing information, or a partnership discussion."
            }
        </ContactParagraph>

        <ContactDetail>
          <FaEnvelope color="#3FD0C9" size="24" />
          <a href="mailto:info@uprightmedicalsolutions.com">info@uprightmedicalsolutions.com</a>
        </ContactDetail>

        <ContactDetail>
          <FaPhoneAlt color="#3FD0C9" size="24" />
          <a href="tel:+1-800-555-1234">+1 (800) 555-1234</a>
        </ContactDetail>
      </ContactInfo>
      
      <ContactForm>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Work Email" required />
        
        <select name="subject" required defaultValue="">
          <option value="" disabled>I'm interested in...</option>
          <option value="Pulse4Pulse Inquiry">Pulse4Pulse Inquiry</option>
          <option value="Fall Risk Inquiry">Fall Risk Inquiry</option>
          <option value="Demo Request">Requesting a Demo</option>
          <option value="Pricing Information">Pricing Information</option>
          <option value="Partnership">Partnership Inquiry</option>
          <option value="General Question">General Question</option>
        </select>

        <textarea name="message" rows="5" placeholder="Your message..."></textarea>
        <button type="submit">Send Message</button>

        <PrivacyNote>
          We respect your privacy and will never share your information.
        </PrivacyNote>
      </ContactForm>
    </ContactLayout>
  </Section>
);

export default Contact;