import React from 'react'
import Bproperty from './Bproperty'
import pimg1 from '../images/p1.png'
import pimg2 from '../images/p2.png'
import pimg3 from '../images/p3.png'

const Properties = () => {
  return (
    <div className='product' id='property'>
      <div className="p-heading">
        <h3>Properties</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt!</p>
      </div>
      <div className="product-container">
      <Bproperty image={pimg1} name="Prashant Singh" price="₹50 Cr"/>
      <Bproperty image={pimg2} name="Rohit Verma" price="₹70 Cr"/>
      <Bproperty image={pimg3} name="harish Sharma" price="₹80 Cr"/>
      </div>
    </div>
  )
}

export default Properties
