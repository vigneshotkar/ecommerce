import { Component } from "react";

class StateClass extends Component
{
    constructor()
    {
        console.log("ram")
        super();
        this.state=
        {
            name:"ram"
        }
    }
    render()
    {
        console.log("syam")
        return(
            <div>
            <h1>my name is{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"vignesh"})}>submit</button>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("component Did mount")
    }
}
export default StateClass