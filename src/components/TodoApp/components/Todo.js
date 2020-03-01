import React from "react";
import { TodoList } from ".";
import { TodoInput } from ".";

class Todo extends React.Component {
  state = {
    tasks: [
      { id: 0, title: "Create react todo app", done: false },
      { id: 1, title: "Use Classes", done: true },
      { id: 2, title: "Add buttons", done: false }
    ]
  };

  addTask = task => {
    this.setState(({ tasks }) => ({
      tasks: [
        ...tasks,
        {
          id: tasks.length !== 0 ? task.lenght : 0,
          title: task,
          done: false
        }
      ]
    }));
  };

  doneTask = id => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task => {
        if (task.id === id) task.done = true;
        return task;
      })
    }));
  };

  deleteTask = id => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(task => task.id !== id)
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <TodoInput addTask={this.addTask} tasks={tasks} />
        {tasks.map(task => (
          <TodoList
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            ClearAllBtn={this.ClearAllBtn}
            task={task}
            key={task.id}
          />
        ))}
      </>
    );
  }
}

export default Todo;