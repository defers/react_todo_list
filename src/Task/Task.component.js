import s from './Task.module.css';

const Task = ({task, deleteTask, toggleCompleteTask}) => {
    
    return (
    <div className={s.task}>
        <div className={s.taskDescription} 
             onClick={()=>toggleCompleteTask(task)}
             style={task.complete ? {textDecoration: 'line-through'} : {}}>
            
            {task.taskDescription}

        </div>
        <div className={s.deleteTask}><button onClick={()=>deleteTask(task)}>&#9003;</button></div>
    </div>);
};

export default Task;
