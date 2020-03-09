import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TodoList = ({ task, doneTask, deleteTask }) => {
  const className = `task ${task.done ? "lineTh" : ""}`;

  return (
    <div className={className}>
      <ul class="list-group">
        <li class="list-group-item">
          {task.title}{" "}
          <ActionBtn task={task} doneTask={doneTask} deleteTask={deleteTask} />
        </li>
      </ul>
    </div>
  );
};

const ActionBtn = ({ task, doneTask, deleteTask }) => (
  <div className="action-btn">
    {!task.done ? (
      <button
        onClick={doneTask}
        type="button"
        className="btn btn-outline-success btn-lg"
      >
        &#9998;
      </button>
    ) : (
      <button
        onClick={deleteTask}
        type="button"
        className="btn btn-outline-danger btn-lg"
      >
        &#10006;
      </button>
    )}
  </div>
);

export default TodoList;
