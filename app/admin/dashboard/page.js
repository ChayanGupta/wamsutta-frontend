"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import AdminSidebar from '@/admin/AdminSidebar';
import SuperComponent from '@/admin/SuperComponent';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Loading from '../../loading';
import { setNavActive } from '@/utils/AdminNavSlice';
import { decryptData } from '../../../secure/encrypt-decrypt';
import 'react-toastify/dist/ReactToastify.css';


export default function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const user = await decryptData('user')
      if(user!==null){
        if (user?.role !== 'ROLE_ADMIN') {
          router.push('/')
        }
        dispatch(setNavActive('Base'))
      }
    }
    loadData();
  }, [dispatch, router])

  return (
    <div className='w-full h-screen flex bg-gray-50 overflow-hidden'>
      <AdminSidebar />
      <div className='w-full h-full'>
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
          <SuperComponent />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="light"
      />
    </div>
  )
}