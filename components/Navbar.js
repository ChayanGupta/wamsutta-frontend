'use client'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { Heart, ShoppingCart, User2 } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { decryptData } from '../secure/encrypt-decrypt'
import Image from 'next/image'
import Logo from '../public/logo.jpg'

const Navbar = () => {

  const user = useSelector(state=>state.userReducer)
  const cart = useSelector(state => state.Cart)
  const [logout, setLogout] = useState(false)
  
  const router = useRouter()

  const openCart = () => {
    router.push('/cart')
  }

  const openWishlist = () => {
    router.push('/wishlist')
  }

  useEffect(() => {
    async function loadData() {
      const user = await decryptData('user')
      console.log("line 27", user)
      if (user !== null) {
        setLogout(true)
      }
    }
    loadData();
  })

  useEffect(() => {
    async function loadData() {
      const user = await decryptData('user')
      console.log("line 27", user)
      if (user !== null) {
        setLogout(true)
      }
    }
    loadData();
  },[user])
  

  const handleLogout = () => {
    localStorage.clear();
    setLogout(false)
    router.push('/')
  }

  const handleProfile = async () => {
    const user = await decryptData('user')
    if (user != null) {
      if (user?.role === 'ROLE_ADMIN') {
        router.push('/admin/dashboard')
      }else{
        router.push('/user/dashboard')
      }
    }
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
            {logout? <div className={styles.profileDiv}>
              <h6 className={styles.linkTag} onClick={handleProfile}>PROFILE</h6>
              <h6 className={styles.linkTag} onClick={handleLogout}>LOGOUT</h6>
            </div>:
            <div className={styles.profileDiv}>
              <h6 className={styles.linkTag} onClick={()=>router.push('/login')}>LOG IN</h6>
              <h6 className={styles.linkTag} onClick={()=>router.push('/register')}>SIGN UP</h6>
            </div>}
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