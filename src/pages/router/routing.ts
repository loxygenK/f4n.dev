import { RouteProps } from "react-router-dom";
import { Splash } from "~/pages/splash/Splash";
import { Main } from "~/pages/main/Main";

export type RoutingTable = RouteProps & { transactionAnimation: boolean };
export const routingTable: RoutingTable[] = [
  { path: "/", component: Splash, exact: true, transactionAnimation: false },
  { path: "/me", component: Main, exact: true, transactionAnimation: true },
];
