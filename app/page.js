import Banner from '@/Banner'
import Explore from '@/Explore'
// import Brands from '@/Brands'
import WhyChooseUs from '@/WhyChooseUs'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Image1 from '../public/pexels-gustavo-fring-3865911.jpg'
import Image2 from '../public/pexels-gustavo-fring-4005035.jpg'
import Image3 from '../public/pexels-gustavo-fring-4005039.jpg'
import Image4 from '../public/pexels-tim-douglas-6567607.jpg'
import Testimonial from '@/Testimonial'
import Head from 'next/head'
import NewArrivals from '@/NewArrivals'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop Best Bedding Set - Wamsutta</title>
      </Head>
      <Banner />
      {/* <Brands/> */}
      <NewArrivals />
      <Explore />
      <WhyChooseUs />
      <div className={styles.tempMainDiv}>
        <div className={styles.tempDiv}>
          <Image src={Image1} alt='image-1' className={styles.tempImg} />
          <Image src={Image2} alt='image-2' className={styles.tempImg} />
          <Image src={Image3} alt='image-3' className={styles.tempImg} />
          <Image src={Image4} alt='image-4' className={styles.tempImg} />
        </div>
        <div className={styles.upWardDiv}>
          <div className={styles.innerDiv}>
            <h3>224+</h3>
            <span>Happy Customer</span>
          </div>
          <div className={styles.innerDiv}>
            <h3>524+</h3>
            <span>Products</span>
          </div>
          <div className={styles.innerDiv}>
            <h3>52+</h3>
            <span>Countries</span>
          </div>
        </div>
      </div>
      <Testimonial />
   </>
  )
}
