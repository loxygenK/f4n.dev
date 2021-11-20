import React from "react";
import { Link } from "react-router-dom";
import { quickNavigations } from "~/pages/router/routing";
import { LogoImage } from "../shared/LogoImage";

import styles from "./Header.module.scss";

export const Header: React.VFC = () => (
  <div className={styles.header}>
    <Link to={"/me"}>
      <LogoImage className={styles.icon} enableAnimation={false} />
    </Link>
    <nav>
      <ol className={styles.navigation}>
        {quickNavigations.map((nav, index) => (
          <li className={styles.navigationItem} key={index}>
            <Link to={nav.path}>
              <span>{nav.caption}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  </div>
);
