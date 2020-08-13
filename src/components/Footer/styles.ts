import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 1rem;

  background: ${props => props.theme.backgroundInv};
  color: ${props => props.theme.textInv};

  * {
    margin: 4px;
  }

  h6 {
    display: flex;
    align-items: center;
  }

  small {
    font-size: 0.6rem;
    margin-top: 25px;
  }

  div.social {
    display: flex;

    a {
      color: ${props => props.theme.textInv};

      svg {
        height: 25px;
        width: 25px;
      }
    }
  }
`;
