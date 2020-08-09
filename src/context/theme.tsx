import React, { useState, useCallback, createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';

interface ContextData {
  toogleTheme(): void;
}

const ThemeContext = createContext<ContextData>({} as ContextData);

const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toogleTheme = useCallback(() => {
    setTheme(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ toogleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>

      <GlobalStyles />
    </ThemeContext.Provider>
  );
};

export function useTheme(): ContextData {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}

export default Theme;
