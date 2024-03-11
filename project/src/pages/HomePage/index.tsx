import { Container, Grid } from '@mui/material';
import { CommonPageLayout, ListBuilder } from '@my-arc/components';
import { Task } from '../../types/Task';
import TaskService from '../../services/Task.service';
import TaskCard, { TaskCardSkeleton } from './components/TaskCard';

const HomePage = () => {
  return (
    <CommonPageLayout title="Home Page">
      <Container>
        <ListBuilder<Task>
          getItems={TaskService.getAll}
          renderListContainer={(list) => (
            <Grid container spacing={3}>
              {list}
            </Grid>
          )}
          renderListItem={(data) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <TaskCard task={data} />
            </Grid>
          )}
          renderListItemSkeleton={() => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <TaskCardSkeleton />
            </Grid>
          )}
          maxListItemSkeleton={8}
          pagination={{
            limit: 20,
            type: 'infinite-scroll',
          }}
        />
      </Container>
    </CommonPageLayout>
  );
};

export default HomePage;
