import { hasFormSubmit } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

// function From()
// {
//     var [name,setName]=useState();
//     var [age,setAge]=useState();
//     var [Country,setCountry]=useState();
//     function FormSubmit(e)
//     {
//         e.preventDefault();
//         console.log(name,age,Country)
//     }
//     return(
//         <form onSubmit={FormSubmit}>
//         <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br></br>
//         <input type="number" placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/><br></br>
//         <select onChange={(e)=>setCountry(e.target.value)}>
//         <option>india</option>
//         <option>uk</option>
//         <option>us</option>
//         <option>japan</option>
//         <option>chaina</option>
//         </select><br></br>
//         <button>submit</button>
//         </form>
//     )
// }
// export default From

// function From()
// {
//     var [status,setStatus]=useState("leptop   ")
//     return(
//      <div>
//      {
//         status=="watch"?<h2>this is watch</h2>
//         :status=="mobile"?<h2>this is mobile</h2>
//         :status=="leptop"?<h2>this is leptop</h2>:null

//      }
//      </div>
//     )
// }
// export default From

function Form()
{
    var [name,setName]=useState();
    var [age,setAge]=useState();
    var [Country,setCountry]=useState();
    function FormSubmit(e)
    {
        e.preventDefault();
        console.log(name,age.Country)
    }
    return(
      <form onSubmit={FormSubmit}>
      <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
      <input type="numbar" placeholder="enter age" onChange={(e)=>setAge(e.target.value)}></input><br></br>
     <select onChange={(e)=>setCountry(e.target.value)}>
     <option>india</option>
     <option>uk</option>
     <option>us</option>
     <option>japan</option>
     </select>
     <button>submit</button>
      </form>
    )
}
export default Form
