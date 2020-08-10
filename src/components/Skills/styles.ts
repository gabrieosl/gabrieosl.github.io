import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 60px);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding: 4rem;
  padding-top: 6rem;
  background: ${props => props.theme.background};

  @media all and (max-width: 768px) {
    padding: 0.5rem;
    padding-top: 3rem;
  }
`;

export const Skill = styled.div`
  width: 6em;
  height: 6em;

  background: none;
  border-radius: 0.2rem;
  margin: 1rem;

  img {
    width: 6em;
    height: 6em;
  }

  span {
    position: absolute;
    display: none;
    width: 100%;
    width: 6em;
    height: 6em;
    text-align: center;
    text-transform: capitalize;
  }

  &:hover {
    img {
      opacity: 0.5;
    }
    span {
      display: block;
    }
  }

  @media all and (max-width: 768px) {
    width: 3em;
    height: 3em;

    img {
      width: 3em;
      height: 3em;
    }
  }
`;
