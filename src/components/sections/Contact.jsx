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
import { FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Book Wax Monkey</SectionTitle>

    <ContactLayout style={{ justifyContent: "center" }}>
      <ContactInfo style={{ textAlign: "center", maxWidth: "700px" }}>
        
        <Subheading>Booking & Inquiries</Subheading>

        <ContactParagraph>
          Looking to book Wax Monkey for a show, event, or venue? Fill out the form below and we’ll get back to you.
        </ContactParagraph>

       <ContactDetail style={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
  
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <FaEnvelope color="#6321ee" size="20" />
    <a href="mailto:waxmonkeyband@gmail.com">
      waxmonkeyband@gmail.com
    </a>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
    <FaEnvelope color="#6321ee" size="20" />
    <a href="mailto:luke@atlas-touring.com">
      luke@atlas-touring.com
    </a>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
    <FaEnvelope color="#6321ee" size="20" />
    <a href="mailto:garrett@atlas-touring.com">
      garrett@atlas-touring.com
    </a>
  </div>

</ContactDetail>
      </ContactInfo>

      <ContactForm
        name="booking-form"
        method="POST"
        data-netlify="true"
        style={{ maxWidth: "700px", margin: "0 auto" }}
      >
        <input type="hidden" name="form-name" value="booking-form" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue / Event Name"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="City, State"
        />

        <input
          type="date"
          name="date"
        />

        <select name="inquiry" required defaultValue="">
          <option value="" disabled>Type of Inquiry</option>
          <option value="Booking">Booking</option>
          <option value="Private Event">Private Event</option>
          <option value="Festival">Festival</option>
          <option value="General">General Question</option>
        </select>

        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about the event..."
        />

        <button type="submit">Submit Booking Request</button>

        <PrivacyNote>
          We’ll get back to you as soon as possible.
        </PrivacyNote>
      </ContactForm>
    </ContactLayout>
  </Section>
);

export default Contact;