import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FiMenu } from 'react-icons/fi';

import ThemeToggler from '../ThemeToggler';
import LanguageSwitch from '../LanguageSwitch';

import { Container, Logo, ExpandMenu, Navigation } from './styles';

const Header: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerSize, setHeaderSize] = useState<'small' | 'large'>('large');

  const scrollPage = useCallback(() => {
    const nextScrollTop = document.documentElement.scrollTop;

    if (nextScrollTop < currentScroll) setHeaderSize('large');
    else if (nextScrollTop > window.innerHeight * 0.95) setHeaderSize('small');

    setCurrentScroll(nextScrollTop);
  }, [currentScroll]);

  const showHeader = useMemo(() => currentScroll > window.innerHeight * 0.8, [
    currentScroll,
  ]);

  useEffect(() => {
    window.onscroll = scrollPage;
    return () => {
      window.onscroll = null;
    };
  }, [scrollPage]);
  return (
    <Container headerSize={headerSize} showHeader={showHeader}>
      <Logo>
        <strong>Gabriel Lima</strong>
        <small>Fullstack Developer</small>
      </Logo>
      <ExpandMenu onClick={() => setShowDrawer(!showDrawer)}>
        <FiMenu />
      </ExpandMenu>
      <Navigation showDrawer={showDrawer}>
        <ThemeToggler />
        <a href="#home">Home</a>
        <a href="#projects">Projetos</a>
        <a href="#cv">CV</a>
        <a href="#about">Sobre</a>
        <LanguageSwitch />
      </Navigation>
    </Container>
  );
};

export default Header;
