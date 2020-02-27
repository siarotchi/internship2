import React from "react";
import { Todo } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="top">Tasks for the Day:</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
