import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdStars } from "react-icons/md";
import { PiGiftFill } from "react-icons/pi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";
function Footer() {
  return (
    <div>
         <Row className='w-100  bg-primary text-white'>
         <Col lg={3} md={3} sm={3} >
              <RiShoppingBag2Fill style={{width:"15%" ,height:"30px"}} className='text-info'/>Become a Seller  
              
              </Col>
              <Col lg={2} md={2} sm={1}  ><MdStars style={{width:"20%" ,height:"30px"}} className='text-info'/>Advertise </Col>
              <Col lg={2} md={2} sm={1}><PiGiftFill style={{width:"20%" ,height:"30px"}} className='text-info'/>GIft Cards</Col>
              <Col lg={2} md={2} sm={1}><BiSolidHelpCircle style={{width:"20%" ,height:"30px"}} className='text-info'/>Help Center</Col>
              <Col lg={3} md={3} sm={2} className='mt-1'>2023 XinStore.com</Col>
        </Row>
    </div>
  )
}

export default Footer