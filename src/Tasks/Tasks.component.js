import Task from "../Task/Task.component";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Tasks;
