import Link from 'next/link'
import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { AiFillHome } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { GiLoincloth } from 'react-icons/gi'
import { IoIosAddCircle } from 'react-icons/io'
import { MdOutlinePendingActions } from 'react-icons/md'
import { GrCompliance } from 'react-icons/gr'
import { setNavActive } from '@/utils/AdminNavSlice'
import { useDispatch } from 'react-redux'


export default function AdminSidebar() {
    const dispatch =  useDispatch();
    return (
        <div className='w-60 dark:text-black md:block bg-white h-full overflow-auto'>
            <div className='w-full text-center py-2 px-2 h-20'>
                <h1 className='flex text-2xl font-semibold items-center justify-center'><RxDashboard className='mx-2' /> Dashboard</h1>
            </div>
            <div className='w-full '>
                <ul className='flex px-4 flex-col items-start justify-center'>
                    <li onClick={() => dispatch(setNavActive('Base'))} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'> <AiFillHome className='mx-2' /> Home</button></li>
                    <li onClick={() => dispatch(setNavActive('activeCategories'))} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'> <BiCategory className='mx-2' />  Categories</button></li>
                    <li onClick={() => dispatch(setNavActive('activeProducts'))} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'> <GiLoincloth className='mx-2' />  Products</button></li>
                    <li onClick={() => dispatch(setNavActive('activeAddProduct'))} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'><IoIosAddCircle className='mx-2' /> Add Products</button></li>
                    <li onClick={() => dispatch(setNavActive('activeAddCategory'))} className='py-3 px-1 mb-3'><button className='flex items-center justify-center'><IoIosAddCircle className='mx-2' /> Add Category</button></li>
                    <li  className='py-3 px-1 mb-3' onClick={() => dispatch(setNavActive('activeAddReview'))}><button className='flex items-center justify-center'> <MdOutlinePendingActions className='mx-2' /> Add Reviews</button></li>
                    <li  className='py-3 px-1 mb-3' onClick={() => dispatch(setNavActive('activeReview'))}><button className='flex items-center justify-center' > <GrCompliance className='mx-2' />Reviews</button></li>
                </ul>
            </div>

        </div>
    )
}