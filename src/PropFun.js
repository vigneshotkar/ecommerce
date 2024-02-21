// import { useState } from "react"
// import PropFun1 from "./PropFun1"

import { useState } from "react"
import PropFun1 from "./PropFun1"

// function PropFun()
// {
//     var [name,SetName]=useState("ram")
//     var [age,SetAge]=useState(45)
//     function hello()
//     {
//         SetName ("vignesh")
//         SetAge (55)
//     }
//     return(
//         <div>
//         <PropFun1 name={name} age={age}></PropFun1>
//         <button onClick={hello}></button>
//         </div>
//     )
// }
// export default PropFun

function PropFun()
{
    var [name,SetName]=useState("ram")
    var [age,SetAge]=useState(55)
    function hello()
    {
        SetName ("vignesh")
        SetAge(45)
    }
    return(
        <div>
        <PropFun1 name="name" age="age"></PropFun1>
        <button onClick={hello}></button>
        </div>
    )
}
export default PropFun