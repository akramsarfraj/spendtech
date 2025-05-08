import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import axios from 'axios'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { MoonLoader } from 'react-spinners'

function HomePage() {
  let [loading, setLoading] = useState(true)
  let [search, setSearch] = useState("")
  let [products, setProducts] = useState([])

  let handleSearch = useCallback((input) => {
    setSearch(input)
  }, [search])

  useEffect(() => {
    let url = `http://localhost:8080/products`;
    if (search !== "") {
      url = `http://localhost:8080/products?search=${search}`;
    }
    axios.get(url)
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 'ERR_NETWORK') {
          errorNotification(err.message, "erro")
        } else {
          errorNotification(err.response.data, "warn")
        }

      })

  }, [search])


  function errorNotification(message, type) {
    if (type === "warn") {
      toast.warn(message, {
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
    } else {
      toast.error(message, {
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

  }


  return (
    <div className=''>
      <Header updateSearch={handleSearch} />

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

      {
        loading === true && <div className='flex justify-center items-center h-[60vh]'>
          <MoonLoader
            color="#45b27b"
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "gray",
            }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }


      <div className=' flex justify-evenly flex-wrap pt-8 gap-4'>
        {
          products.map((e) => {
            return (
              <ProductCard data={e} key={e.id} />
            )
          })
        }
      </div>

    </div>
  )
}

export default HomePage