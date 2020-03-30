import React from "react";
import { Switch, Route } from "react-router-dom";
import { SliderPage, TodoPage, HomePage, LineSliderPage, FormikFormPage } from "../pages";
import { DefaultGuard } from "./guards";

const routes = [
  { guard: DefaultGuard, path: "/home", component: HomePage },
  { guard: DefaultGuard, path: "/slider", component: SliderPage },
  { guard: DefaultGuard, path: "/todo", component: TodoPage },
  { guard: DefaultGuard, path: "/lineSlider", component: LineSliderPage },
  { guard: DefaultGuard, path: "/formikForm", component: FormikFormPage }
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component, guard }, i) => (
        <Route key={i} path={path} component={() => guard(component)} />
      ))}
    </Switch>
  );
};

export default Routes;
