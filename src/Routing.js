import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Product from "./Product"
import Buy from "./Buy"
import Contact from "./Contact"
import Electronics from "./Electronics"
import Womens1 from "./Women1"
import Jewelery from "./Jewelery"


function Routing()
{
    return(
        <div>
        <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Product" element={<Product></Product>}></Route>
        <Route path="Buy" element={<Buy></Buy>}></Route>
        <Route path="Contact" element={<Contact></Contact>}></Route>
        <Route path="Electronics" element={<Electronics></Electronics>}></Route>
        <Route path="Womens1" element={<Womens1></Womens1>}></Route>
        <Route path="Jewelery" element={<Jewelery></Jewelery>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
        </div>
    )
}
export default Routing