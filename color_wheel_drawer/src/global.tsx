import styled from 'styled-components';

const MagicButton = styled.button`
  background: ${props => props.theme.background};
    color: ${props => props.theme.color};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default MagicButton;