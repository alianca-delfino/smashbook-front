import React from 'react';
import styled from 'styled-components';


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

function createSlot(item) {
  const { id, placement, entrant: { participants, name } } = item;
  const participant = participants[0];
  const image = participant.player.images.find(it => it.type === 'profile');

  return (
    <Slot key={id}>
      <Position>{placement}</Position>
      <Image src={image ? image.url : 'https://via.placeholder.com/64'} />
      <Name>{ name }</Name>
    </Slot>
  );
}

export default ({ standings }) => (
  <Wrap>
    {
      standings.map(createSlot)
    }
    <Slot>
      <Position> </Position>
    </Slot>
  </Wrap>
);
