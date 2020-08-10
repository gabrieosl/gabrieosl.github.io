import styled, { css } from 'styled-components';

interface ContainerProps {
  headerSize: 'small' | 'large';
  showHeader: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${props => (props.headerSize === 'small' ? '60px' : '120px')};
  position: fixed;
  top: 0;
  z-index: 50;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;

  background: ${props => props.theme.background};
  padding: 0 20px;
  box-shadow: 0 1px 1px ${props => `${props.theme.text}16`};

  ${props =>
    !props.showHeader &&
    css`
      transform: translateY(-100%);
    `}

  @media all and (min-width: 769px) {
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: ${props => props.theme.text};
    padding: 15px;
    border: 2px solid ${props => props.theme.text};
    border-radius: 4px;
  }

  small {
    color: ${props => props.theme.text};
  }
`;

export const ExpandMenu = styled.button`
  background: none;
  border: 0;

  @media all and (min-width: 769px) {
    display: none;
  }
`;

interface NavigationProps {
  showDrawer: boolean;
}
export const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  width: 350px;
  height: 100%;
  top: 0;
  right: 0;

  display: ${props => (props.showDrawer ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 769px) {
    position: static;
    width: unset;
    height: unset;

    display: flex;
    flex-direction: row;
  }
`;
