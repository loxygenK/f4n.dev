import React from "react";
import {Route, RouteProps, useLocation} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import styles from "./TransitionAnimator.module.scss";

export type TransitionAnimatorProps = {
  children: React.ReactNode;
}

export const TransitionAnimator = ({children}: TransitionAnimatorProps) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames={{
              enter: styles.pageEnter,
              enterActive: styles.pageEnterActive,
              exit: styles.pageExit,
              exitActive: styles.pageExitActive
            }}
            mountOnEnter={false}
            unmountOnExit
          >
            {children}
          </CSSTransition>
        </TransitionGroup>
  );
}
