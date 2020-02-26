import React from "react";

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  addTask = () => {
    const { value } = this.state;
    if (!value) return null;

    this.props.addTask(value);
    this.setState({ value: "" });
  };

  inputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleEnter = event => {
    if (event.key === "Enter") {
      this.addTask();
    }
  };

  render() {
    const { value } = this.state;

    return (
      <div className="task-input">
        <input
          type="text"
          className={`task-control`}
          placeholder="Put name of todo"
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
          value={value}
        ></input>
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
}

export default TaskInput;
