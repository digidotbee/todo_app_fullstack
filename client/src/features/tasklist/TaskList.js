import { useState, useEffect } from "react";
import { Button } from "antd";
import { FaTimes, FaAsterisk, FaCheck } from "react-icons/fa";
import axios from 'axios';

export default function TaskList() {

    async function getTodos(){
        
    }
  useEffect(() => {
      getTodos();
  }, []);

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
      
    <table className="table">
      <tr>
        <td>
          <Button
            className="btn"
            type="btnComplete"
            onClick={() => completed()}
          >
            <FaCheck />
            <span className="btnText">completed</span>
          </Button>
        </td>
        <td>Description of our Todos</td>
        <td>
          <Button className="btn" type="btnImportant" onClick={() => active()}>
            <FaAsterisk />
            <span className="btnText">active</span>
          </Button>
        </td>
        <td>
          <Button className="btn" type="btnDelete" onClick={() => deleteTask()}>
            <FaTimes />
            <span className="btnText">delete</span>
          </Button>
        </td>
      </tr>

      {/* <tr>
          <td>Description</td>
          <td><Buttons /></td>
        </tr> */}
    </table>
  );
}
