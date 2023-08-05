import {React,useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Readmore from './Readmore';
function Viewproduct() {
    var [products,setProduct]=useState([])
    const fetchData=async()=>{
      const result= await fetch('/store.json')
      result.json().then(data=>{
        setProduct(data)
      })
    }
    useEffect(()=>{
      fetchData()
    },[])
    
      const params=useParams()
    
      const product= products.find(item=>item.id==params.id)
  return (
    <>
    { 
    product?(
      <Row >
        <Col lg={6} md={6} style={{minHeight:"88vh"}}>
        <Card style={{ width: 'auto',  }}>
      <Card.Img variant="top" src={product.image} style={{height:"400px",width:"80%"}}className='container'/>
      <Card.Body >
        <Row className='container'>
         <Col> <Button variant="danger p-3" >CANCEL</Button></Col>
          <Col><Button variant="primary p-3">BUY NOW</Button></Col>
        </Row>
      </Card.Body>
    </Card></Col>
        <Col lg={6} md={6}>
        <Card style={{ width: 'auto' ,border:"none"}} className='text-start'>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <div className='row ms-1 mb-3 '>
          <div className='bg-success col-lg-2 col-md-3 col-sm-2 rounded text-light '>{product.rating.rate} <AiFillStar style={{width:"25%" ,height:"20px"}}/></div>
          <div className='col-lg-9 col-md-9 col-sm-8 text-muted'>{product.rating.count} Ratings</div>
        </div>
        <Card.Subtitle className="mb-2 " style={{height:"30px",fontSize:"larger"}}><MdAttachMoney style={{width:"8%" ,height:"30px"}}/>{product.price}</Card.Subtitle>
        <Card.Text>
          {product.description}
        </Card.Text>
       <Readmore/>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    ):""   
    }
    </>
  )
}

export default Viewproduct