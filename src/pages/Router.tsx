import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Main} from "./main/Main";
import { Splash } from "./splash/Splash";

export const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/me" component={Main} />
      </Switch>
    </BrowserRouter>
  </div>
);
