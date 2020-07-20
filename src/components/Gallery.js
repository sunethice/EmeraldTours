import React, { Component } from 'react';

class Gallery extends Component{

    render(){
        return (
            <div>
                <div class="container-fluid mt-5 w-100 p-5 text-white" style={{backgroundColor: '#252525'}}>
                    <div class="container ">
                        <div class="row">
                            <div class="col-12">
                                <div class="h3 text-center">Gallery</div>
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
                            <div class="gallery" id="gallery">
                                <div class="mb-3 pics animation all 2">
                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="Card image cap"/>
                                </div>
                                <div class="mb-3 pics animation all 1">
                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg" alt="Card image cap"/>
                                </div>
                                <div class="mb-3 pics animation all 1">
                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg" alt="Card image cap"/>
                                </div>
                                <div class="mb-3 pics animation all 2">
                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap"/>
                                </div>
                                <div class="mb-3 pics animation all 2">
                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap"/>
                                </div>
                                <div class="mb-3 pics animation all 1">
                                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg" alt="Card image cap"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;