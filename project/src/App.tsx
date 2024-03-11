import { Container } from '@mui/material';
import { CommonPageLayout } from '@my-arc/components';
import { useCommonPageLayoutSettings } from '@my-arc/components/src/hooks';
import { useEffect } from 'react';

const App = () => {
  const { setCommonPageLayoutSettings } = useCommonPageLayoutSettings();

  useEffect(() => {
    setCommonPageLayoutSettings({ title: 'My App' });
  }, [setCommonPageLayoutSettings]);

  return (
    <CommonPageLayout title="Home Page">
      <Container>App</Container>
    </CommonPageLayout>
  );
};

export default App;
