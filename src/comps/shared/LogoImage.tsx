import React from "react";
import { HTMLAttributeProps } from "~/utils/types";

import styles from "./LogoImage.module.scss";
import LogoSVG from "~/asset/visual.svg";

export type LogoProps = HTMLAttributeProps<HTMLImageElement>;
export const LogoImage = (props: LogoProps) => (
  <div className={styles.logoImageWrapper}>
    <LogoSVG {...props} />
  </div>
);
