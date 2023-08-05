import {React, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
function Readmore() {
    const [open, setOpen] = useState(false);
  return (
    <div>
         <Card.Link 
            onClick={()=>setOpen(!open)}
            aria-expanded={open}
            style={{textDecoration:"none" }}
            className='text-primary'
        >Read More</Card.Link>
         <Collapse in={open}>
        <div id="example-collapse-text">
            <ul>
                <li>7 Days Service Center Replacement/Repair</li>
                <li>GST invoice available</li>
            </ul>
        </div>
      </Collapse>
    </div>
  )
}

export default Readmore