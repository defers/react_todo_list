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
      <input
        type="text"
        value={userInput}
        className="input-text"
        onChange={(e) => (setUserInput(e.currentTarget.value))}
      />
      <input type="submit" value="Add" className="input-button" />
    </form>
  );
};

export default TodoForm;
