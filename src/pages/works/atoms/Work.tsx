import React from "react";
import { Status, Work as WorkEntity } from "~/api/graphql/autogen/scheme";

import styles from "./Work.module.scss";

const statusToCaption: { [key in Status]: string } = {
  ADVANCING: "積極的に開発中",
  ARCHIVED: "開発終了",
  COMPLETED: "完成",
  DEVELOPING: "開発途中",
  MAINTENANCING: "メンテナンス中",
};

export type WorkProps = WorkEntity;
export const Work: React.VFC<WorkProps> = (props) => (
  <div className={styles.container}>
    <p className={styles.workInfo}>
      <span className={styles.title}>{props.name}</span>
      <span className={styles.tags}>{props.tags.join(" / ")}</span>
    </p>
    <div className={styles.separator} />
    <p>{props.description}</p>
    <div className={styles.separator} />
    <p className={styles.workInfo}>
      {props.repoUrl == null ? (
        <span className={styles.url}>ソースコードは非公開です．</span>
      ) : (
        <a href={props.repoUrl} target="_blank" rel="noreferrer">
          <span className={styles.url}>{props.repoUrl}</span>
        </a>
      )}
    </p>
    <div className={styles.statusBand}>{statusToCaption[props.status]}</div>
  </div>
);
