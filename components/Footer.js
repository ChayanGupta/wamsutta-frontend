'use client'
import React from 'react'
import '../styles/Footer.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Footer = () => {

    const router = useRouter()

    return (
        <div className='footer-main-div'>
            <div>
                <h2>SHOP</h2>
                <ul>
                    <li onClick={()=>router.push(`/products?category=${'Sheet Set'}`)}>Sheet Set</li>
                    <li onClick={()=>router.push(`/products?category=${'Fitted Sheet'}`)}>Fitted Sheet</li>
                    <li onClick={()=>router.push(`/products?category=${'Flat Sheet'}`)}>Flat Sheet</li>
                    <li onClick={()=>router.push(`/products?category=${'Bed Skirt'}`)}>Bed Skirt</li>
                </ul>
            </div>
            <div>
                <h2>ABOUT US</h2>
                <ul>
                    <li><Link className='link-tags' href="/contact-us">CONTACT US</Link></li>
                    <li><Link className='link-tags' href="/faqs">FAQs</Link></li>
                </ul>
            </div>
            <div>
                <h2>POLICY</h2>
                <ul>
                    <li><Link className='link-tags' href="/privacy-policy">PRIVACY POLICY</Link></li>
                </ul>
            </div>
            <div>
                <h2>GUIDE</h2>
                <ul>
                    <li><Link className='link-tags' href="/size-guide">SIZE GUIDE</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer