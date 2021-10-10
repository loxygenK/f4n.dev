import React from "react";
import { BrowserRouter, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ContentWrapper } from "~/comps/layout/CotentWrapper";
import { Main } from "./main/Main";
import { Splash } from "./splash/Splash";

class InternalAppRouter extends React.Component<RouteComponentProps> {
  render() {
    return (
      <ContentWrapper>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="hoge"
            timeout={200}>
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/me" component={Main} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      </ContentWrapper>
    );
  }
}

export const AppRouter = () => {
  const WithRoutered = withRouter(InternalAppRouter);

  return (
    <BrowserRouter>
      <WithRoutered />
    </BrowserRouter>
  );
};
