import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;

  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 0 40px;

  > div {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
`;

export const Tools = styled.div`
  position: absolute;
  top: 0;
  right: 0;

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

export const More = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% - 22px);
  background: none;
  animation: ${jumping} 1s infinite;

  svg {
    width: 44px;
    height: 44px;
  }
`;
