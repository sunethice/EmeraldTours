import React, { Component } from 'react';
import logo from '../img/logo.png';

class Footer extends Component{

    render(){
        return (
            <div class="py-5" style={{backgroundColor:'#000'}}>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="row pb-3">
                                <img class="d-block m-auto" style={{ width:'40%' }} src={logo} href="#" alt="Emerald Tours"></img>
                            </div>
                            <div class="row">
                                <div class="col text-left">Address:</div>
                                <div class="col text-left">
                                    <div class="">420 Rankin Street Avenue</div>
                                    <div class="">London City Center,</div>
                                    <div class="">United Kingdom</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-left">Phone:</div>
                                <div class="col text-left">+442012345678</div>
                            </div>
                            <div class="row">
                                <div class="col text-left">Email :</div>
                                <div class="col text-left">info@emerald.com</div>
                            </div>
                        </div>
                        <div class="col"></div>
                        <div class="col"></div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;