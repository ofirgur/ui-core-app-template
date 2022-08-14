import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    background: {
      app: string;
    },
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background?: {
      app: string;
    },
  }
}

export default createTheme({
  background: {
    app: '#2196f3',
  },
});