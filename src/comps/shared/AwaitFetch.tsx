import React from "react";

import { Emoji } from "./Emoji";

export type AwaitFetchProps<T> = {
  loading: boolean;
  error?: Error;
  data: NonNullable<T> | undefined;
  children: (data: NonNullable<T>) => React.ReactElement;
};

// TypeScript recognizes <T> as JSX tag, however it doesn't when "<T,>".
// (adding trail comma)
export const AwaitFetch = <T,>({
  loading,
  error,
  data,
  children,
}: AwaitFetchProps<T>) => {
  if (error)
    return (
      <p>
        <Emoji emoji="😵" />
        読み込みに失敗しました!
      </p>
    );
  if (loading || data === undefined)
    return (
      <p>
        <Emoji emoji="🔎" />
        Loading...
      </p>
    );

  return children(data);
};
