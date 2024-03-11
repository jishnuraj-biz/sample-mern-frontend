import { Task } from "../types/Task";

export const getAll = async (): Promise<Task[]> => {
    await sleep(200);
    return [
      {
        _id: 1,
        title: 'Sample Task 1',
        description: 'This is a sample task description.',
        completed: false,
      },
      {
        _id: 2,
        title: 'Sample Task 2',
        description: 'Another sample task with a description.',
        completed: true,
      },
      {
        _id: 3,
        title: 'Complete a different task',
        description: 'Remember to finish this task!',
        completed: false,
      },
      // Add remaining tasks here
      {
        _id: 4,
        title: 'Write some code',
        description: 'Coding can be fun!',
        completed: true,
      },
      {
        _id: 5,
        title: 'Take a break',
        description: 'It\'s important to take breaks!',
        completed: false,
      },
      {
        _id: 6,
        title: 'Learn something new',
        description: 'There\'s always something to learn.',
        completed: false,
      },
      {
        _id: 7,
        title: 'Plan your day',
        description: 'Staying organized is key.',
        completed: true,
      },
      {
        _id: 8,
        title: 'Review your progress',
        description: 'See how far you\'ve come!',
        completed: false,
      },
      {
        _id: 9,
        title: 'Celebrate your accomplishments',
        description: 'Reward yourself for your hard work.',
        completed: false,
      },
      {
        _id: 10,
        title: 'Relax and recharge',
        description: 'You deserve it!',
        completed: false,
      },
    ];
  };
  

const TaskService = {
    getAll,
}

export default TaskService

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));