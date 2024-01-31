import React,{useEffect, useState} from 'react'
import Create from './Create';
import axios from 'axios';


function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err)) 
    },[todos])


    const handleElement = (id) => {
        axios.put('http://localhost:3001/update/' + id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err)) 

    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err)) 
    }
  return (
    <div className='container'><div className='heading'><h2 >To-Do List</h2></div>
    <Create />
   
    {
        todos.length === 0 
        ?
        
        <div><h2>No record</h2></div>
        :<ul >
            {
                todos.map(todo => (
                    <div  className="checkBox" onClick={ () => handleElement(todo._id)}>
                    <li className={todo.done ? "linethrough" : ""} >{todo.task}</li>
                    <button onClick={() => handleDelete(todo._id)}> <span >Clear</span></button>
                     
                    

                    </div>
           
          ))
    

            }
        </ul>
            
    }
    </div>
   
  );
}

export default Home;