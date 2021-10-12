import React from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {CSSTransitionClassNames} from "react-transition-group/CSSTransition";

import styles from "./TransitionAnimator.module.scss";

const transitionClassNames: CSSTransitionClassNames = {
          enter: styles.pageEnter,
          enterActive: styles.pageEnterActive,
          exit: styles.pageExit,
          exitActive: styles.pageExitActive,
        };

export type TransitionAnimatorProps = {
  children: React.ReactNode;
  enableAnimation: boolean
};

export const TransitionAnimator = ({ children, enableAnimation }: TransitionAnimatorProps) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={enableAnimation ? 300 : 0}
        classNames={enableAnimation ? transitionClassNames : {}}
        mountOnEnter={false}
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
