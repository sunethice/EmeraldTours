import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo1.png';
import navIcon from '../img/hamburger.svg';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
// import { connect } from 'react-redux';

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
            <Navbar className="sticky-top" expand="lg" style={{backgroundColor: '#012d6b'}}>
                <Navbar.Collapse className="order-1 order-lg-0" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="px-3 text-white" href="#Packages">Home</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#Packages">Packages</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#Gallery">Gallery</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#Excursions">Excursions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className="mx-lg-auto w-75" href="#home">
                    <img class="d-block mx-lg-auto" style={{ width:'30%' }} src={logo} href="#" alt="Emerald Tours"></img>
                </Navbar.Brand>
                <Navbar.Collapse className="order-3" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="px-3 text-white" href="#Blog">Blog</Nav.Link>
                        <Nav.Link className="px-3 text-white text-nowrap" href="#Explore">Explore SriLanka</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#">SignIn</Nav.Link>
                        <Nav.Link className="btn inquire-btn px-3 text-black text-nowrap">Inquire Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <img src={navIcon}/>
                </Navbar.Toggle>
            </Navbar>


            // <nav class="navbar navbar-expand-lg py-3" style={{backgroundColor: '#012d6b'}}>
            //     <div class="navbar-collapse collapse w-100 order-1 order-lg-0 menu-content">
            //         <div class="navbar-nav text-white">
            //             <a href="#" class="nav-item nav-link px-3 text-white active">Packages</a>
            //             <a href="#" class="nav-item nav-link px-3 text-white active">Tours</a>
            //             <a href="#" class="nav-item nav-link px-3 text-white">Excursions</a>
            //             <a href="#" class="nav-item nav-link px-3 text-white">Blog</a>
            //         </div>
            //     </div>
            //     <a class="navbar-brand mx-lg-auto text-white" href="#">
            //         <img class="d-block mx-lg-auto" style={{ width:'30%' }} src={logo} href="#" alt="Emerald Tours"></img>
            //     </a>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".menu-content">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>
            //     <div class="navbar-collapse collapse w-100 order-3 menu-content">
            //         <div class="navbar-nav ml-auto menu-content">
            //             <a href="#" class="nav-item nav-link px-3 text-white text-nowrap">Explore SriLanka</a>
            //             <a href="#" class="nav-item nav-link px-3 text-white">SignIn</a>
            //             <a href="#" class="nav-item btn inquire-btn px-3 text-black text-nowrap">Inquire Now</a>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}

// const mapStateToProps = ({ auth }) => {
//     return { auth };
// };

export default Header;