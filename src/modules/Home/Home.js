import React, { useState } from 'react';
import styled from 'styled-components';
import property from 'lodash/property';

import api from '../../utils/api';
import EventStandings from './EventStandings';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vW;
  height: 100vH;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${property('theme.colors.primary')}
`;

const Input = styled.input`
  font-size: 1rem;
  text-transform: uppercase;
  background: transparent;
  border: 0;
  outline: none;
  border-bottom: 2px solid ${property('theme.colors.primary')};
  color: ${property('theme.colors.primary')};
  padding: 5px 0;
  width: 80%;
  margin: 0 0 30px 0;
`;

const Button = styled.a`
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${property('theme.colors.background')};
  background: ${property('theme.colors.primary')};
  padding: 15px 20px;
`;

const Home = () => {
  const [url, setUrl] = useState('');
  const [eventInfo, setEventInfo] = useState(false);

  function changeUrl(e) {
    setUrl(e.target.value);
  }

  function getEventInformations() {
    const match = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
    const [regResult] = url.matchAll(match);
    const [,, path] = regResult;

    const [, tournamentLabel, tournament, eventLabel, event] = path.split('/');
    if (tournamentLabel !== 'tournament' || eventLabel !== 'events' || !tournament || !event) return;

    api
      .get(`event?eventUrl=tournament/${tournament}/event/${event}`)
      .then(data => data.data)
      .then(data => setEventInfo(data));
  }

  return (
    <Wrapper>
      <Title>{ eventInfo ? eventInfo.name : 'Smashbook' }</Title>

      {
        !eventInfo && [
          <Input onChange={changeUrl} value={url} type="text" placeholder="Informe uma URL do SmashGG" />,
          <Button onClick={getEventInformations}>Pesquisar</Button>,
        ]
      }

      { eventInfo && <EventStandings standings={eventInfo.standings} />}
    </Wrapper>
  );
};

export default Home;
