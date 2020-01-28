import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import property from 'lodash/property';

import { Title, Input, Button } from './Components';
import services from './services';

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

const TitleWrapper = styled(Title)`
  margin-bottom: 100px;
`;

const AddTournament = ({ close }) => {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIfUrlIsValid] = useState('');

  function changeUrl(e) {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setIfUrlIsValid(services.validateUrl(newUrl));
  }

  function saveEventInformation() {
    services.saveEvent(url)
      .then(() => close())
      .catch(err => alert(err));
  }

  return (
    <Fragment>
      <CloseBtn onClick={close}>x</CloseBtn>
      <TitleWrapper>Adicionar novo torneio</TitleWrapper>

      <Input onChange={changeUrl} value={url} type="text" placeholder="Informe uma URL do SmashGG" />
      <Button disabled={!isValidUrl} onClick={saveEventInformation}>Adicionar</Button>
    </Fragment>
  );
};

export default AddTournament;
