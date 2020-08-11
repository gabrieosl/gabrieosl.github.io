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

    setCurrentScroll(prev => {
      if (nextScrollTop < prev) setHeaderSize('large');
      else if (nextScrollTop > window.innerHeight * 0.8) setHeaderSize('small');
      return nextScrollTop;
    });
  }, []);

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
      <Navigation
        showDrawer={showDrawer}
        onClick={(e: any) =>
          e.target.id === e.currentTarget.id && setShowDrawer(false)
        }
      >
        <div className="wrapper">
          <ThemeToggler />
          <a href="#home">
            <h5>{t('home')}</h5>
          </a>
          <a href="#portfolio">
            <h5>{t('portfolio')}</h5>
          </a>
          <a href="#about">
            <h5>{t('about')}</h5>
          </a>
          <LanguageSwitch />
        </div>
      </Navigation>
    </Container>
  );
};

export default Header;
