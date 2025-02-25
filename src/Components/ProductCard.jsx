import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
     <Link to={`/product/${product.id}`}>
       <div className="p-6 rounded-lg shadow-lg  h-[500px] flex flex-col 
                      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img src={product.image} width={300} height={200} alt="" />
        <div>
         
         <h2 className='font-bold'>{product.title}</h2>
         
         <h2>Category: {product.category}</h2>
         <p className='border-b-2 text-sm mb-1'>{product.description.substring(0,70)+"..."}</p>
            
         <div className='flex justify-between'>
          <p>View Details</p>
          <p>{product.price}TK</p>
          </div>   
          

          </div>        
       </div>
     
     
     
     
     </Link>
    
  )
    
    
}

export default ProductCard
