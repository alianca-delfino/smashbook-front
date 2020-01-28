import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import property from 'lodash/property';

import { Wrapper, Title, LoadingComponent } from '../Home/Components';
import services from '../Home/services';

const Wrap = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Slot = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Position = styled.div`
  font-size: 18px;
  padding: 10px;
  min-width: 30px;
`;
const Image = styled.img`
  width: 64px;
  max-height: auto;
  min-height: 100%;
  padding: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
`;
const Name = styled.div`
  padding: 10px;
  font-size: 18px;
`;

const CloseBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${property('theme.colors.primary')};
  text-transform: uppercase;
  font-size: 2rem;
  position: fixed;
  right: 40px;
  top: 40px;
`;

function createSlot(item) {
  const {
    _id, position, player, name,
  } = item;
  const image = player.images.find(it => it.type === 'profile');

  return (
    <Slot key={_id}>
      <Position>{position}</Position>
      <Image src={image ? image.url : 'https://via.placeholder.com/64'} />
      <Name>{ name }</Name>
    </Slot>
  );
}

const Event = ({ location: { search } }) => {
  const [, slug] = search.split('?slug=');

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    services
      .getEvent(slug)
      .then(data => setEvent(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {
        loading && <LoadingComponent />
      }

      {
        !loading && (
          <Fragment>
            <Link to="/">
              <CloseBtn>X</CloseBtn>
            </Link>
            <Title>{ event.name }</Title>
            <Wrap>
              { event.places.map(createSlot) }
            </Wrap>
          </Fragment>
        )
      }

    </Wrapper>
  );
};
export default withRouter(Event);
