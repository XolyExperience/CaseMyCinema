import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Movie from "./components/Movie";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/admin" component={Admin} />
          <Route path="/movie" component={Movie} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
