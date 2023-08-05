import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
function Productcard({product}) {
    
  return (
     <div>
       <Link to={`view-product/${product.id}`} style={{textDecoration:"none", color:"black"}}>
             <Card style={{ width: '13rem',height:"380px" }} className='card p-1'>
                 <Card.Img variant="top" src={product.image}  style={{height:'170px'}} className='card-img'/>
                  <Card.Body>
                   <Card.Text className='card-title' style={{}}>{product.title}</Card.Text>
                   <div className='row mb-3' style={{paddingLeft:"12px"}}>
          <div className='bg-success col-lg-5 col-md-5 col-sm-5 rounded text-light p-0 '>{product.rating.rate} <AiFillStar style={{width:"25%" ,height:"20px"}}/></div>
          <div className='col-lg-7 col-md-7 col-sm-7 text-muted p-0'>{product.rating.count} Ratings</div>
        </div>
                    <Card.Subtitle className='text-start text-dark'><strong className="text-success ">from </strong>{product.price}</Card.Subtitle>
                    {/* <Card.Text>{product.category}</Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
             </Card>
        </Link>
     </div>
  )
}

export default Productcard