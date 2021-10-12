import React from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import styles from "./TransitionAnimator.module.scss";

const transitionClassNames: CSSTransitionClassNames = {
  enter: styles.transitionEnter,
  enterActive: styles.transitionEnterActive,
  exit: styles.transitionExit,
  exitActive: styles.transitionExitActive,
  exitDone: styles.transitionExitDone
};

export type TransitionAnimatorProps = {
  children: React.ReactNode;
  enableAnimation: boolean;
};

export const TransitionAnimator = ({
  children,
  enableAnimation,
}: TransitionAnimatorProps) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={enableAnimation ? {
          exit: 750,
          enter: 1350
        }: 0}
        classNames={enableAnimation ? transitionClassNames : {}}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
