import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Carousel from './components/Carousel';
import Scrollable from './components/Scrollable';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Scrollable />
    </div>
  );
}

export default App;
