import React, { useEffect } from "react"
import request from "../../utils/request"
import { Tabs } from "antd"
const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}
export function Dashboard() {
  useEffect(async () => {
    request
      .get("/secret")
      .then((r) => console.log(r))
      .catch((e) => console.log(e))
  }, [])
  return (
    <div>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="manage todos" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="search" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
      logged in
      <button onClick={() => request.logout()}>logout</button>
    </div>
  )
}