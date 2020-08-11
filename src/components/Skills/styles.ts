import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 60px);

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

    &.invert {
      filter: ${props => `invert(${props.theme.invert})`};
    }
  }

  span {
    position: absolute;
    display: none;
    width: 100%;
    width: 6em;
    height: 6em;
    text-align: center;
    text-transform: capitalize;
    color: ${props => props.theme.text};
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

    span {
      position: absolute;
      display: block;
      /* width: 3em; */
      height: 3em;
      text-align: center;
      text-transform: capitalize;
      font-size: 0.6em;
      color: ${props => props.theme.text};
    }
  }
`;
