import Image from 'next/image'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { removeWishlistData } from '@/utils/CartSlice';
import { useRouter } from 'next/navigation';

const WishlistPage = ({ cart }) => {

    const dispatch = useDispatch()
    const router = useRouter()
    
    const deleteFromCart = (item) => {
        dispatch(removeWishlistData(item))
    }

    const shopNow = () => {
        router.push('/')
    }

    return (
        <section className='m-5 p-4'>
            <h1 className='text-center text-4xl underline underline-offset-8 decoration-purple-500 text-purple-500 font-extrabold'>Wishlist</h1>
            <div className='border rounded-xl mt-6 w-full'>
                {cart?.map((item) => {
                    return <div className='p-2 inline-grid justify-center items-center gap-x-24' key={item.id} style={{ gridTemplateColumns: '25vw 25vw 5vw 20vw' }}>
                        <Image src={item.mainImage} alt='' width={300} height={200} />
                        <h1 className='text-lg'>{item.productName}</h1>
                        <button className='text-4xl text-red-500' onClick={() => deleteFromCart(item)}><MdDelete /></button>
                    </div>
                })}
            </div>
            {cart.length === 0 && <div>
                <h1 className='text-center text-3xl'>Your wishlist is empty. <span onClick={shopNow} className='cursor-pointer text-blue-500 underline underline-offset-8'>Shop Now</span></h1>
            </div>}
        </section>
    )
}

export default WishlistPage