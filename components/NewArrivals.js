'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import '../styles/NewArrivals.css'
import { getNewArrivals } from '@/services/product'
import { useRouter } from 'next/navigation'

const NewArrivals = () => {

  const [featuredProduct, setFeaturedProduct] = useState([])
  const router = useRouter()

  useEffect(() => {
    getNewArrivals().then(res => {
      setFeaturedProduct(res)
      console.log("line 16--->",res)
    }).catch(err=>console.log("line 17-->", err))
  }, [])

  const handleClick = (id, name) => {
    router.push(`/products/product?prod=${`${name}1cat`+(Math.random() + 1).toString(36).substring(2) + Math.random().toFixed(2)*100 + (Math.random() + 1).toString(36).substring(2) + Math.random().toFixed(2)*100 + 'wdz' + id }`)
  }

  return (
    <div className='arrival-main-div'>
      <h1>Best Selling</h1>
      <div className='arrival-div'>
        {featuredProduct.map((prod) => {
          return <div className='arrival-item-div' key={prod.id}>
            <Image src={prod.mainImage} width={300} height={600} alt='item-pic' className='arrival-item-image' />
            <h5 style={{display:'-webkit-box',WebkitLineClamp:4,WebkitBoxOrient:'vertical',lineClamp:4,overflow:'hidden',textOverflow:'ellipsis'}}>{prod.productName}</h5>
            <div className='arrival-item-footer'>
              <p>${prod.price}</p>
              <button onClick={()=>handleClick(prod.id, prod.categoryId)}>Shop Now</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default NewArrivals