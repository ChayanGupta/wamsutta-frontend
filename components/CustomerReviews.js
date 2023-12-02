import React, { useEffect, useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import Rating from 'react-rating';
import '../styles/CustomerReviews.css'

const CustomerReviews = ({ reviews }) => {

    const [overallReviews, setOverallReviews] = useState(0)
    const [currentItems, setCurrentItems] = useState(reviews)

    useEffect(() => {
        setCurrentItems(reviews)
        let star = 0;
        star = reviews.reduce((star, review) => {
            return review.star + star
        }, 0)
        setOverallReviews(star)
    })

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mx-auto">
                <div className="mx-auto customer-review-div flex flex-wrap gap-x-16">
                    <div>
                        <h1 className='text-2xl text-black font-extrabold font-serif'>Customer reviews</h1>
                        <div className='flex gap-x-2 text-orange-400 text-2xl items-center'>
                            <Rating
                                emptySymbol={<RiStarSLine size={27} />}
                                fullSymbol={<IoStarSharp style={{ color: 'orange' }} size={25} />}
                                fractions={2}
                                initialRating={(overallReviews / (reviews.length>0?reviews.length:1)).toFixed(1)}
                                readonly={true}
                            />
                            <p className='text-black text-xl font-sans font-semibold self-start'>{(overallReviews/(reviews.length>0?reviews.length:1)).toFixed(1)} out of 5</p>
                        </div>
                        {/* <div className='mt-2'>
                            5 star<ProgressBar animateOnRender={true} completed={((eachRating.five / (reviews.length>0?reviews.length:1)) * 100).toFixed(0)} bgColor='rgba(251,146,60,1)' borderRadius='25px' labelColor='grey' labelAlignment='outside' />
                        </div>
                        <div className='mt-2'>
                            4 star<ProgressBar animateOnRender={true} completed={((eachRating.four / (reviews.length>0?reviews.length:1)) * 100).toFixed(0)} bgColor='rgba(251,146,60,1)' borderRadius='25px' labelColor='grey' labelAlignment='outside' />
                        </div>
                        <div className='mt-2'>
                            3 star<ProgressBar animateOnRender={true} completed={((eachRating.three / (reviews.length>0?reviews.length:1)) * 100).toFixed(0)} bgColor='rgba(251,146,60,1)' borderRadius='25px' labelColor='grey' labelAlignment='outside' />
                        </div>
                        <div className='mt-2'>
                            2 star<ProgressBar animateOnRender={true} completed={((eachRating.two / (reviews.length>0?reviews.length:1)) * 100).toFixed(0)} bgColor='rgba(251,146,60,1)' borderRadius='25px' labelColor='grey' labelAlignment='outside' />
                        </div>
                        <div className='mt-2'>
                            1 star<ProgressBar animateOnRender={true} completed={((eachRating.one / (reviews.length>0?reviews.length:1)) * 100).toFixed(0)} bgColor='rgba(251,146,60,1)' borderRadius='25px' labelColor='grey' labelAlignment='outside' />
                        </div> */}
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 product-container">
                        <h2 className='font-sans font-semibold text-xl text-black'>Reviews</h2>
                        {currentItems.map((review) => {
                            return <React.Fragment key={review.id}>
                                <div className='flex gap-x-2 mt-5 text-black font-2xl items-center'>
                                    <FaUserCircle size={30} color='grey' />
                                    <h4>{review?.customerName}</h4>
                                </div>
                                <div className='flex gap-x-1 text-xl mt-2 items-center'>
                                    <Rating
                                        emptySymbol={<RiStarSLine size={27} />}
                                        fullSymbol={<IoStarSharp style={{ color: 'orange' }} size={25} />}
                                        fractions={2}
                                        initialRating={review.star}
                                        readonly={true}
                                    />
                                </div>
                                <p className='mt-2'>{review.date}</p>
                                <p className='text-black font-medium mt-2' style={{ lineHeight: '1.25rem' }}>
                                    {review.feedback}
                                </p>
                            </React.Fragment>
                        })}
                        {currentItems.length===0 && <p>No reviews yet. Be the one.</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews