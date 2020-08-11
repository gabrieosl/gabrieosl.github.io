import React, { useState, useEffect, useCallback } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import { Container } from './styles';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollPage = useCallback(() => {
    const nextScrollTop = document.documentElement.scrollTop;

    setIsVisible(nextScrollTop > window.innerHeight * 0.5);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollPage);
    return () => {
      window.removeEventListener('scroll', scrollPage);
    };
  });

  return (
    <Container
      isVisible={isVisible}
      onClick={() =>
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
      }
    >
      <MdKeyboardArrowUp />
    </Container>
  );
};

export default GoToTop;
