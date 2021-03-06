import React from "react";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { FaTimes, FaAsterisk, FaCheck } from "react-icons/fa";
import TaskList from "../tasklist/TaskList";

export default function Buttons(props) {
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
        <TaskList />
        <Button className="btn" type="btnDelete" onClick={() => deleteTask()}>
          <FaTimes />
          <span className="btnText">delete</span>
        </Button>
      </span>
    </div>
  );
}
