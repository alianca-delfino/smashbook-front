import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import get from 'lodash/get';
import property from 'lodash/property';


const NoEventsText = styled.h3`
  margin-top: 100px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
`;

const Slot = styled.div`
  cursor: pointer;
  display: inline-flex;
  position: relative;
  margin: 10px;
`;

const Image = styled.img`
  display: flex;
  max-width: 290px;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.7;
`;

const Name = styled.p`
  position: absolute;
  margin: 0;
  left: 20px;
  width: calc(100% - 40px);
  top: 50%;
  transform: translateY(-50%);
  color: ${property('theme.colors.background')};
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const ParticipantsSizeBadge = styled.p`
  position: absolute;
  right: 5px;
  top: -5px;
  color: ${property('theme.colors.primary')};
  background: ${property('theme.colors.background')};
  border-radius: 100%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 0.75rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  z-index: 2;
`;

const EventWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 0 60px;
`;


const Event = ({
  name, places, images, _id, slug,
}) => (
  <Link to={`/event?slug=${slug}`}>
    <Slot key={_id}>
      <ParticipantsSizeBadge>{ places.length }</ParticipantsSizeBadge>
      <Overlay />
      <Name>{ name }</Name>
      <Image src={get(images, '0.url') || 'https://images.smash.gg/images/videogame/1386/image-a993c72fa087fa0880b4a3eb2a754109.jpg?format=auto&width=300&height=120&fit=cover'} />
    </Slot>
  </Link>
);


const SearchResult = ({ events }) => {
  if (events.length === 0) {
    return <NoEventsText>Sem eventos registrados</NoEventsText>;
  }

  return <EventWrapper>{events.map(Event)}</EventWrapper>;
};

export default SearchResult;
