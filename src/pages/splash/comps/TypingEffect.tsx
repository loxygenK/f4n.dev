import React from "react";

import styles from "../Splash.module.scss";

export type TypingEffectProps = {
  interval: number;
  delay: number;
  notifyAt: number;
  onNotify: () => void;
  onCompleted: () => void;
  children: string;
}
type State = {
  intervalCount: number;
  notified: boolean;
  interval?: NodeJS.Timeout;
}
export class TypingEffect extends React.Component<TypingEffectProps, State> {

  constructor(props: TypingEffectProps) {
    super(props);

    this.state = {
      intervalCount: 0,
      notified: false
    };
  }

  handleTick() {
    const clearAt = this.props.delay + this.props.children.length + Math.max(this.props.notifyAt, 0);
    const notifyAt = this.props.delay + this.props.children.length + this.props.notifyAt;

    if(!this.state.notified && this.state.intervalCount >= notifyAt) {
      this.props.onNotify();
    }

    if(this.state.intervalCount >= clearAt) {
      if(this.state.interval == null) throw Error("state.interval must not be null");
      clearInterval(this.state.interval);
      this.props.onCompleted();
      return;
    }

    this.setState({
      intervalCount: this.state.intervalCount + 1,
      interval: setTimeout(
        this.handleTick.bind(this),
        this.props.interval * ((1 + (this.state.intervalCount / this.props.children.length) * 2))
      )
    });
  }

  componentDidMount() {
    this.setState({
      interval: setTimeout(this.handleTick.bind(this), this.props.interval),
    });
  }

  render() {
    const clipIndex = Math.max(0, this.state.intervalCount - this.props.delay);

    return (
      <span>
        <span>{this.props.children.substr(0, clipIndex)}</span>
        <span className={styles.hide}>{this.props.children.substr(clipIndex)}</span>
      </span>
    );
  }
}
