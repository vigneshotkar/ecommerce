import Carousel from 'react-bootstrap/Carousel';
import header from './banner.jpg'
import Vignesh from './bann.jpg'
import lokesh from './542.jpg'
import './Footer.css'
function Home()
{
 return(
    <div>
    
    <Carousel>
      <Carousel.Item>
      <img src={header}></img>
        <Carousel.Caption>
          <h3>RELEASE THE PAIN,
          BE MORE Alive</h3>
          <p>Some representative placeholder content for the first
          slide representative placeholder content for the first slide .</p>
          <button className="button">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Vignesh}></img>
        <Carousel.Caption>
          <h3>Chiropractic Services</h3>
          <p>Some representative placeholder content for the first
          slide representative placeholder content for the first slide.</p>
          <button className="button">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={lokesh}></img>
        <Carousel.Caption>
          <h3>Adjust Your Body Get
          A Perfect Balance</h3>
          <p>
          Some representative placeholder content for the first
          slide representative placeholder content for the first slide.
          </p>
          <button className="button">Read More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
 )
}
export default Home