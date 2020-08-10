import styled, { css } from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  margin: 0 5px;
`;

interface SelectButtonProps {
  isActive: boolean;
}

export const SelectButton = styled(Button)<SelectButtonProps>`
  ${props =>
    props.isActive &&
    css`
      background: ${props_ => props_.theme.primary};
      border-radius: 5px 5px 0 0;
    `}
  &:hover {
    background: ${props => props.theme.primary};
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 170px;

  background: ${props => props.theme.primary};
  padding: 5px 0;
  border-radius: 5px 0 5px 5px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 0.5em;
    cursor: pointer;

    span {
      font-size: 0.8em;
    }

    &:hover {
      background: ${props => props.theme.secondary};
    }
  }
`;
