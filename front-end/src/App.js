import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import seating from "./images/seating.jpg";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${seating})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1100px",
      }}
    >
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
