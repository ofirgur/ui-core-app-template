import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'utils/theme';
import AppLayout from '../AppLayout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
