import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material';
import { Task } from '../../../types/Task';

export type TaskCardProps = {
  task: Task;
};
const TaskCard = (props: TaskCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.task.title}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ marginLeft: 'auto' }}>
          Completed
        </Button>
      </CardActions>
    </Card>
  );
};
export const TaskCardSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" height={40} />
      </CardContent>
      <CardActions>
        <Skeleton
          variant="rectangular"
          height={32}
          width={115}
          sx={{ marginLeft: 'auto' }}
        />
      </CardActions>
    </Card>
  );
};

export default TaskCard;
