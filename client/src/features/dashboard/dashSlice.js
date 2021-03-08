import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import request from "../../utils/request" 
// import { dashSlice } from "./Dashboard"

export const dashSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    display: (state, action) => {
      state.todos =  action.payload
    },
  },
})

// export const { deleteTodo, makeTodo, getTodos } = dashSlice.actions;

export const getTodos = () => (dispatch) => {
  request.get("/api/todos").then((resp) => {
    dispatch(getTodos(resp.data));
  });
};

export const makeTodo = (todo) => (dispatch) => {
  request.post("/api/todos", { todo: todo }).then((resp) => {
    dispatch(getTodos());
  });
};

export const deleteTodo = (id) => (dispatch) => {
  request.delete('/api/todos/' + id).then((r) => {
    dispatch(getTodos())
  })
}

export const selectTodos = (state) => state.todos.todos
export default dashSlice.reducer