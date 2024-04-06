import './App.css';
import React from "react";
import Header from "./components/Header";
import CoreConcept from './components/CoreConcept';
import Examples from './components/Examples';

function App() {
  return ( 
    <div className="main">
      <Header></Header>
      <CoreConcept></CoreConcept>
      <Examples></Examples>
    </div>
  );
}

export default App;