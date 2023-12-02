'use client'
import React, { useState } from 'react'
import '../styles/Contact.css'
import { addEnquiry } from '@/services/enquiry'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addEnquiry(data).then(() => {
            toast.info('Thanks for the enquiry. We will contact you soon!!')
            setData({
                name: '',
                email: '',
                message: ''
            })
        }).catch(() => {
            toast.error('Something went wrong!! Please try later.')
        })
    }

    return (
        <div className='contact-us'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='contact-us-heading'>
                <h1>Contact us</h1>
                <p>We&apos;d love to hear from you. Whether it is a suggestion, appreciation or some things that you&apos;d rather we do differently, please feel free to connect with us.</p>
            </div>
            <div className='contact-us-form'>
                <div className="card">
                    <span className="title">Leave a Comment</span>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="group">
                            <input placeholder="" type="text" name='name' onChange={handleChange} value={data.name} required />
                            <label htmlFor="name">Name*</label>
                        </div>
                        <div className="group">
                            <input placeholder='' type="email" id="email" onChange={handleChange} value={data.email} name="email" required />
                            <label htmlFor="email">Email*</label>
                        </div>
                        <div className="group">
                            <textarea placeholder='' id="comment" value={data.message} onChange={handleChange} name="message" rows="5" required></textarea>
                            <label htmlFor="comment">Message*</label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className='contact-us-center-div'>

                </div>
                <div className='contact-us-address'>
                    <h3>Address:</h3>
                    <p>799 Coliseum Way</p>
                    <p>Midvale, UT - 84047</p>
                    <p>United States</p>
                    <p><a href='mailto:help@wamsuttadreamzone.com'>Mail : help@wamsuttadreamzone.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact