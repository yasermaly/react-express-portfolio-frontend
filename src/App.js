import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const URL = "https://thawing-dusk-84179.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects URL={URL} />
          </Route>
          <Route path="/about">
            <About URL={URL} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
