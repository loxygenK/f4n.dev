import React from "react";

import styles from "./Introduction.module.scss";

export const Introduction = () => (
  <div className={styles.wrapper}>
    <div className={styles.name}>
      <span className={styles.primary}>フライさん</span>
      <span className={styles.aka}>Flisan / loxygen.K</span>
    </div>
    <div className={styles.affiriation}>
      <div className={styles.element}>
        <span className={styles.location}>茨城工業高等専門学校</span>
        <span>3 年 情報系</span>
      </div>
      <div className={styles.element}>
        <span className={styles.location}>茨城工業高等専門学校</span>
        <span>3 年 情報系</span>
      </div>
    </div>
    フライさんです．
  </div>
);
