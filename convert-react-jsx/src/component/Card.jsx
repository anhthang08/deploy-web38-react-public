import React from 'react'
import Card_title from './Card_title'
import Card_btn from './Card_btn'

const Card = () => {
  return (
    <div className="card h-100">
    {/* Product image*/}
    <img
      className="card-img-top"
      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      alt="..."
    />
    {/* Product details*/}
    <div className="card-body p-4">
     <Card_title/>
    </div>
    {/* Product actions*/}
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
     <Card_btn/>
    </div>
  </div>  )
}

export default Card