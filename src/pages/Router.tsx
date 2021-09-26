import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Splash } from "./splash/Splash";

export const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Splash} />
    </BrowserRouter>
  </div>
);
