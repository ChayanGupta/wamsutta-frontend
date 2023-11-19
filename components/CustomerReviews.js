import React, { useEffect, useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import Rating from 'react-rating';
import ReactPaginate from 'react-paginate';
import '../styles/CustomerReviews.css'

const CustomerReviews = ({ reviews }) => {

    const [overallReviews, setOverallReviews] = useState(0)
    // const [eachRating, setEachRating] = useState({
    //     'five': 0,
    //     'four': 0,
    //     'three': 0,
    //     'two': 0,
    //     'one': 0
    // })

    useEffect(() => {
        let star = 0;
        // let ratings = {
        //     'five': 0,
        //     'four': 0,
        //     'three': 0,
        //     'two': 0,
        //     'one': 0
        // }
        star = reviews.reduce((star, review) => {
            // if (review.star == 5) {
            //     ratings.five += 1;
            // } else if (review.star == 4) {
            //     ratings.four += 1;
            // } else if (review.star == 3) {
            //     ratings.three += 1;
            // } else if (review.star == 2) {
            //     ratings.two += 1;
            // } else {
            //     ratings.one += 1;
            // }
            return review.star + star
        }, 0)
        setOverallReviews(star)
        // setEachRating(ratings)
        const pageCount = Math.ceil(reviews.length / 2);
        setPageCount(pageCount)
        changeItems()
    }, [reviews])

    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(1)

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)

    const changeItems = () => {
        const endOffset = itemOffset + 2;
        const currentItems = reviews.slice(itemOffset, endOffset);
        setCurrentItems(currentItems)
    }
    
    useEffect(()=>{
        const endOffset = itemOffset + 2;
        const currentItems = reviews.slice(itemOffset, endOffset);
        setCurrentItems(currentItems)
    },[itemOffset])
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 2) % reviews.length;
      setItemOffset(newOffset);
    };

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
                            <p className='text-black text-xl mt-2 font-sans font-semibold'>{(overallReviews/(reviews.length>0?reviews.length:1)).toFixed(1)} out of 5</p>
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
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< Previous"
                            renderOnZeroPageCount={null}
                            containerClassName='flex gap-x-4 mt-2'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews