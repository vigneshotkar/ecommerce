const { Component } = require("react");

class Update extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            count:0
        }
    }
        shouldComponentUpdate()
        {
            console.log("should component Update")
            return true;
        }
        componentDidUpdate()
        {
            console.log("component Did Update")
        }
    
    render()
    {
        console.log("render")
        return(
            <div>
            <h2>count:{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
            </div>
        )
    }
}
export default Update