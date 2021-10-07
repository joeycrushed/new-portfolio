import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hero from './Hero';
import Nav from './Nav'
import Contact from './Contact';
import Projects from './Projects';



function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
        <Switch>

          <Route path="/" exact>
              <Hero />
          </Route>
       
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
    </Router>

   </div>
  );
}

export default App;
