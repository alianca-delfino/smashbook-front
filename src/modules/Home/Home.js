import React, { useState, useEffect, Fragment } from 'react';
import debounce from 'lodash/debounce';

import { FabButton } from '../../components';
import {
  Wrapper, Title, LoadingComponent, SearchResult,
} from './Components';

import AddTournament from './AddTournament';
import services from './services';

const HomeComponent = (isLoading, events) => (
  <Fragment>
    <Title>Smashbook</Title>
    { isLoading && <LoadingComponent /> }
    { !isLoading && <SearchResult events={events} />}
  </Fragment>
);

const Home = () => {
  const [events, setEvents] = useState('');
  const [screen, setScreen] = useState('home');
  const [loading, setLoading] = useState(true);

  const setLoadingDebounce = debounce(setLoading, 500);
  useEffect(() => {
    if (screen === 'home') {
      services
        .getEvents()
        .then(data => setEvents(data))
        .then(() => setLoadingDebounce(false));
    }
  }, [screen]);

  function setCurrentScreen(screenName) {
    return function set() {
      setScreen(screenName);
    };
  }

  return (
    <Wrapper>
      { screen === 'home' && HomeComponent(loading, events) }
      { screen === 'add' && <AddTournament close={setCurrentScreen('home')} /> }
      { !loading
        && screen !== 'add'
        && <FabButton onClick={setCurrentScreen('add')}>+</FabButton>
      }
    </Wrapper>
  );
};

export default Home;
