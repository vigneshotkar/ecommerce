import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import header from './banner-1.png'
import Vignesh from './bann.png'
import lokesh from './one-1.png'
import home from './home-1.jpg'
import img from './sec-1.jpg'
import Tuhar from './sect-2.jpg'
import Prerna from './secti-3.jpg'
import paddo from './node.jpg'
import order from './php.jpg'
import node from './padder -2.jpg'
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Footer.css'
import "./header.css"
import Button from 'react-bootstrap/Button';
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={header}></img>
        <Carousel.Caption>
          <h3>GET WITHIN TOUCH NATURE
          </h3>
          <p>There are many variations of passages of Lorem Ipsum available If you are going to use a passage of Lorem Ipsum.</p>
          <Button variant="primary">Read More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Vignesh}></img>
        <Carousel.Caption>
          <h3>A Guide to Making Blend</h3>
          <p>There are many variations of passages of Lorem Ipsum available If you are going to use a passage of Lorem Ipsum.</p>
          <Button variant="primary">Read More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={lokesh}></img>
        <Carousel.Caption>
          <h3>Our products come formulas</h3>
          <p>
          There are many variations of passages of Lorem Ipsum available If you are going to use a passage of Lorem Ipsum</p>
          <Button variant="primary">Read More</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="section-2">
    <Container>
    <Row>
    <Col sm={6}>
    <div className="shoping">
    <h3>Who We Are</h3>
    <p>Do what you can with what you have where you are what you have where you are</p>
    <p className="p-1"> where you are .what you have, where you are Do what you can with what</p>
    </div>
    </Col>
    <Col sm={6}>
    <div className="shoping-img">
    <img src={home}></img>
    </div>
    </Col>
    </Row>
    </Container>
    </div>

    <div className="section-3">
    <Container>
    <Row>
    <Col md={4}>
    <div className="image-1">
    <img src={img}></img>
    </div>
    </Col>
    <Col md={4}>
    <div className="image-2">
    <img src={Tuhar}></img>
    </div>
    </Col>
    <Col md={4}>
    <div className="image-3">
    <img src={Prerna}></img>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    
    <div className="section-4">
    <Container>
    <Row>
    <Col sm={3}>
    <div className="world">
    <h2>Mintmase <br></br>in the News</h2>
    </div>
    </Col>
    <Col sm={3}>
    <div className="card-1">
    <img src={paddo}></img>
    <h4>Araico Collction <br></br>lanch</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy</p>
    </div>
    </Col>
    <Col sm={3}>
    <div className="card-1">
    <img src={order}></img>
    <h4>Clothing Drive<br></br> 2020</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy</p>
    </div>
    </Col>
    <Col sm={3}>
    <div className="card-1">
    <img src={node}></img>
    <h4>F/W 20202 Sneak <br></br>Peek</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy</p>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    
    </div>
  );
}
export default Home;