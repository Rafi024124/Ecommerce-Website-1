import React from 'react';

import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';



function ProductGrid() {

 const products = useSelector((state)=>state.product.filteredItems)

 console.log("Filtered Products:", products);

     
  console.log(products); // Log the products array

  return (
    <div className='gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {products.map((product)=>{
      return  <ProductCard key={product.id} product={product}/>
    })}
    </div>
  );
}

export default ProductGrid;
