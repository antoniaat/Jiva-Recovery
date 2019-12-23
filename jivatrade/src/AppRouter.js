import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/Home";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" component={HomePage} />
    </BrowserRouter>
  </div>
);

export default AppRouter;
