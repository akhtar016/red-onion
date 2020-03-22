import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import AllFoods from "./Components/AllFoods/AllFoods";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";
import ParticularItemDetails from "./Components/ParticularItemDetails/ParticularItemDetails";
import TopBanner from "./Components/TopBanner/TopBanner";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <AllFoods></AllFoods>
          </Route>


          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <SignUp></SignUp>
          </Route>

          <Route path="/food/:key">
          


            <ParticularItemDetails></ParticularItemDetails>

          </Route>

          <Route path="*">
            <NotFound></NotFound>

          </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
