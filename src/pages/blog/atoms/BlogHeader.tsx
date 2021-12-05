import React from "react";

import dayjs, { Dayjs } from "dayjs";
import { Heading } from "~/comps/shared/Heading";
import { Tag } from "./Tag";

import styles from "./BlogHeader.module.scss";
import { Splitter } from "~/comps/shared/Splitter";

export type BlogHeaderProps = {
  title: string;
  emoji: string;
  slug: string;
  posted: string;
  tags: string[];
};
export const BlogHeader: React.VFC<BlogHeaderProps> = (props) => (
  <div className={styles.header}>
    <Heading emoji={props.emoji} sub={props.slug} disableBottomMargin>
      {props.title}
    </Heading>
    <div>
      <span>{dayjs(props.posted).format("YYYY/MM/DD")}</span>
      <Splitter />
      <span className={styles.tags}>
        {props.tags.map((c, i) => (
          <Tag caption={c} key={i} />
        ))}
      </span>
    </div>
  </div>
);
