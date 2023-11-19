'use client'
import Products from '@/Products'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const searchParams = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('category'))

    useEffect(()=>{
        let search = searchParams.get('category')
        setSearch(search)
    },[searchParams])


  return (
    <Products name={search}/>
  )
}

export default Page