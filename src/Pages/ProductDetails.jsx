import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams} from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import { addToCart } from '../Features/Cart/cartSlice';

const ProductDetails = () => {
  
  
  const {id} = useParams();
  const dispatch = useDispatch();


  const product = useSelector((state)=> state.product.items.find((p) => p.id === parseInt(id)))
  
  return (
    <div className='flex justify-center px-4 py-8 gap-10'>
      <div >
        <Link to="/" className='mb-8 inline-block right-0' >Back to Products</Link>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        <div className='shadow-md p-4 rounded-lg'>
          <img src={product.image} width={300} height={200} alt="" />
        </div>
        <div>
         <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
         <p className='text-gray-600 mb-6'>{product.description}</p>
         <div className='mb-6'>
          <h3 className='font-semibold mb-2'>Category</h3>
          <span className='font-semibold mb-2'>{product.category}</span>
         </div>

        </div>
        <button  onClick={()=>dispatch(addToCart(product))} className='w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300'>
          <ShoppingCart/> Add to Cart
        </button>
       </div>
    </div>
  )
}

export default ProductDetails
