import React from "react";
import { Todo } from "./components";
import Slider from "./components/Slider/components/Slider";

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
