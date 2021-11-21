import { Dayjs } from "dayjs";
import React from "react";

import styles from "./TimelineElement.module.scss";

export type TimelineElementProps = {
  when: Dayjs;
  title: string;
};
export const TimelineElement: React.VFC<TimelineElementProps> = ({
  when,
  title,
}) => (
  <div className={styles.container}>
    <div className={styles.cursor} />
    <div className={styles.card}>
      <span className={styles.date}>{when.format("YYYY/MM/DD")}</span>
      <span className={styles.title}>{title}</span>
    </div>
  </div>
);
