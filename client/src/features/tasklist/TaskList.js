import {useEffect, useState} from "react";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { FaTimes, FaAsterisk, FaCheck } from "react-icons/fa";
import request from "../../utils/request" 
import {
    getTodos,
    selectTodos
  } from "../dashboard/dashSlice"
import {useSelector, useDispatch} from 'react-redux'

export default function TaskList() {

    function globalState() {
        console.log("Congratulations, you clicked a button that does nothing!");
      }
      function active() {
        globalState();
      }
      function completed() {
        globalState();
      }
      function deleteTask() {
        globalState();
      }

      const todos = useSelector(selectTodos)
      useEffect(async () => {
        request
          .get("/todos")
          .then((r) => console.log(r))
          .catch((e) => console.log(e))
      }, [])

    return (
<div className="taskListContainer">
      <span className="btnsImportandComplete">
        <Button className="btn" type="btnComplete" onClick={() => completed()}>
          <FaCheck />
          <span className="btnText">completed</span>
        </Button>
        <Button className="btn" type="btnImportant" onClick={() => active()}>
          <FaAsterisk />
          <span className="btnText">important</span>
        </Button>
      </span>
      <span className="taskAndBtn">
      <div className="taskText">
            {todos.map(todo => {
                return 
                <p>${todo.description}</p>

            })}
        </div>
        <Button className="btn" type="btnDelete" onClick={() => deleteTask()}>
          <FaTimes />
          <span className="btnText">delete</span>
        </Button>
      </span>
    </div>  
    )
}
