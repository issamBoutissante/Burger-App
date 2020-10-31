import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <BurgerBuilder />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/order" render={() => <h1>Hello issam</h1>} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
