import React from 'react'
import '../styles/Testimonial.css'
import TestimonialCard from './TestimonialCard'
import Image1 from '../public/50.jpg'
import Image2 from '../public/51.jpg'

const Testimonial = () => {
    return (
        <div className='testimonial-main-div'>
            <div>
                <h1>Testimonial</h1>
            </div>
            <div className='testimonial-cards-divs'>
                <TestimonialCard Image1={Image1} name={'Baker'} data={'I am beyond pleased with these sheets! The softness and comfort they provide are unmatched, creating a luxurious sleeping experience. From the moment I first touched them, I could tell these sheets were something special.'}/>
                <TestimonialCard Image1={Image2} name={'Jill'} data={'Was very pleased with this purchase. The sheet holds onto the mattress really well and does not pop out while twisting or turning while sleeping. The quality is very good. The softness and comfort they provide are unmatched.'}/>
            </div>
        </div>
    )
}

export default Testimonial