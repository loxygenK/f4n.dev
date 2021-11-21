import { RouteProps } from "react-router-dom";
import { Splash } from "~/pages/splash/Splash";
import { Main } from "~/pages/main/Main";
import { About } from "../about/About";
import { Skills } from "../skills/Skills";

export type QuickNavigation = {
  path: string;
  caption: string;
};

export const routingTable: RouteProps[] = [
  { path: "/", component: Splash, exact: true },
  { path: "/me", component: Main, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/skills", component: Skills, exact: true },
];

export const quickNavigations: QuickNavigation[] = [
  { path: "/about", caption: "自己紹介" },
  { path: "/skills", caption: "スキル" },
  { path: "/careers", caption: "実績" },
];
