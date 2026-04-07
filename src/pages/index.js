import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import {
  Section,
  SectionTitle,
  AboutIntroWrapper,
  MissionStatement,
  HeroButton,
  HeroVideo,
  BackgroundVideo,
  HeroContent
} from "../components/styles";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProductCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #eaecef;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Cooper Black", serif;
  font-style: italic;
  font-weight: 700;
  color: #0a2640;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #334d6e;
  margin-bottom: 1.5rem;
`;

const EmbedWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin: 1rem 0 1.5rem;
  background: #f8fafc;

  iframe {
    width: 100%;
    border: 0;
    display: block;
  }

  .tiktok-embed {
    margin: 0 auto !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
`;

/* 🔥 TikTok Embed */
const TikTokEmbed = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.tiktokEmbedLoad) {
      window.tiktokEmbedLoad();
    }
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@waxmonkeyband/video/7509204474959842606"
      data-video-id="7509204474959842606"
      style={{ maxWidth: "100%", minWidth: "100%" }}
    >
      <section>
        <a
          target="_blank"
          rel="noreferrer"
          title="@waxmonkeyband"
          href="https://www.tiktok.com/@waxmonkeyband?refer=embed"
        >
          @waxmonkeyband
        </a>
      </section>
    </blockquote>
  );
};

/* 🔥 Instagram Iframely Embed */
const InstagramEmbed = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://iframely.net/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://iframely.net/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="iframely-embed">
      <div
        className="iframely-responsive"
        style={{ height: "170px", paddingBottom: 0 }}
      >
        <a
          href="https://www.instagram.com/reel/DLp2Y-KgPu_/"
          data-iframely-url="https://iframely.net/a05h8Kj7?theme=light"
        />
      </div>
    </div>
  );
};

const HomePage = () => (
  <>
    <meta
      name="google-site-verification"
      content="YNZP5SDN7XocdqXz-pA1QKWTgdSgxo_Z8CGbZFCEx_E"
    />
    <GlobalStyles />
    <Nav active="home" />

    <main>
      <HeroVideo id="intro">
        <BackgroundVideo
          autoPlay
          loop
          muted
          playsInline
          poster="/images/porch+pic.jpg"
          src="https://youtu.be/ivRSnX2bd_c"
          type="video/mp4"
        />
        <HeroContent>
          <AboutIntroWrapper>
            <SectionTitle style={{ color: "#fff" }}>
              Wax Monkey
            </SectionTitle>

            <MissionStatement style={{ color: "#fff" }}>
              A 5-piece jam band from Birmingham, Alabama blending southern
              rock, psychedelic sound, and improvisational jams.
            </MissionStatement>

            <HeroButton
              href="#products"
              style={{ color: "#fff", borderColor: "#fff" }}
            >
              Follow Us
            </HeroButton>
          </AboutIntroWrapper>
        </HeroContent>
      </HeroVideo>

      <Section id="products">
        <SectionTitle>Follow Us</SectionTitle>

        <ProductGrid>
          {/* INSTAGRAM */}
          <ProductCard>
            <div>
              <ProductTitle>Instagram</ProductTitle>
              <ProductDescription>
                Latest reel from Wax Monkey.
              </ProductDescription>

              <EmbedWrapper>
                <InstagramEmbed />
              </EmbedWrapper>
            </div>

            <HeroButton
              href="https://www.instagram.com/waxmonkey"
              target="_blank"
              rel="noreferrer"
            >
              View Instagram
            </HeroButton>
          </ProductCard>
{/* YOUTUBE */}
          <ProductCard>
            <div>
              <ProductTitle>YouTube</ProductTitle>
              <ProductDescription>
                Full performances and sessions.
              </ProductDescription>

              <EmbedWrapper>
                <iframe
                  src="https://www.youtube.com/embed/ivRSnX2bd_c"
                  height="220"
                  title="Wax Monkey YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </EmbedWrapper>
            </div>

            <HeroButton
              href="https://www.youtube.com/@waxmonkeyband"
              target="_blank"
              rel="noreferrer"
            >
              View YouTube
            </HeroButton>
          </ProductCard>
          
          {/* TIKTOK */}
          <ProductCard>
            <div>
              <ProductTitle>TikTok</ProductTitle>
              <ProductDescription>
                Short jams and live clips.
              </ProductDescription>

              <EmbedWrapper>
                <TikTokEmbed />
              </EmbedWrapper>
            </div>

            <HeroButton
              href="https://www.tiktok.com/@waxmonkeyband"
              target="_blank"
              rel="noreferrer"
            >
              View TikTok
            </HeroButton>
          </ProductCard>

          
        </ProductGrid>
      </Section>

      <Contact />
    </main>

    <Footer />
  </>
);

export default HomePage;