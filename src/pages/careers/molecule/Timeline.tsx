import React from "react";
import { AwaitFetch } from "~/comps/shared/AwaitFetch";
import { TimelineElement } from "../atom/TimelineElement";
import { useCareersAPI } from "../controller";

import styles from "./Timeline.module.scss";

export const Timeline: React.VFC = () => {
  const { loading, error, data } = useCareersAPI();

  return (
    <AwaitFetch loading={loading} error={error} data={data}>
      {(data) => (
        <div className={styles.container}>
          <div className={styles.scopeOut} />
          <div className={styles.mainTimeline}>
            {data.careers.map((i, k) => (
              <TimelineElement key={k} />
            ))}
          </div>
          <div className={styles.scopeOut} />
        </div>
      )}
    </AwaitFetch>
  );
};
