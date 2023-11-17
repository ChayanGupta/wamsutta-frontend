import React from 'react'
import '../styles/Testimonial.css'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    return (
        <div className='testimonial-main-div'>
            <div>
                <h1>Testimonial</h1>
            </div>
            <div>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
        </div>
    )
}

export default Testimonial