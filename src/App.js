import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className="App"> 
      <Header />
      <Home />
     </div>
     
  );

}

export default App;
