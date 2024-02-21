import { Component } from "react";
import PropClass1 from "./PropClass1";

class PropClass extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            name:"vignesh",
            age:45
        }
    }
    render()
    {
        console.log("shlok")
        return(
            <div>
            <PropClass1 name={this.state.name} age={this.state.age}></PropClass1>
            <button onClick={()=>this.setState({name:"lokesh",age:"55"})}>submit</button>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("component Did mound")
    }
    
}
export default PropClass