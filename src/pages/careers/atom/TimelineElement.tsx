import React from "react";

import styles from "./TimelineElement.module.scss";

export const TimelineElement: React.VFC = () => (
  <div className={styles.container}>
    <div className={styles.cursor} />
    <div className={styles.card}>TimelineElement</div>
  </div>
);
