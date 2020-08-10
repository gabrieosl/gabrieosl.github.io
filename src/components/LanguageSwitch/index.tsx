import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, SelectButton, DropdownList } from './styles';

interface Language {
  flag: string;
  code: string;
  language: string;
}

const AVAILABLE_LANGUAGES: Language[] = [
  {
    flag: '🇬🇧',
    code: 'en',
    language: 'English',
  },
  {
    flag: '🇧🇷',
    code: 'pt',
    language: 'Português',
  },
  {
    flag: '🇫🇷',
    code: 'fr',
    language: 'Français',
  },
];

const LanguageButton: React.FC = () => {
  const { i18n } = useTranslation('common');
  const [active, setActive] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    () =>
      AVAILABLE_LANGUAGES.find(lang => lang.code === i18n.language) ||
      AVAILABLE_LANGUAGES[0],
  );

  const updateLanguage = useCallback(
    (language: Language) => {
      setCurrentLanguage(language);
      setActive(false);
      i18n.changeLanguage(language.code);
    },
    [i18n],
  );

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
