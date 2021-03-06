import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import ThemeToggler from '../ThemeToggler';
import LanguageSwitch from '../LanguageSwitch';
import SolarSystem from './SolarSystem';

import { Container, Wrapper, Tools, Skills } from './styles';

const CallToAction: React.FC = () => {
  const { t } = useTranslation('common');

  const [isOnFirstPage, setIsOnFirstPage] = useState(true);

  useEffect(() => {
    function onScroll() {
      if (document.documentElement.scrollTop > 60)
        return setIsOnFirstPage(true);
      return setIsOnFirstPage(false);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <Container id="home">
      <Tools>
        <ThemeToggler />
        <LanguageSwitch />
      </Tools>
      <Wrapper>
        <div className="titles">
          <h4>Gabriel Lima</h4>
          <h1>{t('title')}</h1>
        </div>
        <div className="buttons">
          <Button
            variant="filled"
            color="primary"
            height="2em"
            width="10em"
            // onClick={() => window.location.assign('#portfolio')}
            onClick={() => {
              document
                .getElementById('portfolio')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>{t('viewMyWork')}</span>
          </Button>
          <Button
            variant="outlined"
            color="default"
            height="2em"
            width="10em"
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>{t('getInTouch')}</span>
          </Button>
        </div>
      </Wrapper>
      <SolarSystem />
      <Skills
        makeItTitle={isOnFirstPage}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - 60,
            behavior: 'smooth',
          });
        }}
      >
        <MdKeyboardArrowDown />
        <span>Skills</span>
      </Skills>
    </Container>
  );
};

export default CallToAction;
