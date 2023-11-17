'use client'
import ProductItem from '@/ProductItem'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('prod'))

  useEffect(() => {
    let search = searchParams.get('prod')
    setSearch(search)
  }, [searchParams])

  return (
    <ProductItem search = {search}/>
  )
}

export default page