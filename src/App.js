import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (

    <div className="App"> 
    <Router>
      <Header />
      <Routes>
      <Route path="/">
          <Home />
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>
      </Routes>
      
    </Router>

    <Home />
     </div>
     
  );

}

export default App;
