import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import SliderPage from "./pages/slider";
import TodoPage from "./pages/todo";
import HomePage from "./pages/home";
import { Header } from "./components/.";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/slider" component={SliderPage} />
          <Route exact path="/todo" component={TodoPage} />
          <Route
            path="/444"
            render={() => <h1>MAN!!! NOT DONE YET!!!GEEZ!</h1>}
          />
          <Route
            component={() => (
              <React.Fragment>Sorry, this page was not found</React.Fragment>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
