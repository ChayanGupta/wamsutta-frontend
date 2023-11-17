import Image from 'next/image'
import React from 'react'
import '../styles/TestimonialCard.css'
import Image1 from '../public/50.jpg'

const TestimonialCard = () => {
    return (
        <div className='testimonial-card-div'>
            <div>
                <div className='card-circle-div'>
                    <Image width={80} height={80} src={Image1} className='card-profile-img' alt='profile-img'/>
                    <h4>John Wick</h4>
                </div>
                <div style={{marginTop:'1.5rem'}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum qui soluta culpa repudiandae nobis quae! Dolor tenetur perferendis quisquam quos blanditiis error.
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard