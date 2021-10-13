import { RouteProps } from "react-router-dom";
import { Splash } from "~/pages/splash/Splash";
import { Main } from "~/pages/main/Main";
import {About} from "../about/About";

export const routingTable: RouteProps[] = [
  { path: "/", component: Splash, exact: true },
  { path: "/me", component: Main, exact: true },
  { path: "/about", component: About, exact: true },
];
