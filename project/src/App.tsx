import { useCommonPageLayoutSettings } from '@my-arc/components/src/hooks';
import { useEffect } from 'react';
import Router from './Router';

const App = () => {
  const { setCommonPageLayoutSettings } = useCommonPageLayoutSettings();

  useEffect(() => {
    setCommonPageLayoutSettings({ title: 'My App' });
  }, [setCommonPageLayoutSettings]);

  return <Router />;
};

export default App;
