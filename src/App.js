import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
// import ProductDetails from "./containers/ProductDetails";
import Login from "./containers/userRegistration/Login";
import Profile from "./containers/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          {/* <Route path="/product/:productId" component={ProductDetails} /> */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
