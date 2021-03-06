import React from 'react'
import { Button } from "antd";

export default function Input() {
    return (
        <div>
            <input
                className="wrapper"
                id="Todo"
                type="text"
                name="Todo"
                placeholder="enter todo here"/>
            <Button name="submit_todo" type="submit" class="submit">
                submit
            </Button>
        </div>
    )
}