import Table from 'react-bootstrap/Table';
function List()
{
    const data=[{rollno:101,name:"ram",marks:45},
                {rollno:103,name:"lokesh",marks:55},
                {rollno:104,name:"sham",marks:66},
                {rollno:105,name:"raju",marks:77},]
  return(
    <div>
      <Table striped bordered hover variant="dark">
      <tbody>
      <tr>
      <td>key</td>
      <td>rollno</td>
      <td>Name</td>
      <td>marks</td>
      </tr>
      {
        
        data.map((item,i)=>
        item.marks>=60?
        <tr key={i}>
        <td>{i}</td>
        <td>{item.rollno}</td>
        <td>{item.name}</td>
        <td>{item.marks}</td>
        </tr>:null
        )
      }
      </tbody>
      </Table>
    </div>
  )
}
export default List