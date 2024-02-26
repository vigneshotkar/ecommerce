import header from './Group 9968.png'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
function Footer()
{
    return(
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
     <img src={header}></img>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut laboreet 
       dolore magna aliquyam erat, sed diam voluptua.</p>
       <hr className="line-main"></hr>
     </div>
     </Col>

     <Col md={4}>
     <div className="img-home">
          <ul>
          <li>
          <a href="#">Team</a>
            </li>
            <li>
          <a href="#">portfolio</a>
            </li>
            <li>
          <a href="#">Blog</a>
            </li>
            <li>
          <a href="#">Dropdown</a>
            </li>
          </ul>
           </div>

     </Col>
     </Row>
     </Container>
     </div>
    )
}
export default Footer