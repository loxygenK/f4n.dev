import React from "react";
import {useHistory} from "react-router-dom";
import { combineClassName } from "~/utils/combineClassName";
import { TypingEffect } from "./comps/TypingEffect";
import styles from "./Splash.module.scss";

export const Splash = () => {
  const history = useHistory();

  const [scaling, setScaling] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  const handleTypingEffectCompleted = () => {
    setTimeout(() => history.push("/me"), 1250);
    setCompleted(true);
  }

  return (
    <div className={styles.splashWrapper}>
      <div
        className={combineClassName([
          styles.splash,
          scaling ? styles.scaling : "",
        ])}
      >
        <div className={styles.terminal}>
          <div>
            <span className={styles.pwd}>loxygenK/portfolio</span>
          </div>
          <div>
            <span className={styles.arrowBody}>└</span>
            <span className={styles.arrowTip}>&gt;</span>
            <TypingEffect
              interval={20}
              delay={15}
              notifyAt={-12}
              onNotify={() => setScaling(true)}
              onCompleted={handleTypingEffectCompleted}
            >
              find ./me | xargs open --as=portfolio
            </TypingEffect>
          </div>
          <span
            className={combineClassName([
              styles.output,
              completed ? "" : styles.hide,
            ])}
          >
            Opening in the current sesison...
          </span>
        </div>
      </div>
    </div>
  );
};
