import React from "react";
import styled from "styled-components";
import { Section, SectionTitle, HeroButton } from "../styles";
import shows from "../../data/shows.json";

const ShowsWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const MonthGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const MonthHeading = styled.h3`
  font-size: 2rem;
  font-family: "Cooper Black", serif;
  font-style: italic;
  font-weight: 700;
  color: #0a2640;
  margin: 0;
`;

const ShowsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ShowCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #eaecef;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ShowInfo = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #7a8ca5;
  margin-bottom: 0.35rem;
`;

const InfoValue = styled.span`
  font-size: 1rem;
  color: #0a2640;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const VenueWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const VenueTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
`;

const VenueName = styled.h4`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0a2640;
`;

const CityState = styled.p`
  margin: 0.35rem 0 0;
  font-size: 1rem;
  color: #334d6e;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8a5a00;
  background: rgba(46, 25, 143, 0.14);
  border: 1px solid rgba(245, 179, 1, 0.28);
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const TicketButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  text-decoration: none;
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

const formatDate = (dateString) => {
  const date = new Date(`${dateString}T12:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

const getMonthLabel = (dateString) => {
  const date = new Date(`${dateString}T12:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const isUpcomingOrToday = (dateString) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const showDate = new Date(`${dateString}T00:00:00`);
  showDate.setHours(0, 0, 0, 0);

  return showDate >= today;
};

const Shows = () => {
  const visibleShows = shows.filter((show) => isUpcomingOrToday(show.date));

  const groupedShows = visibleShows.reduce((acc, show) => {
    const month = getMonthLabel(show.date);

    if (!acc[month]) {
      acc[month] = [];
    }

    acc[month].push(show);

    return acc;
  }, {});

  return (
    <Section id="shows">
      <SectionTitle>Shows</SectionTitle>

      <ShowsWrapper>
        {Object.entries(groupedShows).map(([month, monthShows]) => (
          <MonthGroup key={month}>
            <MonthHeading>{month}</MonthHeading>

            <ShowsList>
              {monthShows.map((show, index) => {
                const hasTicketLink = Boolean(show.ticketLink);
                const isFreeShow = Boolean(show.freeShow || show.freeshow);
                const ticketsAtDoor = Boolean(show.ticketsAtDoor || show.ticketsatthedoor);
                return (
                  <ShowCard
                    key={`${show.date}-${show.city}-${show.venue}-${index}`}
                  >
                    <ShowInfo>
                      <InfoBlock>
                        <InfoLabel>Date</InfoLabel>
                        <InfoValue>
                          <span style={{ opacity: 0.8 }}>{show.day}</span> ·{" "}
                          <span style={{ fontWeight: 600 }}>
                            {formatDate(show.date)}
                          </span>
                        </InfoValue>
                      </InfoBlock>

                      <VenueWrap>
                        <VenueTop>
                          <VenueName>{show.venue}</VenueName>

                          {show.featured && <Badge>Low Tickets</Badge>}

                          {isFreeShow && <Badge>Free Show</Badge>}
                          {ticketsAtDoor && <Badge>Tickets at the Door</Badge>}
                        </VenueTop>

                        <CityState>
                          {show.city}, {show.state}
                        </CityState>
                      </VenueWrap>
                    </ShowInfo>

                    {!isFreeShow && !ticketsAtDoor &&(
                      <ActionButtons>
                        <TicketButton
                          href={hasTicketLink ? show.ticketLink : "#"}
                          target={hasTicketLink ? "_blank" : undefined}
                          rel={hasTicketLink ? "noreferrer" : undefined}
                          $disabled={!hasTicketLink}
                        >
                          <HeroButton as="span">
                            {hasTicketLink ? "Tickets" : "Tickets Soon"}
                          </HeroButton>
                        </TicketButton>
                      </ActionButtons>
                    )}
                  </ShowCard>
                );
              })}
            </ShowsList>
          </MonthGroup>
        ))}
      </ShowsWrapper>
    </Section>
  );
};

export default Shows;