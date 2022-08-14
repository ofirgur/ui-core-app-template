import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export default createTheme({
  status: {
    danger: 'orange',
  },
});