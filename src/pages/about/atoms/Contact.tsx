import React from "react";

import styles from "./Contact.module.scss";

export type ContactProps = {
  service: string;
  url: string;
  identifier: string;
};
export const Contact: React.VFC<ContactProps> = (props) => (
  <a
    href={props.url}
    target="_blank"
    rel="noreferrer"
    className={styles.contact}
  >
    {props.service}
  </a>
);
