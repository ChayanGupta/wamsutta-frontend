"use Client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { addReview } from '@/services/review';
import { decryptData } from '../../secure/encrypt-decrypt';
import { ToastContainer, toast } from 'react-toastify';


export default function AddReview() {
  const router = useRouter();
  const [token, setToken] = useState('')
  const [data, setData] = useState({
    customerName: '',
    productId: '',
    star: '',
    feedback: '',
    date: ''
  })

  useEffect(() => {
    async function loadData() {
      const user = await decryptData('user')
      if (user != null) {
        if (user?.role !== 'ROLE_ADMIN') {
          router.push('/')
        }
        setToken(user.accessToken)
      }
    }
    loadData();
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(data, token).then(() => {
      toast.success('Review Added Successfully')
      setData({
        customerName: '',
        productId: '',
        star: '',
        feedback: '',
        date: ''
      })
    })
  }

  return (
    <div>
      <h1 className='text-center mt-2 mb-2 font-bold text-xl uppercase underline'>Add Review</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 min-h-[50vh] justify-between'>
        <input type="text" name='customerName' placeholder='Customer Name' value={data.customerName} onChange={handleChange} className="p-4 rounded-2xl border-black border-2 w-full text-center" required />
        <input type="text" name='date' placeholder='Date' value={data.date} onChange={handleChange} className="p-4 rounded-2xl border-black border-2 w-full text-center" required />
        <textarea name='feedback' placeholder='Feedback' value={data.feedback} onChange={handleChange} className="p-4 rounded-2xl border-black border-2 w-full text-center" required />
        <input type="number" name='productId' placeholder='Product Id' value={data.productId} onChange={handleChange} className="p-4 rounded-2xl border-black border-2 w-full text-center" required />
        <input type="number" min={1} max={5} name='star' placeholder='Star' value={data.star} onChange={handleChange} className="p-4 rounded-2xl border-black border-2 w-full text-center" required />
        <button type='submit' className='p-4 rounded-2xl bg-purple-500 text-white hover:bg-purple-600'>Submit</button>
      </form>
    </div>
  )
}