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
