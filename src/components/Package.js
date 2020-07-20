import React,{ Component } from "react";
import pkg1 from '../img/tour-package1.jpg';
import pkg2 from '../img/tour-package1.jpg';

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css'; 

// const options = {
//   items: 1,
//   nav: true,
//   rewind: true,
//   autoplay: true
// };

class Package extends Component {
  render() 
        {  
          return ( 
              <div>  
                  <div class="container mt-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="h3 text-center">Tour Packages</div>
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
                    <div class="row">
                      <div class="col-md-12 d-flex justify-content-center mb-5">
                        <div class="btn-group">
                          <button type="button" class="btn btn-outline-secondary" data-rel="0">Sri Lanka</button>
                          <button type="button" class="btn btn-outline-secondary" data-rel="1">Maldives</button>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="travel-place">
                          <div class="work-image">
                            <img src={pkg1} class="img-fluid person" alt="destination"/>
                            <div class="overlay">
                                <div class="overlay_shape">
                                    <a href="#" class="over-btn">10 photos</a>
                                    <a href="tourpackage.html" class="view-all">View All Places<i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                          </div>
                          <div class="travel-text">
                              <h3>Love City, Paris, Italy</h3>
                              <p>for 7Days <span>|</span> $ 710.00</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <div class="travel-place">
                        <div class="work-image">
                          <img src={pkg2} class="img-fluid person" alt="destination"/>
                          <div class="overlay">
                              <div class="overlay_shape">
                                  <a href="#" class="over-btn">10 photos</a>
                                  <a href="tourpackage.html" class="view-all">View All Places<i class="fas fa-long-arrow-alt-right"></i></a>
                              </div>
                          </div>
                        </div>
                        <div class="travel-text">
                            <h3>Love City, Paris, Italy</h3>
                            <p>for 7Days <span>|</span> $ 710.00</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="travel-place">
                        <div class="work-image">
                          <img src={pkg1} class="img-fluid person" alt="destination"/>
                          <div class="overlay">
                              <div class="overlay_shape">
                                  <a href="#" class="over-btn">10 photos</a>
                                  <a href="tourpackage.html" class="view-all">View All Places<i class="fas fa-long-arrow-alt-right"></i></a>
                              </div>
                          </div>
                        </div>
                        <div class="travel-text">
                            <h3>Love City, Paris, Italy</h3>
                            <p>for 7Days <span>|</span> $ 710.00</p>
                        </div>
                      </div>
                    </div>
                   </div>
                 </div>
              </div>  
          )  
        }
}

export default Package;
