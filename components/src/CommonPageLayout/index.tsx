import { ReactNode } from 'react';
import CommonAppBar from './CommonAppBar';
import { Container, Divider, Toolbar, Typography } from '@mui/material';
import { useCommonPageLayoutSettings } from './CommonPageLayoutHooks';

export type CommonPageLayoutProps = {
  children: ReactNode;
  title: string;
};
export const CommonPageLayout = (props: CommonPageLayoutProps) => {
  const { commonPageLayoutSettings } = useCommonPageLayoutSettings();

  return (
    <div>
      <CommonAppBar />
      <Toolbar />
      <br />
      <Container maxWidth="xl">
        <Typography variant="h6">{commonPageLayoutSettings.title}</Typography>
        <Divider />
      </Container>
      <br />
      {props.children}
    </div>
  );
};

export { CommonPageLayoutContextProvider } from './CommonPageLayoutContext';

export default CommonPageLayout;
