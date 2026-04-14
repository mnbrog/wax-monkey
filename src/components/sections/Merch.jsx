import React from "react";
import styled from "styled-components";
import { Section, SectionTitle, HeroButton } from "../styles";
import merchItems from "../../data/merch.json";

const MerchIntro = styled.p`
  max-width: 700px;
  margin: 1rem auto 0;
  text-align: center;
  color: #334d6e;
  font-size: 1.05rem;
  line-height: 1.7;
`;

const MerchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const MerchCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #eaecef;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 4 / 4;
  overflow: hidden;
  background: #f8fafc;
`;

const MerchImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MerchBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0a2640;
  background: rgba(63, 208, 201, 0.16);
  border: 1px solid rgba(63, 208, 201, 0.32);
`;

const MerchTitle = styled.h3`
  margin: 0;
  font-size: 1.35rem;
  font-family: "Cooper Black", serif;
  font-style: italic;
  font-weight: 700;
  color: #0a2640;
`;

const MerchPrice = styled.p`
  margin: 0;
  color: #334d6e;
  font-size: 1rem;
  font-weight: 600;
`;

const MerchActions = styled.div`
  margin-top: auto;
  padding-top: 0.5rem;
`;

const Merch = () => {
  return (
    <Section id="merch">
      <SectionTitle>Merch</SectionTitle>

      <MerchIntro>
        Rep Wax Monkey with fresh merch from the official store.
      </MerchIntro>

      <MerchGrid>
        {merchItems.map((item, index) => (
          <MerchCard key={`${item.title}-${index}`}>
            <ImageWrap>
              <MerchImage src={item.image} alt={item.title} />
            </ImageWrap>

            <MerchBody>
              {item.tag && <Tag>{item.tag}</Tag>}
              <MerchTitle>{item.title}</MerchTitle>
              <MerchPrice>{item.price}</MerchPrice>

              <MerchActions>
                <HeroButton
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Shop Now
                </HeroButton>
              </MerchActions>
            </MerchBody>
          </MerchCard>
        ))}
      </MerchGrid>
    </Section>
  );
};

export default Merch;