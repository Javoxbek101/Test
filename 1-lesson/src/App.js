import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";
import Faq from "./component/Faq";
import { Routes, Route, Link } from "react-router-dom";


var sound = new Audio('note.mp3')
function playSound(){
  sound.play();
}
function App() {



  return (
    <div className="App">
      


      <header>
        <Link onClick={playSound} to="/">Home</Link>
        <Link onClick={playSound}  to="/about">About</Link>
        <Link onClick={playSound}  to="/portfolio">Portfolio</Link>
        <Link onClick={playSound}  to="/contact">Contact</Link>
        <Link onClick={playSound}  to="/faq">Faq</Link>
      </header>
      

      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </div>
  );
}

export default App;
