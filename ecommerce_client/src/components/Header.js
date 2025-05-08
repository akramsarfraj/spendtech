import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header({ updateSearch }) {

    const item = useSelector((state) => state.cart.item) 

    let [input, setInput] = useState("")
    function handleSearch() {
        updateSearch(input)
    }


    return (
        <div>
            <header className="w-full bg-white shadow sticky top-0 z-50 p-1">
                <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">

                    <div className="text-2xl font-bold text-blue-600 select-none ">
                        <a href='/'>
                            E-Shop
                        </a>

                    </div>

                    <div className="hidden md:flex md:max-w-xl md:flex-grow md:justify-center" >
                        <input
                            type="text"
                            name="search"
                            value={input}
                            onChange={(e) => { setInput(e.target.value) }}
                            placeholder="Search products..."
                            className="flex-grow rounded-l-full border border-r-0 border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                        <button
                            onClick={handleSearch}
                            aria-label="Submit search"
                            className="rounded-r-full bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none px-5 flex items-center justify-center text-white transition"
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round"></line>
                            </svg>
                        </button>
                    </div>
                    <Link to="/carts">
                        <button
                            aria-label="Shopping cart with 3 items"
                            className="relative text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        >
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-6v6"
                                />
                            </svg>
                            <span
                                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs font-bold px-2 leading-none select-none"
                            >{item.length}</span
                            >
                        </button>
                    </Link>
                </div>
                <div className=" flex-grow max-w-xl mx-4 flex sm:hidden md:hidden" >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        name="search"
                        placeholder="Search products..."
                        className="flex-grow rounded-l-full border border-r-0 border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                    <button
                        onClick={handleSearch}

                        className="rounded-r-full bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none px-5 flex items-center justify-center text-white transition"
                    >
                        <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round"></line>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default memo(Header)