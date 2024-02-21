import { useState } from "react"

function FunCmp()
{
    var [name,setName]=useState("ram")
    function hello()
    {
        setName("vignesh")
    }
    return(
        <div>
        <h2>my name is {name}</h2>
        <button onClick={hello}>submit</button>
        </div>
    )
}
export default FunCmp