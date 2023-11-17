"use client"
import { addCategory } from '@/services/category'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { decryptData } from '../../secure/encrypt-decrypt';
import { toast } from 'react-toastify';

const AddCategory = () => {

    const router = useRouter();
    const [token, setToken] = useState('')
    const [data, setData] = useState({
        name: '',
        image: ''
    })

    useEffect(() => {
        async function loadData() {
            const user = await decryptData('user')
            if (user?.role !== 'ROLE_ADMIN') {
                router.push('/')
            }
            setToken(user.accessToken)
        }
        loadData();
    })

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setData({ ...data, image: e.target.files[0] })
        } else {
            setData({ ...data, name: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append("file", data.image)
        formdata.append("upload_preset", "ml_default")
        addCategory(formdata, data, token).then(res => {
            toast.success('Category Added Successfully')
            setData({
                name:'',
                image:''
            })
        })
    }

    return (
        <div>
            <h1 className='text-center mt-2 mb-2 font-bold text-xl uppercase underline'>Add Category</h1>
            <form onSubmit={handleSubmit} className='flex flex-col min-h-[50vh] justify-between'>
                <input type="text" name='name' placeholder='Category Name' value={data.name} onChange={handleChange} className="p-4 rounded-2xl border-black border-2 w-full text-center" required/>
                <input type="file" name='image' accept='image/*' placeholder='Image Url' onChange={handleChange} className='p-4 rounded-sm bg-purple-500 text-white' required/>
                <button type='submit' className='p-4 rounded-2xl bg-purple-500 text-white hover:bg-purple-600'>Submit</button>
            </form>
        </div>
    )
}

export default AddCategory