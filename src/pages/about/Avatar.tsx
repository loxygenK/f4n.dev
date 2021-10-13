import React from "react";
import styles from "./Avatar.module.scss";

export const Avatar = () => (
      <div>
        <div className={styles.avatar}>
          <img src="/static/loxygen_k.png" />
        </div>
        <span>
          Icon by:
          <a href="https://twitter.com/unios103i" target="_blank" rel="noreferrer">
            @unios103i
          </a>
        </span>
      </div>
);
