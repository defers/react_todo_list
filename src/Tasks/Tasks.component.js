import Task from "../Task/Task.component";
import s from './Tasks.module.css';

const Tasks = ({ tasks, deleteTask, toggleCompleteTask }) => {
  
  return (
    <div className={s.tasks}>
      {tasks.map((task) => {
        return <Task key={task.id} 
                     task={task} 
                     deleteTask={deleteTask}
                     toggleCompleteTask={toggleCompleteTask} />;
      })}
    </div>
  );
};

export default Tasks;
