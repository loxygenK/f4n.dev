import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { ContentWrapper } from "~/comps/layout/CotentWrapper";
import { TransitionAnimator } from "~/comps/style/transition/TransitionAnimator";
import { routingTable } from "./routing";

export const InternalAppRouter = () => {
  const location = useLocation();

  const enableAnimation =
    routingTable.find((p) => p.path == location.pathname)
      ?.transactionAnimation ?? true;

  return (
    <TransitionAnimator enableAnimation={enableAnimation}>
      <ContentWrapper>
        <Switch location={location}>
          {routingTable.map((r, i) => (
            <Route key={i} {...r} />
          ))}
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
