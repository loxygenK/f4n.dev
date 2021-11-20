import React from "react";
import { AwaitFetch } from "~/comps/shared/AwaitFetch";
import { Affiliation } from "../atoms/Affiriation";
import { useBasicAPI } from "../controller";

import styles from "./Introduction.module.scss";

export const Introduction = () => {
  const { loading, error, data } = useBasicAPI();

  return (
    <AwaitFetch loading={loading} error={error} data={data}>
      {(data) => (
        <div className={styles.wrapper}>
          <div className={styles.name}>
            <span className={styles.primary}>{data.basic.name.primary}</span>
            <span className={styles.aka}>
              {data.basic.name.aka.join(" / ")}
            </span>
          </div>
          <div className={styles.affiriation}>
            {data.basic.affiliation.map((a, key) => (
              <Affiliation {...a} key={key} />
            ))}
          </div>
          <p>{data.basic.introduction}</p>
        </div>
      )}
    </AwaitFetch>
  );
};
