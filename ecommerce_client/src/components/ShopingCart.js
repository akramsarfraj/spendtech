import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { add, remove } from '../redux/cartSlice'
import { Bounce, toast, ToastContainer } from 'react-toastify'


function ShopingCart() {
    let [product, setProduct] = useState([])
    let [refresh, setRefresh] = useState(false)

    const item = useSelector((state) => state.cart.item)
    const total = useSelector((state) => state.cart.total)

    const dispatch = useDispatch()

    useEffect(() => {
        setRefresh(false)
        setProduct(item)
    }, [refresh])


    function addProduct(item) {
        dispatch(add(item));
        setRefresh(true);
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

    function removeProduct(item) {
        dispatch(remove(item));
        setRefresh(true);
        toast.info("Product remove successfull", {
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
        <div className='pt-2'>

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
            <Link to="/" className='text-lg  font-semibold leading-tight ml-4 w-32  text-center hover:underline '>← Back to Search</Link>
            <section className="bg-white py-8 antialiased md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                    <div className="mt-6  sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {
                                    product.length === 0 && <p>Carts is Empty</p>
                                }

                                {
                                    product.map((e) => {
                                        return (

                                            <div key={e.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                    <p className="shrink-0 md:order-1">
                                                        <img className="h-20 w-20 dark:hidden" src={e.imageUrl} alt="product" />
                                                    </p>
                                                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                        <div className="flex items-center">
                                                            <button onClick={() => { addProduct(e) }} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 :hover:bg-gray-600">
                                                                +
                                                            </button>
                                                            <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{e.quantity}</p>
                                                            <button onClick={() => { removeProduct(e) }} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 :focus:ring-gray-700">
                                                                -
                                                            </button>
                                                        </div>
                                                        <div className="text-end md:order-4 md:w-32">
                                                            <p className="text-base font-bold text-gray-900 dark:text-white">${e.price}</p>
                                                        </div>
                                                    </div>

                                                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                        <Link to={`/product/${e.id}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{e.name}</Link>

                                                        <div className="flex items-center gap-4">

                                                            <button onClick={() => { removeProduct(e) }} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</dd>
                                    </dl>
                                </div>


                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping →
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShopingCart