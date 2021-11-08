import React from "react";
import { HTMLAttributeProps } from "~/utils/types";

import styles from "./LogoImage.module.scss";
import LogoSVG from "~/asset/visual.svg";

export type LogoProps = {
  enableAnimation?: boolean
} & HTMLAttributeProps<HTMLImageElement>;
export const LogoImage: React.VFC<LogoProps> = ({enableAnimation = true, ...props}) => {
  return (
    <div
      className={`${styles.logoImageWrapper} ${enableAnimation ? styles.enableAnimation: ""}`}
    >
      <LogoSVG {...props} />
    </div>
  );
};
