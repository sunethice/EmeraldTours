import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from './logo.svg';
import aboutus from './img/aboutus.jpg';
import carousel1 from './img/carousel-img1.jpg';
import carousel2 from './img/carousel-img2.jpg';
import carousel3 from './img/carousel-img3.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg py-3" style={{backgroundColor: '#012d6b'}}>
        <div class="navbar-collapse collapse w-100 order-1 order-lg-0 menu-content">
            <div class="navbar-nav text-white">
                <a href="#" class="nav-item nav-link px-3 text-white active">Tours</a>
                <a href="#" class="nav-item nav-link px-3 text-white">Excursions</a>
                <a href="#" class="nav-item nav-link px-3 text-white">Blog</a>
            </div>
        </div>
        <a class="navbar-brand mx-lg-auto text-white" href="#">Emerald Tours</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".menu-content">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100 order-3 menu-content">
            <div class="navbar-nav ml-auto menu-content">
                <a href="#" class="nav-item nav-link px-3 text-white">Write A Review</a>
                <a href="#" class="nav-item nav-link px-3 text-white">Luxury Segment</a>
                <a href="#" class="nav-item btn inquire-btn px-3 text-black">Inquire Now</a>
            </div>
        </div>
    </nav>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Third slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="container bg-white mt-5 p-4">
      <div class="row">
          <div class="col-sm-12 col-lg-6">
              <div class="h3">About Us</div>
              <p class="text-justify">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis, 
                  lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient, 
                  turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat. 
                  Scelerisque eu imperdiet wisi wisi, sit libero sed ipsum sodales phasellus, 
                  odio vel ac non ac, sodales viverra, metus volutpat quis rutrum diam ac integer. 
                  Posuere nullam eu vestibulum non nonummy. Metus purus ac malesuada vitae ut qui, 
                  sed rhoncus nonummy, massa ac urna risus, faucibus aliquam malesuada fusce gravida urna. 
                  Sit risus proin etiam congue, a aenean. Lacus massa suspendisse facilisis, molestie sociis 
                  ultricies morbi odio amet, in condimentum suspendisse mauris rhoncus, quisque ante non vel 
                  mauris in suscipit, imperdiet cursus. Quaerat amet minim, wisi lectus, pellentesque maecenas 
                  facilisis enim. Id expedita tellus imperdiet vitae, imperdiet molestie hac pulvinar tristique. 
                  Luctus sit lacus orci placerat maecenas. Mauris nonummy wisi urna dis dui aliquet, vitae vivamus 
                  felis etiam augue, et nunc nulla felis tortor, at dolor quos vestibulum augue, sed vel a turpis nulla orci nec.
              </p>
          </div>
          <div class="col-lg-4 h-100">
              <img class="d-sm-none d-md-block w-100 h-100" src={aboutus} alt=""/>
          </div>
          <div class="col-sm-12 col-lg-2">
              <span class="h2">why book with us?</span>
                <ul class="aboutus-ul">
                  <li class="text-left">Tailor Made Tours</li>
                  <li>Over 50 years of Industry Experience</li>
                  <li>South Asia’s First Carbon Neutral Fleet</li>
                  <li>Public Liability Insurance of 3 Million</li>
                  <li>Book your Transfers &amp; Excursions Online</li>
                  <li>Value for Money</li>			
              </ul>
          </div>
      </div>
    </div> 
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
    </div>
  );
}

export default App;
