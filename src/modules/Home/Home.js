import React from 'react';
import styled from 'styled-components';
import property from 'lodash/property';

const Wrapper = styled.div`
  display: flex;
  width: 100vW;
  height: 100vH;
  background: ${property('theme.colors.background')};
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${property('theme.colors.primary')}
`;

const Home = () => (
  <Wrapper>
    <Title>Smashbook</Title>
  </Wrapper>
);

export default Home;
