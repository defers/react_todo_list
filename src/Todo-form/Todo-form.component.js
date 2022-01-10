import "./Todo-form.style.css";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const submitTask = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form className="todo-form" onSubmit={submitTask}>
      <label htmlFor="taskField" className='form-label'>New task:</label>
        <input
          type="text"
          id="taskField"
          value={userInput}
          placeholder="Type your task here..."
          className="input-text"
          onChange={(e) => setUserInput(e.currentTarget.value)}
        />
     
      <input type="submit" value="Add" className="input-button" />
    </form>
  );
};

export default TodoForm;
