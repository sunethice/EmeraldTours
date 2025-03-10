import React from 'react';
import Showcase from './components/ClientView/Showcase';
import Header from './components/ClientView/Header';
import Footer from './components/ClientView/Footer';
import Aboutus from './components/ClientView/AboutUs';
import Package from './components/ClientView/Package';
import Gallery from './components/ClientView/Gallery';
import Bespoke from './components/ClientView/Bespoke';
import OurTeam from './components/ClientView/OurTeam';
// import Testimonials from './components/ClientView/Testimonials';

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
        {/* <Testimonials></Testimonials> */}
        <OurTeam></OurTeam>
        <Footer></Footer>
    </div>
  );
}

export default App;
