import React, { useState, useCallback } from 'react';

import { Container, SelectButton, DropdownList } from './styles';

interface Language {
  flag: string;
  country: string;
  language: string;
}

const AVAILABLE_LANGUAGES: Language[] = [
  {
    flag: '🇧🇷',
    country: 'BR',
    language: 'Português',
  },
  {
    flag: '🇬🇧',
    country: 'US',
    language: 'English',
  },
  {
    flag: '🇫🇷',
    country: 'FR',
    language: 'Français',
  },
];

const LanguageButton: React.FC = () => {
  const [active, setActive] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    flag: '🇧🇷',
    country: 'BR',
    language: 'Português',
  });

  const updateLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language);
    setActive(false);
  }, []);

  return (
    <Container>
      <SelectButton
        variant="text"
        color="primary"
        height="28px"
        onClick={() => setActive(!active)}
        isActive={active}
      >
        <h4>{currentLanguage.flag}</h4>
      </SelectButton>
      {active && (
        <DropdownList>
          {AVAILABLE_LANGUAGES.map(language => (
            <li onClick={() => updateLanguage(language)}>
              <span>{language.language}</span>
              <h4>{language.flag}</h4>
            </li>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

export default LanguageButton;
