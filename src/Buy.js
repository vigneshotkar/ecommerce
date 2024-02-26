import NINGAL from './App.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
function Buy()
{
    return(
        <div className="Sec-1">
        <Container>
        <Row>
        <Col md={6}>
        <div className="NINGALA">
        <img src={NINGAL}></img>
        </div>
        </Col>
        <Col md={6}>
        <div className="NING">
        <h2>NINGALA ENTERPRISE 46_in_1 Piece Tool</h2>
        <p>NINGALA ENTERPRISE 46_in_1 Piece Tool Kit and 46 in 1
         Screwdriver and Socket Set and Car Repair Tool Ratchet Wrench Set Hand Tool, Red</p>
         <h4>₹699 M.R.P: ₹1,199 (42% off)</h4>
         <h5>FREE delivery Wed, 7 Feb</h5>
        </div>
        </Col>
        </Row>
        </Container>
        </div>
    )
}
export default Buy