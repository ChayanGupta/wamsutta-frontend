'use client'
import WishlistPage from '@/WishlistPage'
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {
    const cart = useSelector(state => state.Cart)

    return (
        <WishlistPage cart={cart.wishlist} />
    )
}

export default Page