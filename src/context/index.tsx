import React from 'react';

import ThemeProvider from './theme';

const ContextIndex: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ContextIndex;
