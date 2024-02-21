import { Component } from "react";

class Mount extends Component
{
    constructor()
    {
        super();
        console.log("constructor")
        
    }
    componentDidMount()
    {
        console.log("constructor Did mount") 
    }
    render()
    {
        console.log("Render") 
        return(
            <div>
            <h2>Mount</h2>
            </div>
        )
    }
}
export default Mount