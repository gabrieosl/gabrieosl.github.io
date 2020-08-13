import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiGithub, AiOutlineLinkedin, GoLocation } from 'react-icons/all';

import { Container } from './styles';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <h5>Get in touch</h5>
      <h6>
        <GoLocation />
        &nbsp;Varginha, Brazil
      </h6>
      <h3>hello@gabrieosl.me</h3>
      <span>+55 (21) 98327-2415</span>
      <div className="social">
        <a href="https://www.linkedin.com/in/gabriel---lima/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/gabrieosl">
          <FiGithub />
        </a>
      </div>
      <small>© 2020 Gabriel Lima</small>
    </Container>
  );
};

export default Footer;
