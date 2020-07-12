import React, { Component } from  'react';
import logo from '../img/logo.png';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class Header extends Component{
    // renderContent(){
    //     switch(this.props.auth){
    //         case null:
    //             return;
    //         case false:
    //             return (
    //                 <li><a href="/auth/google">Login With Google</a></li>
    //             );
    //         default:
    //             return [
    //                     <li key="1"><Payments></Payments></li>,
    //                     <li key="2"><a href="/api/logout">logout</a></li>
    //             ];

    //     }
    // }

    render() {
        return (
            <nav class="navbar navbar-expand-lg py-3" style={{backgroundColor: '#000'}}>
                <div class="navbar-collapse collapse w-100 order-1 order-lg-0 menu-content">
                    <div class="navbar-nav text-white">
                        <a href="#" class="nav-item nav-link px-3 text-white active">Packages</a>
                        <a href="#" class="nav-item nav-link px-3 text-white active">Tours</a>
                        <a href="#" class="nav-item nav-link px-3 text-white">Excursions</a>
                        <a href="#" class="nav-item nav-link px-3 text-white">Blog</a>
                        <a href="#" class="nav-item nav-link px-3 text-white">Explore SriLanka</a>
                    </div>
                </div>
                <a class="navbar-brand mx-lg-auto text-white" href="#">
                    <img class="d-block mx-lg-auto" style={{ width:'40%' }} src={logo} href="#" alt="Emerald Tours"></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".menu-content">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse w-100 order-3 menu-content">
                    <div class="navbar-nav ml-auto menu-content">
                        <a href="#" class="nav-item nav-link px-3 text-white">SignIn / SignUp</a>
                        <a href="#" class="nav-item btn inquire-btn px-3 text-black">Inquire Now</a>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default Header;