import React, { Component } from 'react';
import Showcase from './components/Showcase';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/AboutUs';
import Package from './components/Package';
import Gallery from './components/Gallery';
import Bespoke from './components/Bespoke';
import OurTeam from './components/OurTeam';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Showcase></Showcase>
        <Aboutus></Aboutus>
        <Gallery></Gallery>
        <Package></Package>
        <Bespoke></Bespoke>
        <OurTeam></OurTeam>
        <Footer></Footer>
    </div>
  );
}

export default App;
