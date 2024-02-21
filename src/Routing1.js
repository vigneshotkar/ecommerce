import { BrowserRouter, Route, Routes } from "react-router-dom"
import About1 from "./About1"
import Home1 from "./Home1"
import Contact1 from "./Contact1"
import Service1 from "./Service1"
import Header1 from "./Header1"

function Routing1()
{
    return(
        <div>
        <BrowserRouter>
        <Header1></Header1>
        <Routes>
        <Route path="/" element={<Home1></Home1>}></Route>
        <Route path="About1" element={<About1></About1>}></Route>
        <Route path="Contact1" element={<Contact1></Contact1>}></Route>
        <Route path="Service1" element={<Service1></Service1>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default Routing1
