import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Button from '../Button';
import ThemeToggler from '../ThemeToggler';
import LanguageSwitch from '../LanguageSwitch';
import SolarSystem from './SolarSystem';

import { Container, Wrapper, Tools, More } from './styles';

const CallToAction: React.FC = () => {
  return (
    <Container>
      <Tools>
        <ThemeToggler />
        <LanguageSwitch />
      </Tools>
      <Wrapper>
        <h4>Gabriel Lima</h4>
        <h1>Fullstack developer</h1>
        <div>
          <Button variant="filled" color="primary" height="2em" width="9em">
            <span>View my work</span>
          </Button>
          <Button variant="outlined" color="default" height="2em" width="9em">
            <span>Get in touch</span>
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
