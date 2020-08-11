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
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;

  /* background: none; */
  background: ${props => props.theme.background};
  padding: 0 20px;
  box-shadow: 0 1px 1px ${props => `${props.theme.text}16`};

  ${props =>
    !props.showHeader &&
    css`
      transform: translateY(-100%);
    `}

  @media all and (max-width: 768px) {
    height: 60px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.text};

  small {
    margin-left: 10px;
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
  > div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${props => props.theme.text};
    margin: 0 0.7em;
    font-size: 0.75em;
  }

  @media all and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: none;
    transform: translateX(100%);
    transition: 0.4s;
    opacity: 0;

    > div {
      transform: translateX(100%);
      transition: 0.4s;
    }

    ${props =>
      props.showDrawer &&
      css`
        opacity: 1;
        background: #00000064;
        transform: translateX(0);
        transition: none;
        > div {
          float: right;
          height: 100%;
          transform: translateX(0);
          width: 270px;
          background: ${props => props.theme.background};

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
        }
      `}
  }
`;
