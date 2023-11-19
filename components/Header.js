import { Megaphone } from 'lucide-react'
import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header-div'>
        <Megaphone />
        <p>&nbsp;&nbsp; Get 30% off on your first order using the coupon code &quot;WELCOME30&quot; during checkout.</p>
    </div>
  )
}

export default Header