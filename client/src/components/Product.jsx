import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default function Product({product}) {
  return (
    <div className="col-md-3 m-5 card p-2">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid"/>
          <h1>{product.name}</h1>
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={product.rating}
            aria-label="Product rating"
            className="ratings"
          />
          <h1>Price:{product.price}</h1>
        </Link> 
      </div>         
    </div>
  )
}
