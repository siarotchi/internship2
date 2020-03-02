import React from "react";
import { Todo, Slider } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Slider />
        <h1 className="App-header">Tasks for the Day:</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
