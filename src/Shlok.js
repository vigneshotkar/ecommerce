// import { useState } from "react"

import { useState } from "react"

function Shlok()
{
    var [status,setName]=useState(true);
    return(
        <div>
        {
           status?<h1>hide and Show</h1>:null
        }
        <button onClick={()=>setName(!status)}>Toggle</button>
           <button onClick={()=>setName(false)}>off</button>
           <button onClick={()=>setName(true)}>on</button>
        </div>
    )
}
export default Shlok 

// function Shlok()
// {
//     var [status,setName]=useState(true);
//     return(
//         <div>
//       m</h2>:null
//       }
//         <button onClick={()=>setName(!status)}>vignesg</button>
//         </div>
//     )
// }
// export default Shlok