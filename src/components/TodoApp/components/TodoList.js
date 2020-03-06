import React from "react";

const TodoList = ({ task, doneTask, deleteTask }) => {
  const className = `task ${task.done ? "lineTh" : ""}`;

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionBtn task={task} doneTask={doneTask} deleteTask={deleteTask} />
    </div>
  );
};

const ActionBtn = ({ task, doneTask, deleteTask }) => (
  <div className="action-btn">
    {!task.done ? (
      <button
        onClick={doneTask}
        type="button"
        className="btn btn-outline-success"
      ></button>
    ) : (
      <button
        onClick={deleteTask}
        type="button"
        className="btn btn-outline-danger"
      ></button>
    )}

    {/* { <p onClick={doneTask}>&#10004;</p>
    ) : (
      <p onClick={deleteTask}>&#10006;</p>
    )} } */}
  </div>
);

export default TodoList;
