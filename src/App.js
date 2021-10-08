import './App.css';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Hero from './Hero';
import Nav from './Nav'
import Contact from './Contact';
import Projects from './Projects';
import { AnimatePresence } from 'framer-motion'



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
   </div>
  );
}

export default App;
