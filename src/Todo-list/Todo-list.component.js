import TodoForm from './../Todo-form/Todo-form.component';
import './Todo-list.style.css';
import { useState } from 'react';
import Tasks from '../Tasks/Tasks.component';


const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    const addTasks = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString().slice(2, 9),
                taskDescription: userInput,
                complete: false 
            }
            setTasks([...tasks, newItem]);    
        }
    }

    return (
    <div className='todo-list'>
        <TodoForm addTask = {addTasks}/>
        <Tasks tasks = {tasks}/>
    </div>
  );
}

export default TodoList;