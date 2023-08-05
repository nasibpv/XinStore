import {React,useState, useEffect} from 'react'
import Productcard from './Productcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Allproducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('./store.json')
        const json = await response.json()   
        console.log(response.ok)
        if (response.ok) {
          setProducts(json)
        }
      }
  
      fetchProducts()
    }, [])
  return (
    <Row className='ps-3'>
    {
      products.map(item => (
        <Col lg={2} md={4} sm={6} xsm={6}>
          <Productcard product={item}></Productcard>
        </Col>
      ))

    }

  </Row>
  )
}

export default Allproducts