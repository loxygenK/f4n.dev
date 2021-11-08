import React from "react";
import {Link} from "react-router-dom";
import {LogoImage} from "../shared/LogoImage";

import styles from "./Header.module.scss";

export const Header: React.VFC = () => (
  <div className={styles.header}>
    <Link to={"/me"}>
      <LogoImage className={styles.icon} enableAnimation={false}/>
    </Link>
    <nav>
      <ol className={styles.navigation}>
        <li className={styles.navigationItem}><span>123</span></li>
        <li className={styles.navigationItem}><span>123</span></li>
        <li className={styles.navigationItem}><span>123</span></li>
        <li className={styles.navigationItem}><span>123</span></li>
      </ol>
    </nav>
  </div>
)
