import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) return (<h1>NULL</h1>); // or fallback UI

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
        
          <div className='card p-4 m-2'>
          
            <h1>{product.name}</h1>

            <img src = {product.image} alt = "product_image" className='ig-fluid m-3 bigimg'/>

            <p>{product.description}</p>
          
          </div>
        
        </div>

        <div className='col-md-6 text-left'>
        
          <h1>Price :{product.price}</h1>

          <hr/>

          <h1>Select Quantity</h1>

          <select>

          {[...Array(product.countInStock).keys()].map((x,i)=>{

              return <option value={i+1}>{i+1}</option>

          })}

        

          </select>

          <hr/>

          <button className='btn btn-dark'> ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );

}
