import Image from 'next/image'
import React from 'react'
import '../styles/TestimonialCard.css'
import { IoStarSharp } from "react-icons/io5";

const TestimonialCard = ({ data, name, Image1 }) => {
    return (
        <div className='testimonial-card-div'>
            <div>
                <div className='card-circle-div'>
                    <Image width={80} height={80} src={Image1} className='card-profile-img' alt='profile-img' />
                    <div>
                        <h4>{name}</h4>
                        <div className='gap-x-1 flex'>
                            <IoStarSharp style={{ color: 'rgba(255,164,28,1)' }} />
                            <IoStarSharp style={{ color: 'rgba(255,164,28,1)' }} />
                            <IoStarSharp style={{ color: 'rgba(255,164,28,1)' }} />
                            <IoStarSharp style={{ color: 'rgba(255,164,28,1)' }} />
                            <IoStarSharp style={{ color: 'rgba(255,164,28,1)' }} />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                    {data}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard