import React, { Component } from 'react';
import Showcase from './components/Showcase';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/AboutUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Showcase></Showcase>
      <Aboutus></Aboutus>
      <div class="container-fluid mt-5 w-100 p-5 text-white" style={{backgroundColor: '#252525'}}>
        <div class="container ">
            <div class="row">
                <div class="col-12">
                    <div class="h3 text-center">Tours</div>
                    <p>Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis, 
                        lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient, 
                        turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat. 
                        Scelerisque eu imperdiet wisi wisi, sit libero sed ipsum sodales phasellus, 
                        odio vel ac non ac, sodales viverra, metus volutpat quis rutrum diam ac integer. 
                        Posuere nullam eu vestibulum non nonummy. Metus purus ac malesuada vitae ut qui, 
                        sed rhoncus nonummy, massa ac urna risus, faucibus aliquam malesuada fusce gravida urna.
                    </p>
                </div>
            </div>
            <div class="row mb-3" style={{height: '345px'}}>
                <div class="col-6 col-lg-8" style={{height: '345px', overflow: 'hidden'}}>
                    <img class="d-block w-100" src="img/tours1.jpg" alt="" style={{alignItems: 'center'}}/>
                </div>
                <div class="col-6 col-lg-4" style={{height: '345px'}}>
                    <img class="d-block w-100" src="img/tours2.jpg" alt=""/>
                </div>
            </div>
            <div class="row mb-3" style={{height: '345px'}}>
                <div class="col-4">
                    <img class="d-block w-100" src="img/tours3.jpg" alt=""/>
                </div>
                <div class="col-4">
                    <img class="d-block w-100" src="img/tours4.jpg" alt=""/>
                </div>
                <div class="col-4">
                    <img class="d-block w-100" src="img/tours5.jpg" alt=""/>
                </div>
            </div>
            <div class="row">
                <div class="btn btn-warning m-auto px-3 text-black">View More</div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
  );
}

export default App;
