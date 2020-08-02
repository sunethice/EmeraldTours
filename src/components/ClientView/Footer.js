import React, { Component } from 'react';
import logo from '../../img/logo1.png';
import aboutus from '../../img/aboutus.jpg';

class Footer extends Component{

    render(){
        return (
            <div>
                <div class="pt-5 pb-5" style={{backgroundColor:'#012d6b'}}>
                    <div class="container">
                        <div class="row text-white">
                            <div class="col-md-3 mt-sm-4 pb-3 pb-md-0">
                                <div class="row pb-3">
                                    <img class="d-block m-auto" style={{ width:'60%' }} src={logo} href="#" alt="Emerald Tours"></img>
                                </div>
                                <div class="row">
                                    <div class="col text-left">
                                        <i class="fas fa-home mr-3"></i>Address:
                                    </div>
                                    <div class="col text-left">
                                        <div class="">420 Rankin Street Avenue</div>
                                        <div class="text-nowrap">burwood Highway,</div>
                                        <div class="">Australia</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-left">
                                        <i class="fas fa-phone mr-3"></i>Phone:
                                    </div>
                                    <div class="col text-left">+612012345678</div>
                                </div>
                                <div class="row">
                                    <div class="col text-left">
                                        <i class="fas fa-envelope mr-3"></i>Email :
                                    </div>
                                    <div class="col text-left">info@emerald.com</div>
                                </div>
                            </div>
                            <div class="col-md-3 mt-sm-4 pb-3 pb-md-0 text-white">
                                <div class="row">
                                    <h5 class="mx-auto">Quick links</h5>
                                </div>
                                <hr class="mb-4 mt-0 d-flex justify-content-center d-inline-block" style={{width: '60px', backgroundColor:'#fff'}}></hr>
                                <div class="row">
                                    <div class="col text-center text-md-left ml-lg-5">
                                        <i class="fas fa-angle-right mr-3 d-none d-md-inline"></i>Home
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center text-md-left ml-lg-5">
                                        <i class="fas fa-angle-right mr-3 d-none d-md-inline"></i>Packages
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center text-md-left ml-lg-5">
                                        <i class="fas fa-angle-right mr-3 d-none d-md-inline"></i>Excursions
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center text-md-left ml-lg-5">
                                        <i class="fas fa-angle-right mr-3 d-none d-md-inline"></i>Our Gallery
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-center text-md-left ml-lg-5">
                                        <i class="fas fa-angle-right mr-3 d-none d-md-inline"></i>Explore Sri Lanka
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3  mt-sm-4 px-3 pb-3 pb-md-0">
                                <div class="row">
                                    <h5 class="mx-auto">Instagram</h5>
                                </div>
                                <hr class="mb-4 mt-0 d-flex justify-content-center d-inline-block" style={{width: '60px', backgroundColor:'#fff'}}></hr>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-3 m-0 p-0">
                                        <img class="img-thumbnail border-0 p-1 bg-transparent" src={aboutus} alt=""/>
                                    </div>
                                    <div class="col-3 m-0 p-0">
                                        <img class="img-thumbnail border-0 p-1 bg-transparent" src={aboutus} alt=""/>
                                    </div>
                                    <div class="col-3 m-0 p-0">
                                        <img class="img-thumbnail border-0 p-1 bg-transparent" src={aboutus} alt=""/>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-3 m-0 p-0">
                                        <img class="img-thumbnail border-0 p-1 bg-transparent" src={aboutus} alt=""/>
                                    </div>
                                    <div class="col-3 m-0 p-0">
                                        <img class="img-thumbnail border-0 p-1 bg-transparent" src={aboutus} alt=""/>
                                    </div>
                                    <div class="col-3 m-0 p-0">
                                        <img class="img-thumbnail border-0 p-1 bg-transparent" src={aboutus} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3  mt-sm-4 pb-3 pb-md-0">
                                <div class="row">
                                    <h5 class="mx-auto">Connect with us</h5>
                                </div>
                                <hr class="mb-4 mt-0 d-flex justify-content-center d-inline-block" style={{width: '60px', backgroundColor:'#fff'}}></hr>
                                <div class="row">
                                    <form class="input-group px-3 px-md-0">
                                        <input type="text" class="form-control form-control-sm" placeholder="Your email"
                                            aria-label="Your email" aria-describedby="basic-addon2"></input>
                                        <div class="input-group-append">
                                            <button class="btn btn-sm btn-success"><i class="fa fa-check"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="row my-3 p-auto">
                                    <div class="col d-flex justify-content-center">
                                        {/* Facebook */}
                                        <a class="fb-ic fa-lg mx-2" href="facebook.com">
                                            <i class="fab fa-facebook-f text-white"> </i>
                                        </a>
                                        {/* Twitter */}
                                        <a class="tw-ic fa-lg mx-2" href="facebook.com">
                                            <i class="fab fa-twitter text-white"> </i>
                                        </a>
                                        {/* Instagram */}
                                        <a class="ins-ic fa-lg mx-2" href="facebook.com">
                                            <i class="fab fa-instagram text-white"> </i>
                                        </a>
                                        {/* Pinterest */}
                                        <a class="pin-ic fa-lg mx-2" href="facebook.com">
                                            <i class="fab fa-pinterest text-white"> </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-white text-center py-3 border-top border-secondary"  style={{backgroundColor:'#032048'}}>© 2020 Copyright:
                    <a href="https://Qbicle.com/"> Qbicle.com</a>
                </div>
            </div>
        );
    }
}

export default Footer;