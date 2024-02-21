import { useState } from "react"
import Tillu1 from "./Tillu1";

function Tillu()
{
    var [name,setName]=useState("shubham");
    var[age,setAge]=useState(45)
    function hello()
    {
        setName("vignesh")
        setAge(55)
    }
    return(

        <div>
        <Tillu1 name={name} age={age}></Tillu1>
        <button onClick={hello}>submit</button>
        </div>
    )
}
export default Tillu