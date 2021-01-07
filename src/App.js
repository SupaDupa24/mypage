import React, { Component } from 'react';
import { Canvas } from './components/Canvas/Canvas';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';

class App extends Component {

  handleMouseMove = (e) => {
    const el = document.getElementById("wrapper");
    const d = el.getBoundingClientRect();
    let x = e.clientX - (d.left + Math.floor(d.width / 2));
    let y = e.clientY - (d.top + Math.floor(d.height / 2));
    // Invert values
    x = x - x * 2;
    y = y - y * 2;
    document.documentElement.style.setProperty("--scale", 1.6);
    document.documentElement.style.setProperty("--x", x / 2 + "px");

    document.documentElement.style.setProperty("--y", y / 2 + "px");
  };

  handleMouseLeave = () => {
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", 0);
    document.documentElement.style.setProperty("--y", 0);
  };


  render(){
  return (
    <div className="App" id='app'>
      <Canvas />
      <Navigation />
      
    </div>
  );
}
}

export default App;
