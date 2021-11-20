import React from "react";
import { Affiliation } from "../atoms/Affiriation";
import { useBasicAPI } from "../controller";

import styles from "./Introduction.module.scss";

export const Introduction = () => {
  const { loading, error, data } = useBasicAPI();

  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <span className={styles.primary}>{data.basic.name.primary}</span>
        <span className={styles.aka}>{data.basic.name.aka.join(" / ")}</span>
      </div>
      <div className={styles.affiriation}>
        {data.basic.affiliation.map((a, key) => (
          <Affiliation {...a} key={key} />
        ))}
      </div>
      <p>{data.basic.introduction}</p>
    </div>
  );
};
