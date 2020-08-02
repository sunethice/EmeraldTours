import React, { Component } from 'react';
import TR01 from '../../img/TR01.jpg';
import TR02 from '../../img/TR02.jpg';

class OurTeam extends Component{

    render(){
        return (
            <div>
                <div class="container-fluid mt-5 w-100 p-5 text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-dark">
                                <div class="h3 text-center">Our Team</div>
                                <p class="text-center">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis, 
                                    lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient, 
                                    turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat. 
                                    Scelerisque eu imperdiet wisi wisi, sit libero sed ipsum sodales phasellus, 
                                    odio vel ac non ac, sodales viverra, metus volutpat quis rutrum diam ac integer.
                                </p>
                            </div>
                        </div>
                        <div id="TeamImages" class="row">
                            <div class="col-12 col-lg-3">
                                <img class="img-fluid" src={TR01} alt="Team representative"/>
                            </div>
                            <div class="col-12 col-lg-3">
                                <img class="img-fluid" src={TR02} alt="Team representative"/>
                            </div>
                            <div class="col-12 col-lg-3">
                                <img class="img-fluid" src={TR01} alt="Team representative"/>
                            </div>
                            <div class="col-12 col-lg-3">
                                <img class="img-fluid" src={TR02} alt="Team representative"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeam;