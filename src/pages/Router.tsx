import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContentWrapper } from "~/comps/layout/CotentWrapper";
import {LogoPage} from "./logo/LogoPage";
import { Main } from "./main/Main";
import { Splash } from "./splash/Splash";

export const AppRouter = () => (
  <ContentWrapper>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/me" component={Main} />
        <Route exact path="/home" component={ LogoPage } />
      </Switch>
    </BrowserRouter>
  </ContentWrapper>
);
