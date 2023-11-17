'use client'
import CartPage from '@/CartPage'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const cart = useSelector(state => state.Cart)

    return (
        <CartPage cart={cart.cartItems} />
    )
}

export default page