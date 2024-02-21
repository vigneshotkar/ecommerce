import { Component } from "react";

class PropClass1 extends Component
{
    render()
    {
        return(
            <div>
            <h2>my name is {this.props.name}</h2>
            <h2>my Age is {this.props.age}</h2>
            </div>
        )
    }
}
export default PropClass1
