import React from 'react';
import { ThemeProvider, CssBaseline, createTheme, StyledEngineProvider } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4285F4',  // Google Blue
      light: '#82B1FF',
      dark: '#1A73E8'
    },
    secondary: {
      main: '#34A853',  // Google Green
      light: '#81C995',
      dark: '#137333'
    },
    error: {
      main: '#EA4335',  // Google Red
      light: '#F28B82',
      dark: '#C5221F'
    },
    warning: {
      main: '#FBBC05',  // Google Yellow
      light: '#FDE293',
      dark: '#EA8600'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA'
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368'
    },
    google: {
      blue: '#4285F4',
      red: '#EA4335',
      yellow: '#FBBC05',
      green: '#34A853'
    }
  },
  typography: {
    fontFamily: '"Google Sans", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 400,
      letterSpacing: '-0.022em',
      lineHeight: 1.2
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: '-0.018em',
      lineHeight: 1.3
    },
    h3: {
      fontSize: '2.125rem',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0.015em',
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.031em'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '0.018em'
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.018em',
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
          transition: 'box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)'
        },
        elevation1: {
          boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'
        },
        elevation2: {
          boxShadow: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '0 24px',
          height: '36px',
          fontWeight: 500,
          borderRadius: '4px',
          '&:hover': {
            boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'
          }
        },
        contained: {
          boxShadow: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: '1px solid #DADCE0'
        }
      }
    }
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </motion.div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App
