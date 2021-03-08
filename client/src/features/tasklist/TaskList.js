import React from 'react'

export default function TaskList() {
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
            all my amazing tasks will go here.
        </div>
        <Button className="btn" type="btnDelete" onClick={() => deleteTask()}>
          <FaTimes />
          <span className="btnText">delete</span>
        </Button>
      </span>
    </div>  
    )
}
