import React from 'react'
import '../styles/Footer.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div>
                <h2>SHOP</h2>
                <ul>
                    <li>Sheet Set</li>
                    <li>Fitted Sheet</li>
                    <li>Flat Sheet</li>
                    <li>Comforter</li>
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
                    <li>TERMS OF SERVICE</li>
                    <li>RETURN & EXCHANGE</li>
                    <li>ORDER & SHIPPING</li>
                </ul>
            </div>
            <div>
                <h2>GUIDE</h2>
                <ul>
                    <li>SIZE GUIDE</li>
                    <li>BUYING GUIDE</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer