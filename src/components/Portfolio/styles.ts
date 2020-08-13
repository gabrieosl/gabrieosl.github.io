import styled, { css } from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: calc(100% - 60px);
  min-height: 700px;
  width: 100%;
  flex: 1;

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
  height: calc(100% - 60px);

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
  max-width: 85vw;
  /* min-height: 600px; */

  background: ${props => `${props.theme.default}32`};

  border-radius: 10px;
  margin: 0.5rem;
  padding: 1rem 0.5rem;
  box-shadow: 0px 0px 20px #00000032;

  transition: 0.4s;

  display: none;

  span.description {
    font-size: 0.7rem;
    margin: 8px 0;
  }

  img.example {
    width: 100%;
    /* object fi */
    /* border: 1px solid red; */
  }

  div.technologies {
      flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;

    margin: 8px 0;

    img {
      max-width: 70px;
      height: 40px;
      margin: 10px;
      &.invert {
        ${props =>
          props.theme.invert &&
          css`
            background: ${props.theme.text};
            border-radius: 4px;
            padding: 3px;
          `}
      }
    }
  }

  div.buttons {
    justify-self: flex-end;

    display: flex;
    width: 100%;

    button {
      flex: 1;
      font-size: 0.7rem;

      &:first-child {
        margin-right: 5px;
      }
    }
  }

  /* positioning the visible cards */
  ${props =>
    props.main === props.position &&
    // this is the main one
    css`
      display: flex;
      z-index: 10;
      background: ${props.theme.background2};

      ${props.position > 0 &&
      css`
        &::before {
          content: '';
          pointer-events: none;
          z-index: 15;
          position: absolute;
          width: 7.5vw;
          height: 7.5vw;
          max-width: 50px;
          max-height: 50px;
          top: 50%;
          left: 0;
          background: none;
          border-left: 2px solid ${props.theme.default};
          border-bottom: 2px solid ${props.theme.default};
          transform: translateX(calc(-50% - 1vh)) translateY(-50%) rotate(45deg);
        }
      `}

      &:not(:last-of-type):after {
        content: '';
        pointer-events: none;
        z-index: 15;
        position: absolute;
        width: 7.5vw;
        height: 7.5vw;
        max-width: 50px;
        max-height: 50px;
        top: 50%;
        right: 0;
        background: none;
        border-top: 2px solid ${props.theme.default};
        border-right: 2px solid ${props.theme.default};
        transform: translateX(calc(50% + 1vh)) translateY(-50%) rotate(45deg);
      }
    `}

  ${props =>
    Math.abs(props.position - props.main) === 1 &&
    // these will be the ones right on left and right from main
    css`
      display: flex;
      z-index: 9;
      opacity: 0.05;
      transform: ${`translateX(calc(80% * ${props.position - props.main}))`}
        translateY(20px);
      * {
        pointer-events: none;
      }
    `}

  ${props =>
    Math.abs(props.position - props.main) === 2 &&
    // these are 0 opacity. they're there just for animation purposes.
    css`
      pointer-events: none;
      display: flex;
      z-index: 8;
      opacity: 0;
      transform: ${`translateX(calc(80% * ${props.position - props.main}))`}
        translateY(28px);
    `}


`;
