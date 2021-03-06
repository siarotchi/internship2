import React from "react";

class TodoInput extends React.Component {
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
          className="form-control"
          placeholder="Put name of todo"
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
          value={value}
        ></input>
        {/* <button onClick={this.addTask}>Add</button> */}
        <button
          onClick={this.addTask}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button>
        {/* <button onClick={this.ClearAllBtn}>Clear All</button> */}
      </div>
    );
  }
}

export default TodoInput;
