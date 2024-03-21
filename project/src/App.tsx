import { useCommonPageLayoutSettings } from '@my-arc/components/src/hooks';
import { useEffect, useMemo } from 'react';
import Router from './Router';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const { setCommonPageLayoutSettings } = useCommonPageLayoutSettings();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          background: {
            default: '#EEE',
          },
        },
      }),
    []
  );

  useEffect(() => {
    setCommonPageLayoutSettings({ title: 'My App' });
  }, [setCommonPageLayoutSettings]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
