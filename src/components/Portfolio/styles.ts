import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: calc(100% - 60px);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};

  h3 {
    padding-top: 1rem;
  }
`;

export const Content = styled.div`
  position: relative;

  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

interface CardProps {
  position: number;
  main: number;
}

export const Card = styled.div<CardProps>`
  position: absolute;
  top: calc(0 + 50%);
  left: calc(0 - 50%);
  flex-shrink: 0;
  flex-direction: column;
  width: 450px;
  max-width: 90vw;
  height: 90%;

  background: ${props => `${props.theme.default}32`};
  border-radius: 10px;
  margin: 0.5rem;
  padding: 1rem 0.5rem;
  box-shadow: 0px 0px 20px ${props => `${props.theme.text}32`};

  transition: 0.4s;

  display: none;

  span.description {
    font-size: 0.7rem;
    margin: 8px 0;
  }

  img {
    width: 100%;
    /* object fi */
    /* border: 1px solid red; */
  }

  div.technologies {
      flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 8px 0;

    img {
      width: 40px;
      height: 40px;
      margin: 10px;
    }
  }

  div.buttons {
    justify-self: flex-end;

    display: flex;
    width: 100%;

    button {
      flex: 1;
      font-size: 0.7rem;
    }
  }

  /* positioning the visible cards */
  ${props =>
    props.main === props.position &&
    css`
      display: flex;
      z-index: 10;
      background: ${props.theme.background};
    `}

  ${props =>
    Math.abs(props.position - props.main) === 1 &&
    css`
      display: flex;
      z-index: 9;
      opacity: 0.05;
      transform: ${`translateX(calc(-80% * ${props.position - props.main}))`}
        translateY(20px);
    `}

  ${props =>
    Math.abs(props.position - props.main) === 2 &&
    css`
      pointer-events: none;
      display: flex;
      z-index: 8;
      opacity: 0;
      transform: ${`translateX(calc(-80% * ${props.position - props.main}))`}
        translateY(28px);
    `}


`;
