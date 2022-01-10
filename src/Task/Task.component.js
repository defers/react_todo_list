import s from './Task.module.css';

const Task = ({task}) => {
    return (
    <div className={s.task}>
        <div className={s.taskDescription}>{task.taskDescription}</div>
        <div className={s.deleteTask}><button >&#9003;</button></div>
    </div>);
};

export default Task;
