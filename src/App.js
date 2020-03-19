import React from "react";
import { Switch, Route } from "react-router-dom";
import SliderPage from "./pages/slider";
import TodoPage from "./pages/todo";
import HomePage from "./pages/home";
import { Header } from "./components/.";
import Slider333Page from "./pages/333";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/slider" component={SliderPage} />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/333" component={Slider333Page} />
          <Route
            path="/444"
            render={() => <h1>MAN!!! NOT DONE YET!!!GEEZ!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
