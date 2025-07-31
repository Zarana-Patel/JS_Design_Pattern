import React,{useState} from 'react';
import {emitter} from './EventEmitter';


const TodoInput =()=>{
    const[todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');
    const handleAdd =()=>{
       
        //emit new todo event
        emitter.emit("new-todo",newTodoText);
        setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]);
    }
    return(
        <>
            <input  type="text" value={newTodoText} onChange={(e)=>setNewTodoText(e.target.value)} placeholder='enter a todo' />
            <button onClick={handleAdd}>Add to list</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}
export default TodoInput;
