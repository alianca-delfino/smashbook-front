import React from 'react';
import styled from 'styled-components';
import property from 'lodash/property';

import { Loading } from '../../../components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vW;
  height: 100vH;
  align-items: center;
  color: ${property('theme.colors.primary')}
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Input = styled.input`
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

export const Button = styled.a`
  text-decoration: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  text-transform: uppercase;
  color: ${property('theme.colors.background')};
  background: ${property('theme.colors.primary')};
  padding: 15px 20px;
  opacity: ${props => (props.disabled ? '0.4' : '1')};
`;


const LoadingWrapper = styled.div`
  margin: 50px 0;
`;

export const LoadingComponent = () => (
  <LoadingWrapper>
    <Loading size={64} />
  </LoadingWrapper>
);

export { default as SearchResult } from './SearchResult';
