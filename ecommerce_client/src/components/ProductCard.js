import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ data }) {

  return (
    <>
      
        <div className="mb-4 h-[450px] w-[300px] flex gap-4 transition delay-100 duration-500 ease-in-out hover:scale-105 ">
        <Link to={`/product/${data.id}`}>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">

            <div className="h-56 w-full">

              <img className="mx-auto w-[200px] h-[200px] dark:hidden" src={data.imageUrl} alt="" />

            </div>

            <p className="text-lg  font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{data.name}</p>
            <p className='font-semibold uppercase text-[12px]'>{data.category}</p>
            <p className='text-blue-500 capitalize'>Brand: {data.brand}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">${data.price}</p>

            </div>
          </div>
          </Link>
        </div>
     
    </>
  )
}

export default ProductCard