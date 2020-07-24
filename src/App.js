import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Protest from "./pages/Protest";
import Read from "./pages/Read";
import Watch from "./pages/Watch";
import Listen from "./pages/Listen";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Resources from "./pages/Resources";
import Petitions from "./pages/Petitions";
import History from "./pages/History";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";

const history = createHistory()
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [])

  const bgColor = "#e6e3db";

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Router>
        <Switch>
          <Route path="/protest">
            <NavBar />
            <MobileNavbar />
            <Protest />
          </Route>
          <Route path="/read">
            <NavBar />
            <MobileNavbar />
            <Read />
          </Route>
          <Route path="/watch">
            <NavBar />
            <MobileNavbar />
            <Watch />
          </Route>
          <Route path="/listen">
            <NavBar />
            <MobileNavbar />
            <Listen />
          </Route>
          <Route path="/contact">
            <NavBar />
            <MobileNavbar />
            <Contact />
          </Route>
          <Route path="/donate">
            <NavBar />
            <MobileNavbar />
            <Donate />
          </Route>
          <Route path="/petitions">
            <NavBar />
            <MobileNavbar />
            <Petitions />
          </Route>
          <Route path="/resources">
            <NavBar />
            <MobileNavbar />
            <Resources />
          </Route>
          <Route path="/history">
            <NavBar />
            <MobileNavbar />
            <History />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
