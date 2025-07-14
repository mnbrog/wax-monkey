import React from "react";
import { HeroVideo, BackgroundVideo, HeroContent, HeroButton } from "../styles";

const PulseHero = () => (
  <HeroVideo id="hero">
    <BackgroundVideo
      autoPlay
      loop
      muted
      playsInline
      poster="/images/pulse-hero-fallback.jpg"
      src="/videos/pfp-hero.mp4" 
      type="video/mp4"
      // This style crops 15% from the top and 15% from the bottom of the video.
      // You can change the percentage to adjust the cropping.
      style={{
        clipPath: 'inset(15% 0 15% 0)'
      }}
    />
    <HeroContent>
      <h1>Turnkey Cardiovascular Wellness Assessment – $0 Cost to Your Practice</h1>
      <p>A comprehensive, in-office cardiovascular screening service provided by Upright Medical, with a trained medical assistant and billing support included.</p>
      <HeroButton href="#pulse-need">Learn More</HeroButton>
    </HeroContent>
  </HeroVideo>
);

export default PulseHero;