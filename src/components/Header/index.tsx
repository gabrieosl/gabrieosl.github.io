import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import ThemeToggler from '../ThemeToggler';
import LanguageSwitch from '../LanguageSwitch';

import { Container, Logo, ExpandMenu, Navigation } from './styles';

const Header: React.FC = () => {
  const { t } = useTranslation('common');

  const [showDrawer, setShowDrawer] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [headerSize, setHeaderSize] = useState<'small' | 'large'>('large');

  const scrollPage = useCallback(() => {
    const nextScrollTop = document.documentElement.scrollTop;

    if (nextScrollTop < currentScroll) setHeaderSize('large');
    else if (nextScrollTop > window.innerHeight * 0.8) setHeaderSize('small');

    setCurrentScroll(nextScrollTop);
  }, [currentScroll]);

  const showHeader = useMemo(() => currentScroll > window.innerHeight * 0.5, [
    currentScroll,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', scrollPage);
    return () => {
      window.removeEventListener('scroll', scrollPage);
    };
  }, [scrollPage]);
  return (
    <Container headerSize={headerSize} showHeader={showHeader}>
      <Logo>
        <strong>GL</strong>
        <small>{t('title')}</small>
      </Logo>
      <ExpandMenu onClick={() => setShowDrawer(!showDrawer)}>
        <FiMenu />
      </ExpandMenu>
      <Navigation showDrawer={showDrawer}>
        <ThemeToggler />
        <a href="#home">{t('home')}</a>
        <a href="#projects">{t('projects')}</a>
        <a href="#about">{t('about')}</a>
        <LanguageSwitch />
      </Navigation>
    </Container>
  );
};

export default Header;
