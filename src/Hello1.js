// import { Component } from "react"

import { useState } from "react"


// class Hello1 extends Component
// {
//    render()
//    {
//     return(
//         <div>
//         <h2>Class Component</h2>
//         </div>
//     )
//    }
// }
// export default Hello1

function Hello()
{
    var [name,setName]=useState("ram")
    function Hello()
    {
      setName("vignesh")
    }
    return(

        <div>
        <h1>my name is {name}</h1>
        <button onClick={Hello}>submit</button>
        </div>
    )
}
export default Hello