'use client'
import { getProductDetails, getSpecificCategoryProducts } from '@/services/product'
import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import '../styles/ProductItem.css'
import { useDispatch } from 'react-redux'
import { addCartData, addWishlistData } from '@/utils/CartSlice'
import Image from 'next/image'
import CustomerReviews from './CustomerReviews'
import { getProductReview } from '@/services/review'

const ProductItem = ({ search }) => {

    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState([])
    const [reviews, setReviews] = useState([])
    const [main, setMain] = useState(product?.mainImage || '')
    const dispatch = useDispatch()

    useEffect(() => {
        const searchString = search.slice(search.lastIndexOf('wdz'))
        const categoryName = search.slice(0,search.indexOf('1'))
        getProductDetails(searchString.slice(3)).then(res => {
            setProduct(res)
            console.log(res)
            getProductReview(res.id).then(response=>{
                console.log(response)
                setReviews(response)
            })
        })
        getSpecificCategoryProducts(categoryName).then(res => {
            setProducts(res)
            console.log(res)
        })
    }, [search])

    const addToCart = () => {
        dispatch(addCartData({...product, itemQuantity:1}))
    }

    const addToWishlist = () => {
        dispatch(addWishlistData({...product, itemQuantity:1}))
    }

    const changeMainImage = (url) => {
        setMain(url)
    }

    return (
        <>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container py-24 mx-auto">
                <div className="mx-auto flex flex-wrap product-item-div">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'product',
                            src: main || product?.mainImage,
                            width: 400,
                            height: 400,
                        },
                        largeImage: {
                            src: main || product?.mainImage,
                            width: 1100,
                            height: 1100,
                        },
                        imageClassName:'lg:w-1/2 w-full lg:h-auto h-64 object-fit object-center rounded magnify-image',
                    }}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 product-container">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">{product?.productName}</h1>
                        <p className="leading-relaxed">{product?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3 font-extrabold">Color : {product?.color}</span>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3 font-extrabold">Size : {product?.size}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addToCart}>Add To Cart</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLineCap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 hover:fill-red-600" viewBox="0 0 24 24" onClick={addToWishlist}>
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='mt-2 flex justify-around items-center overflow-auto'>
                        <Image className='border rounded-lg p-2 w-36 h-36 m-2' alt='product' onClick={()=>changeMainImage(product?.mainImage)} src={product?.mainImage} width={150} height={150}/>
                        <Image className='border rounded-lg p-2 w-36 h-36 m-2' alt='product' onClick={()=>changeMainImage(product?.image1)} src={product?.image1} width={150} height={150}/>
                        <Image className='border rounded-lg p-2 w-36 h-36 m-2' alt='product' onClick={()=>changeMainImage(product?.image2)} src={product?.image2} width={150} height={150}/>
                        <Image className='border rounded-lg p-2 w-36 h-36 m-2' alt='product' onClick={()=>changeMainImage(product?.image3)} src={product?.image3} width={150} height={150}/>
                        <Image className='border rounded-lg p-2 w-36 h-36 m-2' alt='product' onClick={()=>changeMainImage(product?.image4)} src={product?.image4} width={150} height={150}/>
                        <Image className='border rounded-lg p-2 w-36 h-36 m-2' alt='product' onClick={()=>changeMainImage(product?.image5)} src={product?.image5} width={150} height={150}/>
                    </div>
                </div>
                <h1 className='text-2xl mt-5 font-extrabold'>Related products</h1>
                <div className='flex items-center gap-x-2 border p-2 mt-2 overflow-x-auto'>
                    {products.map((prod)=>{
                        return <Image key={prod.id} className='w-36 h-36 m-2' src={prod?.mainImage} alt='product' width={150} height={150}/>
                    })}
                </div>
            </div>
        </section>
        <CustomerReviews reviews={reviews}/>
        </>
    )
}

export default ProductItem