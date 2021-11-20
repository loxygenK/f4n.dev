import React from "react";
import { Affiliation as AffiliationEntity } from "~/api/graphql/autogen/scheme";

import styles from "./Affiriation.module.scss";

export const Affiliation: React.VFC<AffiliationEntity> = (props) => (
  <div className={styles.element}>
    <span className={styles.location}>{props.location}</span>
    <span className={styles.assign}>{props.assign}</span>
  </div>
);
