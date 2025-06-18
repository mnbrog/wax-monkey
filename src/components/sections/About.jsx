// File: src/components/sections/About.jsx

import React from "react";
// Import all the necessary styled components
import {
  Section,
  SectionTitle,
  AboutIntroWrapper,
  MissionStatement,
  TeamGrid,
  TeamMemberCard,
  MemberPhoto,
  MemberName,
  MemberTitle,
  MemberBio
} from "../styles";

// --- Create your team data here ---
const teamData = [
  {
    name: "John Doe",
    title: "Co-Founder & CEO",
    bio: "With over 20 years in clinical practice, John founded Upright Medical to bridge the gap between reactive treatment and proactive, preventative care.",
    // Replace with actual image paths
    photoUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop" 
  },
  {
    name: "Jane Smith",
    title: "Co-Founder & CTO",
    bio: "Jane is the architect of our evidence-based platform, dedicated to creating technology that is both powerful for clinicians and simple to use.",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop"
  }
  // Add more team members here if you like
];

const About = () => (
  <Section id="about">
    <AboutIntroWrapper>
      <SectionTitle>About Upright Medical Solutions</SectionTitle>
      <MissionStatement>
        Our mission is to empower healthcare providers with innovative, value-based solutions that significantly reduce patient falls, enhance safety, and preserve independence.
      </MissionStatement>
    </AboutIntroWrapper>

    <SectionTitle as="h2" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
      Meet Our Leadership
    </SectionTitle>

    <TeamGrid>
      {teamData.map((member, index) => (
        <TeamMemberCard key={index}>
          <MemberPhoto src={member.photoUrl} alt={`Photo of ${member.name}`} />
          <MemberName>{member.name}</MemberName>
          <MemberTitle>{member.title}</MemberTitle>
          <MemberBio>{member.bio}</MemberBio>
        </TeamMemberCard>
      ))}
    </TeamGrid>
  </Section>
);

export default About;