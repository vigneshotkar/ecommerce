import fashion from './pick.png'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
import React from 'react';
function Footer()
{
    return(
      <div>
     <div className="mainDiv">
     <Container>
     <Row>

     <Col md={4}>
     <div className="img-home">
     <ul>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">About</a>
                </li>
                <li>
                <a href="#">Contact</a>
                </li>
                <li>
                 <a href="#">Service</a>
                </li>       
     </ul>
     </div>
     </Col>

     <Col md={4}>
     <div className="img">
     <img src={fashion}></img>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut laboreet 
       dolore magna aliquyam erat, sed diam voluptua.</p>
      <hr className="line"></hr>
     </div>
     </Col>

    

     <Col md={4}>
     <div className="img-home">      
   <ul>
   <li>
   <a href="#">Product
   </a>
   </li>
   <li>
   <a href="#">Buy</a>
   </li>
   <li>
   <a href="#">Blog</a>
   </li>
   <li>
    <a href="#">dropdown</a>
   </li>
   </ul>
     </div>
     </Col>
     </Row>
     </Container>
     </div>

     <div className="Rights">
     <h4>© 2023 Quantum Chiropractic Rights Reserved</h4>
     </div>

     
     </div>
    )
}
export default Footer