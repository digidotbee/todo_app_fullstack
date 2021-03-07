export const { setTodos } = todoSlice.actions;

export const getTodos = () => (dispatch) => {
  axios.get("/api/todos").then((resp) => {
    dispatch(setTodos(resp.data));
  });
};

export const makeTodo = (todo) => (dispatch) => {
  axios.post("/api/todos", { todo: todo }).then((resp) => {
    dispatch(getTodos());
  });
};

export default todoSlice.reducer;
