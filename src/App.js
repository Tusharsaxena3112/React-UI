import React from "react";
// import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/React-UI" component={Home}></Route>
        <Route exact path="/series" component={Series}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/bollywood" component={Movies}></Route>
        <Route exact path="/hollywood" component={Movies}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
