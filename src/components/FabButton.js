import styled from 'styled-components';
import property from 'lodash/property';

const FabButton = styled.a`
  position: fixed;
  text-decoration: none;
  right: 40px;
  bottom: 40px;
  color: ${property('theme.colors.background')};
  background: ${property('theme.colors.primary')};
  border-radius: 100%;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 76px;
  font-size: 2.5rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
`;

export default FabButton;
