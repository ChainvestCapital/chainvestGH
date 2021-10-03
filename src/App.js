import './App.css';

import {Route, Link} from "react-router-dom";


import Home from './Home.js'
import alleProjekte from './alleProjekte.js'
import about from './about.js'

import Bitbond from './STOs/Bitbond.js'
import MusterProject from './STOs/MusterProject.js'

function App() {
  return (
    
    <div >

          <Route exact path="/" component={Home} />
          <Route exact path="/alleProjekte" component={alleProjekte} />
          <Route exact path="/about" component={about} />

          <Route exact path="/security-token-offering/Bitbond" component={Bitbond} />

          <Route exact path="/security-token-offering/musterproject" component={MusterProject} />




    </div>

  );
}

export default App;
