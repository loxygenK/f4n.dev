import React from "react";
import { BrowserRouter, Route, RouteComponentProps, Switch, useLocation, withRouter } from "react-router-dom";
import { ContentWrapper } from "~/comps/layout/CotentWrapper";
import { Main } from "./main/Main";
import { Splash } from "./splash/Splash";
import { TransitionAnimator } from "./transition/TransitionAnimator";

export const InternalAppRouter = () => {
  const location = useLocation();

  return (
      <ContentWrapper>
      <TransitionAnimator>
        <Switch location={location}>
          <Route exact path="/" component={Splash} />
          <Route exact path="/me" component={Main} />
        </Switch>
      </TransitionAnimator>
      </ContentWrapper>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <InternalAppRouter />
    </BrowserRouter>
  )

}
