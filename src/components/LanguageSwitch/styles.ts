import styled, { css } from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  position: relative;
  z-index: 101;

  display: flex;
  align-items: center;

  margin: 0 5px;
`;

interface SelectButtonProps {
  isActive: boolean;
}

export const SelectButton = styled(Button)<SelectButtonProps>`
  display: flex;
  align-items: center;

  svg {
    height: 20px;
    width: 20px;
    color: ${props => props.theme.primary};
  }

  h6 {
    color: ${props => props.theme.text};
    text-transform: uppercase;
  }

  ${props =>
    props.isActive &&
    css`
      h6 {
        color: ${props.theme.primary};
      }
    `}
  &:hover {
    h6 {
      color: ${props => props.theme.primary};
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 170px;

  background: ${props => props.theme.background2};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 5px 0;
  border-radius: 5px 0 5px 5px;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    transform: translateX(-100%) translateY(-100%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.background2};
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2px 0.5em;
    cursor: pointer;

    span {
      font-size: 0.8em;
    }

    &:hover {
      background: ${props => props.theme.primary};
    }
  }
`;
