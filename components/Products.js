'use client'
import { getSpecificCategoryProducts } from '@/services/product'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Products = ({ name }) => {

    const [products, setProducts] = useState([])
    const router = useRouter()

    useEffect(() => {
        getSpecificCategoryProducts(name).then(res => {
            setProducts(res)
        })
    }, [name])

    const handleClick = (id) => {
        router.push(`/products/product?prod=${`${name}1cat`+(Math.random() + 1).toString(36).substring(2) + Math.random().toFixed(2)*100 + (Math.random() + 1).toString(36).substring(2) + Math.random().toFixed(2)*100 + 'wdz' + id }`)
    }

    return (
        <section className="text-gray-600 body-font">
            <h1 className='text-center mt-10 text-4xl underline italic font-bold underline-offset-8'>{name || 'No products in this category.'}</h1>
            <div className="container py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((prod) => {
                        return <div className="lg:w-1/4 md:w-1/2 mt-4 p-4 w-full border" key={prod.id}>
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" width={420} height={260} src={prod.mainImage} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">{prod.productName}</h2>
                                <div className='flex justify-around items-center mt-2'>
                                    <p className="mt-1">${prod.price}</p>
                                    <button className='border rounded-md hover:bg-purple-700 tracking-widest pt-2 pb-2 pr-5 pl-5 bg-purple-500 text-white cursor-pointer' onClick={()=>handleClick(prod.id)}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    })}
                    {products.length === 0 && <h1 className='text-center mt-10 text-4xl underline italic font-bold underline-offset-8'>No products in this category.</h1>}
                </div>
            </div>
        </section>
    )
}

export default Products