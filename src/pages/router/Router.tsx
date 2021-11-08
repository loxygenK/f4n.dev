import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Header } from "~/comps/common/Header";
import { ContentWrapper } from "~/comps/layout/CotentWrapper";
import { TransitionAnimator } from "~/comps/style/transition/TransitionAnimator";
import { routingTable } from "./routing";

export const InternalAppRouter = () => {
  const location = useLocation();

  return (
    <TransitionAnimator>
      <ContentWrapper>
        <Header />
        <Switch location={location}>
          {routingTable.map((r, i) => (
            <Route key={i} {...r} />
          ))}
          <Route path="/about" component={() => <div>Hello!</div>} />
        </Switch>
      </ContentWrapper>
    </TransitionAnimator>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <InternalAppRouter />
    </BrowserRouter>
  );
};
