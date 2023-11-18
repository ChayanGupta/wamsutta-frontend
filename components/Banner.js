'use client'
import React from 'react'
import styles from '../styles/Banner.module.css'
import Image1 from '../public/pexels-leah-kelley-3586911.jpg'
import Image2 from '../public/pexels-curtis-adams-3555618.jpg'
import Image3 from '../public/pexels-ketut-subiyanto-4473864.jpg'
import Image from 'next/image';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BadgePercent, Package, Truck } from 'lucide-react'


const Banner = () => {
    const bootstrap = [
        { imageUrl: Image1 },
        { imageUrl: Image2 },
        { imageUrl: Image3 },
    ];

    return (
        <React.Fragment>
            <Carousel>
                {bootstrap.map((item, index) => (
                    <Carousel.Item key={index} className={styles.itemP} interval={2000}>
                        <Image src={item.imageUrl} alt="slides" className={styles.img} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={styles.bannerBottom}>
                <div className='flex flex-col justify-center items-center'>
                    <Truck color='#8e55d3' size={36} />
                    <h3>Free Shipping</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Package color='#8e55d3' size={36} />
                    <h3>10 Days Return policy</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <BadgePercent color="#8e55d3" size={36} />
                    <h3>Daily Discounts</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Banner