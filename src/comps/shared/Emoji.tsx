import React from "react";
import Twemoji from "react-twemoji";

import styles from "./Emoji.module.scss";

export type EmojiProps = React.HTMLAttributes<HTMLSpanElement> & {
  emoji: string;
}
export const Emoji = ({emoji, className, ...props}: EmojiProps) => (
  <Twemoji noWrapper>
    <span className={styles.emojiDefault + " " + className} {...props}>
      {emoji}
    </span>
  </Twemoji>
)
