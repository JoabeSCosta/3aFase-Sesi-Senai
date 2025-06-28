import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC107', 
      light: '#FFF350',
      dark: '#FF8F00',
      contrastText: '#000',
    },
    secondary: {
      main: '#FFEB3B', 
      light: '#FFFF72',
      dark: '#C8B900',
      contrastText: '#000',
    },
    background: {
      default: '#FFFDE7', 
      paper: '#FFF9C4',
    },
  },
  typography: {
    fontSize: 16,
    h4: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '1.1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;