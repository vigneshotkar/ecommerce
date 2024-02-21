import { useState } from "react"

function StateFun()
{

    const [name,setName]=useState("ram")
    function hello()
    {
        setName("syam")
    }
    return(
        <div>
        <h2>hello vignesh{name}</h2>
        <button onClick={hello}>submit</button>
        </div>
    )
}
export default StateFun