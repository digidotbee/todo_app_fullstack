import React from "react"
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { FaTimes } from 'react-icons/fa'

export default function Buttons(props) {
  function globalState(){
     console.log("Congratulations, you clicked a button that does nothing!")
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
      <Button type="btnComplete" onClick={() => completed()}>
        Completed
      </Button>
      <Button type="btnActive" onClick={() => active()}>
        Active
      </Button>
      <Button type="btnDelete" onClick={() => deleteTask()}>
        <FaTimes />
      </Button>
    </div>
  );
}

