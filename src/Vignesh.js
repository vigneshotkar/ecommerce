function Vignesh()
{
    function hello(name)
    {
        alert("hello"+name)
    }
    return(
        <div>
        <button onClick={()=>hello("aao kbhi")}>Submit</button>
        </div>
    )
}
export default Vignesh