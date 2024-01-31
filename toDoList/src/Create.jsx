import React, { useState } from 'react'
import axios from 'axios';

function Create() {
    const [task,setTask] = useState();
    const handleAdd = async () => {
        await axios.post('http://localhost:3001/add', {task:task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))

    }
  return (
    <div>
    <input type='text' name = "" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}></input>
    <button type='button' onClick={handleAdd}> <span>Add</span></button>
    </div>
  )
}

export default Create