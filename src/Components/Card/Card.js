import React from 'react'

function Card({ product }) {
  let price
  if (product.priceR) {
    price = (
      <div className='fw-bold'>
        <span>
          <s>
            &euro;
            {product.priceO}
          </s>
        </span>
        <span className='ps-2'>&euro;{product.priceR}</span>
      </div>
    )
  } else {
    price = (
      <div className='fw-bold'>
        <span>&euro;{product.priceO}</span>
      </div>
    )
  }
  return (
    <div
      className='card col-12 col-sm-6 col-md-4 col-lg-3'
      style={{ marginBottom: '20px' }}
    >
      <img
        src={product.images[0]}
        className='rounded mx-auto d-block'
        alt=''
        style={{ maxHeight: '300px' }}
      />
      <div className='card-body text-center'>
        <h5 className='card-title'>{product.brand}</h5>
        <div
          className='card-text'
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.description}
        </div>
        {price}
        <button className='btn btn-primary'> Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
