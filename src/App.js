import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";

import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Nav />
        <Home />
      </Route>
    </div>
  );
}

export default App;
