// import {describe, expect, test} from '@jest/globals';
// TaskService.test.js

// import { Task } from '../types/Task';
// import { getAll } from './Task.service'; // assuming TaskService is in the same directory


// jest.mock('./sleep'); // Mock the sleep function to avoid waiting 200ms

// describe('TaskService', () => {
//   describe('getAll', () => {
//     it('should return an array of tasks', async () => {
//       const expectedTasks: Task[] = [
//         {
//           _id: 1,
//           title: 'Sample Task 1',
//           description: 'This is a sample task description.',
//           completed: false,
//         },
//         {
//           _id: 2,
//           title: 'Sample Task 2',
//           description: 'Another sample task with a description.',
//           completed: true,
//         },
//         // Add remaining tasks here (same as in TaskService)
//         {
//           _id: 10,
//           title: 'Relax and recharge',
//           description: 'You deserve it!',
//           completed: false,
//         },
//       ];

//       const tasks = await getAll();

//       expect(tasks).toEqual(expectedTasks);
//     });
//   });
// });


// describe('sum', () => { 
//   it('should worl', () => {
//     expect(1).toBe(1);
//   })
//  })