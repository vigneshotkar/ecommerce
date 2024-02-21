import { Link } from "react-router-dom"
import "./header.css"
import header from './Group 9968.png'

function Header()
{
    return(
        
        <div>

      <nav className="navbar navbar-expand-lg navbar-dark  text-capitalize">
      <div className="container">
      <img src={header}></img>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="Product" className="nav-link">Product</Link>
          </li>
          
           <li className="nav-item">
            <Link to="Buy" className="nav-link">Buy</Link>
          </li>

            <li className="nav-item">
            <Link to="Contact" className="nav-link">Contact</Link>
          </li>

          <li className="nav-item">
            <Link to="Electronics" className="nav-link">Electronics</Link>
          </li>

          <li className="nav-item">
            <Link to="Womens1" className="nav-link">Womens1</Link>
          </li>
          <li className="nav-item">
            <Link to="Jewelery" className="nav-link">Jewelery</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>

          </li>
          <li>
            <button type="button" className="btn btn-danger">Appointment</button>
          </li>
        </ul>
      </div>
    </div>
    </nav>
        </div>
    )
}
export default Header