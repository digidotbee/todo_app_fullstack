import React from "react";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const Buttons = () => {
    return (
        <div className="wrapper">
            <Button type="btnComplete">Completed</Button>
            <Button type="btnActive">Active</Button>
        </div>
    )
}

export default Buttons
