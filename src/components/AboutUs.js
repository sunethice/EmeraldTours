import React, { Component } from 'react';
import aboutus from '../img/aboutus.jpg';

class AboutUs extends Component{

    render(){
        return (
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
        );
    }
}

export default AboutUs;