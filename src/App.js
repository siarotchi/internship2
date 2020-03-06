import React from "react";
import { Switch, Route } from "react-router-dom";

import SliderPage from "./pages/slider";
import TodoPage from "./pages/todo";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/slider" component={SliderPage} />
        <Route path="/todo" component={TodoPage} />
        <Route
          component={() => (
            <React.Fragment>Sorry, this page was not found</React.Fragment>
          )}
        />
      </Switch>
    );
  }
}

export default App;

// <div className="App">
//   <Slider />
//
//   <Todo />
// </div>
