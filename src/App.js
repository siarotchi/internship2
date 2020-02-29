import React from "react";
import { Todo } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Tasks for the Day:</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
