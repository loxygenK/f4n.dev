import React from "react";
import {useAPI} from "./api/setup";

import { AppRouter } from "./pages/Router";

const api = useAPI();

export const App = () => (
  <api.APIProvider>
    <AppRouter />
  </api.APIProvider>
);
