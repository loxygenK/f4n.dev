declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const component: (
    props: HTMLAttributeProps<React.ReactSVGElement>
  ) => React.ReactElement;
  export default component;
}

declare module "react-twemoji" {
  const Twemoji: (
    props:  {
      children: React.ReactNode,
      noWrapper?: boolean,
      tag?: string
    }
  ) => React.ReactElement;
  export default Twemoji;
}
