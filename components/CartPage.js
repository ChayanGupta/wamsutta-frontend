import Image from 'next/image'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addCartData, removeCartData, removeFullCartData } from '@/utils/CartSlice';
import { useRouter } from 'next/navigation';
import Image1 from '../public/empty-cart.webp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';

const CartPage = ({ cart }) => {

    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    const deleteFromCart = (item) => {
        dispatch(removeFullCartData(item))
    }

    const shopNow = () => {
        router.push('/')
    }

    const removeQuantity = (item) => {
        dispatch(removeCartData(item))
    }

    const addQuantity = (item) => {
        dispatch(addCartData(item))
    }

    const onCheckout = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            toast.error('Server is Down, Please try later!!')
        }, 5000)
    }

    return (
        <section className='m-5 p-4'>
            <ToastContainer />
            <h1 className='text-center text-4xl underline underline-offset-8 decoration-purple-500 text-purple-500 font-extrabold'>Cart</h1>
            <div className='border rounded-xl mt-6 w-full'>
                {cart?.map((item) => {
                    return <div className='p-2 inline-grid justify-center items-center gap-x-24' key={item.id} style={{ gridTemplateColumns: '25vw 25vw 5vw 20vw' }}>
                        <Image src={item.mainImage} width={300} height={200} />
                        <h1 className='text-lg'>{item.productName}</h1>
                        <div className='flex justify-around items-center text-xl gap-x-4'>
                            <FaMinus onClick={() => removeQuantity(item)} className='cursor-pointer' />
                            <p>{item.itemQuantity}</p>
                            <FaPlus onClick={() => addQuantity(item)} className='cursor-pointer' />
                        </div>
                        <button className='text-4xl text-red-500' onClick={() => deleteFromCart(item)}><MdDelete /></button>
                    </div>
                })}
            </div>
            {cart.length === 0 ? <div>
                <Image src={Image1} className='mx-auto' />
                <h1 className='text-center text-3xl'>Your cart is empty. <span onClick={shopNow} className='cursor-pointer text-blue-500 underline underline-offset-8'>Shop Now</span></h1>
            </div> : <div className='flex justify-center gap-x-3 text-xl mt-4 text-white items-center'>
                <button className='bg-purple-500 rounded-md p-2' onClick={() => router.push('/')} >Buy More</button>
                <button className='bg-purple-500 rounded-md p-2' onClick={onCheckout}>
                    {loader ?
                        <span className='w-full flex items-center justify-center '>
                            <TailSpin
                                height="30"
                                width="30"
                                color="orange"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </span> : 'Checkout'}
                </button>
            </div>}
        </section>
    )
}

export default CartPage