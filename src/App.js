import React from "react";
// import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
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
