// File: src/components/sections/PulseHero.jsx

import React from "react";
import { HeroVideo, BackgroundVideo, HeroContent, HeroButton } from "../styles";

const PulseHero = () => (
  <HeroVideo id="hero">
    <BackgroundVideo
      autoPlay
      loop
      muted
      playsInline
      poster="/images/pulse-hero-fallback.jpg" // New poster image
      src="/videos/pulse-hero-background.mp4" // New video
      type="video/mp4"
    />
    <HeroContent>
      <h1>Turnkey Cardiovascular Wellness Assessment – $0 Cost to Your Practice</h1>
      <p>A comprehensive, in-office cardiovascular screening service provided by Upright Medical, with a trained medical assistant and billing support included.</p>
      <HeroButton href="#pulse-need">Learn More</HeroButton>
    </HeroContent>
  </HeroVideo>
);

export default PulseHero;