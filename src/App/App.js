import TodoList from "../Todo-list/Todo-list.component";
import './App.css';
import { useState } from 'react';
import MainPage from '../Main-page/Main-page.component.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./../Header/Header.component.js"

const App = () => {
  
  // =====TASKS=====
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
  
  const deleteTask = (deletedTask) => {
    setTasks([ ...tasks.filter((task)=>task.id!=deletedTask.id)]);
  };
  
  const toggleCompleteTask = (taskCompleted) => {     
    setTasks([
        ...tasks.map((task) =>
        task.id === taskCompleted.id ? {...task, complete: !task.complete} : {...task})
    ]);
  };

  // =====HEADER=====
  const [activeElement, setActiveElement] = useState(0);
  
  const handleClick = (id) => {
      setActiveElement(id);
  }

  return (  
    <div>
    <BrowserRouter>
      <Header activeElement={activeElement} handleClick={handleClick}/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/tasks" element={<TodoList tasks={tasks} addTasks={addTasks} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
