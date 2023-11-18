import Image from 'next/image';
import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import Amazon from '../public/amazon.us.png'
import Walmart from '../public/Walmart.jpg'

const Distributer = () => {
    return (
        <section className='bg-black text-white pt-12 pr-12 pl-12 pb-6'>
            <h1 className='text-center underline underline-offset-8'>Our Distributers</h1>
            <div className='flex justify-around p-12'>
                <div className='flex justify-center items-center gap-x-4'>
                    <div>
                        <TfiLocationPin size={30} />
                    </div>
                    <div>
                        <h1 className='text-2xl'>BED BATH & BEYOND</h1>
                        <p>799 Coliseum Way,</p>
                        <p>Midvale, UT </p>
                        <p>United States - 84047</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-x-4'>
                    <div>
                        <TfiLocationPin size={30} />
                    </div>
                    <div>
                        <h1 className='text-2xl'>SRP LINEN</h1>
                        <p>273-M, Khatiwala Tank,</p>
                        <p>Indore, Madhya Pradesh,</p>
                        <p>India - 452001</p>
                    </div>
                </div>
            </div>
            <h5 className='text-center'>Also available at</h5>
            <div className='flex justify-center gap-x-4 items-center mb-4'>
                <div className='bg-white pr-2 pl-2 max-h-28'>
                    <Image src={Amazon} width={300} height={400} />
                </div>
                <div className='bg-white pt-2 pr-2 pl-2 max-h-28'>
                    <Image src={Walmart} width={300} height={400} />
                </div>
            </div>
            <h6 className='text-center text-red-400 underline'>Note: Be aware of frauds, purchase items only from trusted sources.</h6>
        </section>
    )
}

export default Distributer