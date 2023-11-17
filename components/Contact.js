import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className='contact-us'>
            <div className='contact-us-heading'>
                <h1>Contact us</h1>
                <p>We'd love to hear from you. Whether it is a suggestion, appreciation or some things that you'd rather we do differently, please feel free to connect with us.</p>
            </div>
            <div className='contact-us-form'>
                <div className="card">
                    <span className="title">Leave a Comment</span>
                    <form className="form">
                        <div className="group">
                            <input placeholder="" type="text" required/>
                                <label htmlFor="name">Name*</label>
                        </div>
                        <div className="group">
                            <input placeholder='' type="email" id="email" name="email" required/>
                                <label htmlFor="email">Email*</label>
                        </div>
                        <div className="group">
                            <textarea placeholder='' id="comment" name="comment" rows="5" required></textarea>
                            <label htmlFor="comment">Message*</label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className='contact-us-center-div'>

                </div>
                <div className='contact-us-address'>
                    <h3>Address:</h3>
                    <p>251 Little Falls Drive,</p>
                    <p>Wilmington,</p>
                    <p>DE 19808</p>
                    <p>Mail : customercare@pizunalinens.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact