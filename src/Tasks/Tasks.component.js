import Task from "../Task/Task.component";
import s from './Tasks.module.css';

const Tasks = ({ tasks }) => {
  return (
    <div className={s.tasks}>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Tasks;
