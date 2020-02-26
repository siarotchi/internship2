import React from 'react'

const Task = ({task, ...props}) => {
    const ActionBtn = () => <div className='action-btn'>{ !task.done 
        ? <p onClick={props.doneTask} >&#10004;</p> 
        : <p onClick={props.deleteTask}>&#10006;</p>}</div>;    

    const className = 'task' + (task.done ? 'task-done' : '')

    const checkClass = () => {
        if(task.done === true) {
        props.input.className += " lineTh";
        props.input.classList.add('lineTh')
    }
}
    return (
        <div className='task'>
            <p>{task.title}</p>
            <ActionBtn/>
        </div>
    );
};

export default Task;