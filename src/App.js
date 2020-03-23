import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/.";
import { SliderPage, TodoPage, HomePage, LineSliderPage } from "./pages";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/slider" component={SliderPage} />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/lineSlider" component={LineSliderPage} />
          <Route path="/444" render={() => <h1>MAN!!! NOT DONE YET!!!GEEZ!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
