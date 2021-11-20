import React from "react";
import { useAPI } from "./api/setup";

import { AppRouter } from "./pages/router/Router";

const api = useAPI();

export const App = () => (
  <api.APIProvider>
    <AppRouter />
  </api.APIProvider>
);
