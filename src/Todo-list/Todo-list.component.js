import TodoForm from "./../Todo-form/Todo-form.component";
import "./Todo-list.style.css";
import Tasks from "../Tasks/Tasks.component";

const TodoList = ({ tasks, addTasks, deleteTask, toggleCompleteTask }) => {
  return (
    <div>
      <div className="todo-list">
        <TodoForm addTask={addTasks} />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleCompleteTask={toggleCompleteTask}
        />
      </div>
    </div>
  );
};

export default TodoList;
