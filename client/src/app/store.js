import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/dashboard/dashSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});