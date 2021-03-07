import {React, useState} from 'react'

import { Button } from "antd";

// function handleSubmit(){
//     e.preventDefault()

// }

export default function Input() {
    return (
        <div>
           {/* <form action="" onSubmit={handleSubmit}>
          <input
          className='input'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form> */}
            <Button name="submit_todo" type="submit" class="submit">
                submit
            </Button>
        </div>
    )
}