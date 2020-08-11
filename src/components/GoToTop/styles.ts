import styled, { css } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.button.attrs({ type: 'button' })<
  ContainerProps
>`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 2rem;
  height: 2rem;
  z-index: 900;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: 30px;
  transform: translateY(200%);
  transition: 0.3s;
  border: 0;

  svg {
    height: 40px;
    width: 40px;
  }

  ${props =>
    props.isVisible &&
    css`
      transform: translateY(0);
    `}
`;
