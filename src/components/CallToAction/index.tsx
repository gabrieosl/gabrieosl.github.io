import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import ThemeToggler from '../ThemeToggler';
import LanguageSwitch from '../LanguageSwitch';
import SolarSystem from './SolarSystem';

import { Container, Wrapper, Tools, More } from './styles';

const CallToAction: React.FC = () => {
  const { t } = useTranslation('common');
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
      <More>
        <MdKeyboardArrowDown />
      </More>
    </Container>
  );
};

export default CallToAction;
