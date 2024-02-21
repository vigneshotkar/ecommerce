import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import './Product.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function Electronics()
{
    const[apidata,setapidta]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/electronics").then((result)=>{
          result.json().then((data)=>{
            setapidta(data)
          })

        })
        
    },[])
  return(
    <div>
    <br></br><br></br><br></br>
       {
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
            apidata.map((item)=>
            <MDBCol>
            <MDBCard>
            <MDBCardImage
            src={item.image}
            alt='...'
            position='top'
            width="100px"
            height="200px"
            />
         <MDBCardBody>
      <MDBCardTitle style={{fontSize:"15px"}}>{item.title.substring(0,10)}</MDBCardTitle>
      <MDBCardText>{item.description.substring(0,100)}</MDBCardText>
      <Link to="Buy"><MDBBtn>Buy now</MDBBtn></Link>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
            )
        }
        
        </MDBRow>
       }
    </div>
  )

}
export default Electronics