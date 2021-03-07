import {useState} from "react";
import { Button } from "antd";

export default function Input() {
  // const dispatch = useDispatch();
  // const todos = useSelector(selectTodos);
  const [todo, setTodo] = useState("");
  function handleClick() {
    console.log(todo);
  }

  // useEffect(() => {
  //   dispatch(getTodos());
  // }, []);

  return (
    <div>
      <form action="">
        <input
          className="wrapper"
          id="Todo"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          name="Todo"
          placeholder="enter todo here"
        />
        <Button
          onClick={handleClick}
          name="submit_todo"
          type="submit"
          class="submit"
        >
          Add
        </Button>
      </form>
      {/* {todos.map((todo) => {
        return (
          <div>
            onClick={() => dispatch(postTodo(todo.id))}
            onSubmit={(todo) => dispatch(updateTodo(todo.id))}
          </div>
        );
      })} */}
    </div>
  );
}
