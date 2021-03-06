import React from "react";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { FaTimes, FaAsterisk, FaCheck } from "react-icons/fa";

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
    <div className="wrapper">
      <Button className="btn" type="btnComplete" onClick={() => completed()}>
        <FaCheck />
         completed
      </Button>
      <Button className="btn" type="btnActive" onClick={() => active()}>
        <FaAsterisk />
         active
      </Button>
      <Button className="btn" type="btnDelete" onClick={() => deleteTask()}>
        <FaTimes />
         delete
      </Button>
    </div>
  );
}
