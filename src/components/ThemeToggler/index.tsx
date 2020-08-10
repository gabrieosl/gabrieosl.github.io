import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../context/theme';

import { Container, Wrapper, Toggler } from './styles';

const ThemeToggler: React.FC = () => {
  const { toogleTheme, selectedTheme } = useTheme();
  return (
    <Container onClick={toogleTheme}>
      <Wrapper selectedTheme={selectedTheme}>
        <FiSun />
        <Toggler />
        <FiMoon />
      </Wrapper>
    </Container>
  );
};

export default ThemeToggler;
