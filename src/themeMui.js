import { createTheme } from '@mui/material';

export let mode = 'light';

export const theme = createTheme({
  palette: {
    text: {
      main: '#000',
      alternative: '#fff',
    },
    background: {
      main: '#e7eaf2',
      alternative: '#fff',
      blur: 'rgba(255, 255, 255, 0.4)',
      elements: '#fff',
    },
    icon: {
      ellipse1: '#c5baff',
      ellipse2: '#ffd8d0',
      logo: '#4a56e2',
      nonactive: '#e0e0e0',
    },
    button: {
      main: '#24CCA7',
      alternative: '#4A56E2',
    },
  },
  zIndex: {
    background: {
      main: -1000,
    },
  },
  breakpoints: {
    values: {
      min: 320,
      mobile: 480,
      tablet: 768,
      desktop: 1280,
    },
  },
});
