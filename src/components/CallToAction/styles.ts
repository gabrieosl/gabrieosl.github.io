import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  z-index: 500;
  display: flex;
  align-items: center;

  background: ${props => props.theme.background};
  color: ${props => props.theme.text};

  @media all and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  z-index: 102;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 40px;

  div.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    > button {
      margin: 10px;
      font-size: 0.75rem;
    }
  }

  @media all and (max-width: 768px) {
    height: 50%;
    /* justify-content: flex-end; */
  }
`;

export const Tools = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 900;

  display: flex;

  margin: 20px;
`;

const jumping = keyframes`
  from {
    transform: translateY(-20%);
  }
  50% {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20%);
  }
`;

interface SkillsProps {
  makeItTitle: boolean;
}

export const Skills = styled.button.attrs({ type: 'button' })<SkillsProps>`
  position: absolute;
  bottom: 0;
  left: calc(50% - 22px);
  z-index: 900;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  margin: 0.5rem;
  color: ${props => props.theme.text};

  svg {
    margin-bottom: -5px;
    width: 44px;
    height: 44px;
    animation: ${jumping} 1s infinite;
  }

  span {
    font-size: 0.5rem;
    transition: 0.4s;
  }

  ${props =>
    props.makeItTitle &&
    css`
      svg {
        opacity: 0;
      }

      span {
        transform: translateY(400%) scale(4);
      }
    `}
`;

export const GetCV = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 2rem;
  height: 1.3rem;
  transform: none;

  background: red;
  border-radius: 10px;
`;
