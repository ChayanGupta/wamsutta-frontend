'use client'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import { Heart, Search, ShoppingCart, User2 } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const cart = useSelector(state => state.Cart)
  
  const router = useRouter()

  const openCart = () => {
    router.push('/cart')
  }

  const openWishlist = () => {
    router.push('/wishlist')
  }

  return (
    <div className={styles.main}>
      <div className={styles.navRight}>
        <h3><Link href="/" className={styles.linkTags}>Wamsutta</Link></h3>
      </div>
      <div>
        <ul className={styles.navRight}>
          <li className={styles.profile}>
            <User2 />
            <div className={styles.profileDiv}>
              <h6><Link href='/login' className={styles.linkTag}>LOG IN</Link></h6>
              <h6><Link href='/register' className={styles.linkTag}>SIGN UP</Link></h6>
            </div>
          </li>
          <li onClick={openWishlist}>
            <Heart />
            <div className={styles.cartTotal}>{cart.wishlist.length}</div>
          </li>
          <li onClick={openCart}>
            <ShoppingCart />
            <div className={styles.cartTotal}>{cart.cartItems.length}</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar