import { AppBar, Toolbar, Typography } from '@mui/material';

const CommonAppBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5">Hello</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CommonAppBar;
