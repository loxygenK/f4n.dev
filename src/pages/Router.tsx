import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={() => <div>Hi</div>} />
    </BrowserRouter>
  </div>
);
