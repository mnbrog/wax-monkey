import React from "react"
import { Section, SectionTitle, ContactForm } from "../styles"

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Contact</SectionTitle>
    <p style={{textAlign: 'center', marginBottom: '1rem'}}>
      <strong>Let’s Talk Fall Prevention.</strong>
    </p>
    <p style={{textAlign: 'center', marginBottom: '1rem'}}>
      Interested in learning more? Contact us for a demo or partnership discussion.
    </p>
    <ContactForm>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea rows="4" placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </ContactForm>
  </Section>
)

export default Contact
