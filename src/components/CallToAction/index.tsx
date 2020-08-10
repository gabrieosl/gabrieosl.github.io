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
      console.log(document.documentElement.scrollTop);
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
    <Container>
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
            width="9em"
            onClick={
              () =>
                window.scrollTo({
                  top: 2 * window.innerHeight,
                  behavior: 'smooth',
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            <span>{t('viewMyWork')}</span>
          </Button>
          <Button
            variant="outlined"
            color="default"
            height="2em"
            width="9em"
            onClick={
              () =>
                window.scrollTo({
                  top: 3 * window.innerHeight,
                  behavior: 'smooth',
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            <span>{t('getInTouch')}</span>
          </Button>
        </div>
      </Wrapper>
      <SolarSystem />
      <Skills
        makeItTitle={isOnFirstPage}
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight - 60,
            behavior: 'smooth',
          })
        }
      >
        <MdKeyboardArrowDown />
        <span>Skills</span>
      </Skills>
    </Container>
  );
};

export default CallToAction;
