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
    <div className=""
      style={{
        backgroundImage: `url(${seating})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
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
