import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { add } from '../redux/cartSlice'
import { Bounce, toast, ToastContainer } from 'react-toastify'


function DetailView() {
  let [product, setProduct] = useState({})

  const data = useSelector((state) => state.cart.item)
  const dispatch = useDispatch()

  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((res) => { setProduct(res.data) })
      .catch((err) => { console.log(err) })
  }, [])

  function addToCart() {
    dispatch(add(product))
    toast.success("Product Added to Cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  return (
    <div className='pt-3'>

      <Link to="/" className='text-lg  font-semibold leading-tight ml-4 w-32  text-center hover:underline '>← Back to Search</Link>


      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        style={{ height: "100px" }}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-[512px] h-[512px] dark:hidden" src={product.imageUrl} alt="" />

            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1
                className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
              >
                {product.name}
              </h1>
              <p>{product.brand}</p>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  ${product.price}
                </p>

              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  onClick={ addToCart }
                  className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>

                  Add to Carts
                </button>


              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                <span className='text-black font-semibold text-[20px]'>About this item </span>
                {product.description}
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailView