import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 58px;
  height: 28px;
  overflow: hidden;
  z-index: 100;

  background: ${props => props.theme.background};
  border-radius: 14px;
  border: 1px solid ${props => `${props.theme.text}16`};
  margin: 0 5px;
  box-sizing: content-box;
`;

interface WrapperProps {
  selectedTheme: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;

  transition: 0.4s;

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.text};
    margin: 0 5px;
    flex-shrink: 0;
  }

  ${props =>
    props.selectedTheme === 'light' &&
    css`
      transform: translateX(-30px);
    `}
`;

export const Toggler = styled.button`
  width: 28px;
  height: 28px;

  flex-shrink: 0;

  background: ${props => props.theme.primary};
  border-radius: 50%;
  border: 0;
`;
