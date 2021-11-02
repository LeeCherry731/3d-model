import React, { ReactElement, Suspense } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <Router>
      <Suspense fallback={<div>Loding</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
