import React from "react";
import { AwaitFetch } from "~/comps/shared/AwaitFetch";
import { Work } from "../atoms/Work";
import { useWorksAPI } from "../controller";

import styles from "./WorksList.module.scss";

export const WorksList = () => {
  const { loading, error, data } = useWorksAPI();

  return (
    <AwaitFetch loading={loading} error={error} data={data}>
      {(data) => (
        <div className={styles.container}>
          {data.works.map((work, i) => (
            <Work {...work} key={i} />
          ))}
        </div>
      )}
    </AwaitFetch>
  );
};
