import { useState } from "react"
import { FaStar } from "react-icons/fa6";

const ProductCard = ({product}) => {

    const [isHoverProduct,setIsHoverProduct] = useState(false)

    let tagBgColor = "";
    let tagTextColor ="text-white";
    const productTag = product.tag;


    if(productTag.toUpperCase() === 'SALE'){
        tagBgColor = "bg-red-500"
    }
    else if(productTag.toUpperCase() === 'NEW'){
        tagBgColor = "bg-teal-500"
    }
    else{
        tagBgColor = "bg-white"
        tagTextColor = "text-red-500"
    }

    return (
        <div className='bg-gray-100 flex flex-col p-4 w-65 h-83 border border-gray-200 cursor-pointer hover:border-gray-300 relative' onMouseEnter={() => setIsHoverProduct(true)} onMouseLeave={() => setIsHoverProduct(false)}>

            <div className="relative w-full h-45">
                <img src={product.img} alt="My Image" className='w-full h-full object-cover' />

                <div className={`absolute top-2 left-2 ${tagBgColor} ${tagTextColor} text-xs font-bold px-2 py-1 rounded`}>
                    {product.tag}
                </div>
            </div>

            <h1 className='text-base pt-3 text-teal-700 font-semibold'>{product.name}</h1>
            <p className='text-xs text-gray-600 w-44 truncate '>{product.description}</p>

            <div className='flex flex-row gap-1 pb-1'>
                {[1,2,3,4,5].map((i)=>(
                    <FaStar key={i} size={15} className={`mt-2 ${i <= product.rating ? "text-yellow-500" : "text-gray-300"}`} />
                ))}
            </div>

            <h1 className='text-lgs font-bold mt-2.5'>{product.price}$</h1>

            {isHoverProduct ? (
                <button className='bg-teal-700 flex flex-row justify-center items-center p-2 rounded hover:bg-teal-800 absolute right-4 bottom-4 cursor-pointer' onClick={() => { }}>
                    <p className='text-white text-sm font-semibold'>Add to Cart</p>
                </button>
            ) : (
                <p className='text-xs text-gray-500 absolute right-6 bottom-6.5'>Stock: 352 pcs</p>
            )}
        </div>
    )
}

export default ProductCard