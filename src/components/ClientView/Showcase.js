import React, { Component } from  'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../img/carousel-img1.jpg';
import carousel2 from '../../img/carousel-img2.jpg';
import carousel3 from '../../img/carousel-img3.jpg';

class Showcase extends Component{
    render() {
      return (
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
        </Carousel>)
    };
}
export default Showcase;