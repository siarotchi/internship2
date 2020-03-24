import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/.";
import { SliderPage, TodoPage, HomePage, LineSliderPage, FormikFormPage } from "./pages";

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
          <Route exact path="/formikForm" component={FormikFormPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
