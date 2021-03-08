import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todosSlice = createSlice({
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

export const { display, deleteTodo, createTodo } = todosSlice.actions

export const getTodos = () => (dispatch) => {
  request.get("/api/todos").then((r) => dispatch(display(r.data)))
}
export const removeTodo = (id) => (dispatch) => {
  request.delete('/api/todos/' + id).then((r) => {
    dispatch(getTodo())
  })
}
export const selectTodo = (state) => state.todos.todos

export default todosSlice.reducer