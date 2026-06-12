import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Shows from "../components/sections/shows";
import Merch from "../components/sections/Merch";
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

const AlbumReleaseCard = styled.div`
  margin: clamp(0.85rem, 2vh, 1.25rem) auto 0;
  width: min(92vw, 620px);
  padding: clamp(0.9rem, 2vw, 1.25rem);
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.46);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 480px) {
    width: min(94vw, 420px);
    padding: 0.85rem;
    border-radius: 14px;
  }
`;

const AlbumEyebrow = styled.p`
  margin: 0 0 0.25rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-size: clamp(0.62rem, 1.7vw, 0.72rem);
  font-weight: 800;
`;

const AlbumTitle = styled.h2`
  margin: 0 0 0.45rem;
  color: #fff;
  font-family: "Cooper Black", serif;
  font-style: italic;
  font-size: clamp(1.8rem, 6vw, 3.35rem);
  line-height: 0.95;
  text-align: center;
`;

const MusicButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0.9rem 0 0.85rem;

  @media (max-width: 430px) {
    gap: 0.5rem;
  }
`;

const MusicButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  font-size: clamp(0.78rem, 2vw, 0.9rem);
  font-weight: 800;
  line-height: 1;
  transition: transform 0.25s ease, opacity 0.25s ease;
  background: ${({ $variant }) =>
    $variant === "spotify" ? "#1DB954" : "#fff"};
  color: #111;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  @media (max-width: 430px) {
    width: 100%;
    min-width: 0;
    padding: 0.75rem 1rem;
  }
`;

const HeroMusicEmbeds = styled.div`
  width: 100%;
  max-width: 560px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 0.7rem;
  margin-top: 0.2rem;

  iframe {
    width: 100%;
    border: 0;
    border-radius: 12px;
    display: block;
    background: #000;
  }

  .spotify-player {
    height: 152px;
  }

  .apple-player {
    height: 175px;
  }

  @media (max-width: 640px) {
    max-width: 420px;
    grid-template-columns: 1fr;

    .spotify-player {
      height: 152px;
    }

    .apple-player {
      height: 175px;
    }
  }

  @media (max-width: 380px) {
    .spotify-player {
      height: 140px;
    }

    .apple-player {
      height: 165px;
    }
  }
`;

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
      <HeroVideo
        id="intro"
        style={{
          minHeight: "100svh",
          overflow: "hidden"
        }}
      >
        <BackgroundVideo
          autoPlay
          loop
          muted
          playsInline
          poster="/images/heroimg.jpg"
          src="/videos/hero-wm.mp4"
          type="video/mp4"
        />

        <HeroContent
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "clamp(6rem, 12vh, 8rem)",
            paddingBottom: "clamp(2rem, 6vh, 4rem)",
            boxSizing: "border-box",
            overflow: "visible"
          }}
        >
          <AboutIntroWrapper
            style={{
              textAlign: "center",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <SectionTitle
              style={{
                color: "#fff",
                lineHeight: 1.05,
                marginTop: 0,
                paddingTop: "0.15em"
              }}
            >
              Wax Monkey
            </SectionTitle>

            <MissionStatement style={{ color: "#fff" }}>
              A 5-piece jam band from Birmingham, Alabama blending southern
              rock, psychedelic sound, and improvisational jams.
            </MissionStatement>

            <AlbumReleaseCard>
              <AlbumEyebrow>New Album Out Now</AlbumEyebrow>

              <AlbumTitle>Encompass</AlbumTitle>

              <MissionStatement style={{ color: "#fff", marginBottom: 0 }}>
                Stream the new Wax Monkey album now on Spotify and Apple Music.
              </MissionStatement>

              <MusicButtonRow>
                <MusicButton
                  $variant="spotify"
                  href="https://open.spotify.com/album/72cQh9jRMPDkRj6kfRsbQZ?si=89ac7deca78e478b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen on Spotify
                </MusicButton>

                <MusicButton
                  href="https://music.apple.com/us/album/encompass/6777398019"
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen on Apple Music
                </MusicButton>
              </MusicButtonRow>

              <HeroMusicEmbeds>
                <iframe
                  className="spotify-player"
                  title="Encompass by Wax Monkey on Spotify"
                  src="https://open.spotify.com/embed/album/72cQh9jRMPDkRj6kfRsbQZ?utm_source=generator&si=89ac7deca78e478b"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />

                <iframe
                  className="apple-player"
                  title="Encompass by Wax Monkey on Apple Music"
                  allow="autoplay *; encrypted-media *; fullscreen *"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/encompass/6777398019"
                />
              </HeroMusicEmbeds>
            </AlbumReleaseCard>

            <HeroButton
              href="#products"
              style={{
                color: "#fff",
                borderColor: "#fff",
                marginTop: "1.5rem"
              }}
            >
              Follow Us
            </HeroButton>
          </AboutIntroWrapper>
        </HeroContent>
      </HeroVideo>

      <Shows />

      <Section id="products">
        <SectionTitle>Follow Us</SectionTitle>

        <ProductGrid>
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

          <ProductCard>
            <div>
              <ProductTitle>YouTube</ProductTitle>

              <ProductDescription>
                Full performances and sessions.
              </ProductDescription>

              <div style={{ width: "100%", aspectRatio: "16 / 9" }}>
                <iframe
                  src="https://www.youtube.com/embed/dPB4KC2Pb_c?autoplay=1&mute=1&rel=0&modestbranding=1"
                  title="Birds of a Feather - Phish Wax Monkey Cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px"
                  }}
                />
              </div>
            </div>

            <HeroButton
              href="https://www.youtube.com/@waxmonkeyband"
              target="_blank"
              rel="noreferrer"
            >
              View YouTube
            </HeroButton>
          </ProductCard>

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

      <Merch />
      <Contact />
    </main>

    <Footer />
  </>
);

export default HomePage;