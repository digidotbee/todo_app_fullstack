import React, { useEffect } from "react"
import request from "../../utils/request"
import { Tabs } from "antd"
import { Button } from "antd";
import TaskList from '../tasklist/TaskList'
import Input from '../input/Input'


const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}
export function Dashboard() {
  useEffect(async () => {
    request
      .get("/todos")
      .then((r) => console.log(r))
      .catch((e) => console.log(e))
  }, [])
  return (
    <div  className='main-container'>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="manage todos" key="1">
          <Input />
          <TaskList />
          </TabPane>
          <TabPane tab="search" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
      logged in
      <Button type="btnLogout" onClick={() => request.logout()}>signout</Button>
    </div>
  )
}