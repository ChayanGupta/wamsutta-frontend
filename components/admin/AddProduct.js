"use client"

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';
import { addProduct, uploadProductImage } from '@/services/product';
import { decryptData } from '../../secure/encrypt-decrypt';
import { getAllCategories } from '@/services/category';



export default function AddProduct() {

    const [loader, setLoader] = useState(false)
    const [token, setToken] = useState('')
    const [categories, setCategories] = useState([])
    const router = useRouter();
    const [fetchCategories, setFetchCategories] = useState(false)

    useEffect(() => {
        getAllCategories().then(res => {
            setCategories(res)
            setProductFields({ ...productFields, category: res[0]?.name })
        })
        async function loadData() {
            const user = await decryptData('user')
            if(user!=null){
                if (user?.role !== 'ROLE_ADMIN') {
                    router.push('/')
                }
                setToken(user.accessToken)
            }
        }
        loadData();
    }, [router, fetchCategories])

    const [productFields, setProductFields] = useState({
        category: '',
        productName: '',
        description: '',
        price: '',
        quantity: '',
        fabric: '',
        mainImage: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        color: '',
        size: '',
        threadCount: '',
        isFeatured:false
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        let uploadedMain = await uploadImage(productFields.mainImage, 'mainImage')
        let uploaded1 = await uploadImage(productFields.image1, 'image1')
        let uploaded2 = await uploadImage(productFields.image2, 'image2')
        let uploaded3 = await uploadImage(productFields.image3, 'image3')
        let uploaded4 = await uploadImage(productFields.image4, 'image4')
        let uploaded5 = await uploadImage(productFields.image5, 'image5')
        if (uploadedMain != null && uploaded1 != null && uploaded2 != null && uploaded3 != null && uploaded4 != null && uploaded5 != null) {
            addProduct(productFields, uploadedMain, uploaded1, uploaded2, uploaded3, uploaded4, uploaded5, token).then(res => {
                toast.success('Product Added Successfully')
                setProductFields({
                    category: '',
                    productName: '',
                    description: '',
                    price: '',
                    quantity: '',
                    fabric: '',
                    mainImage: '',
                    image1: '',
                    image2: '',
                    image3: '',
                    image4: '',
                    image5: '',
                    color: '',
                    size: '',
                    threadCount: '',
                    isFeatured:false
                })
                setLoader(false)
                setFetchCategories(!fetchCategories)
            })
        } else {
            toast.error('Something went wrong')
            setLoader(false)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'price') {
            setProductFields({ ...productFields, [e.target.name]: parseFloat(e.target.value) })
        }
        else if (e.target.name === 'quantity' || e.target.name === 'threadCount') {
            setProductFields({ ...productFields, [e.target.name]: parseInt(e.target.value) })
        }
        else if (e.target.attributes[0].value === 'image/*') {
            setProductFields({ ...productFields, [e.target.name]: e.target.files[0] })
        }
        else {
            setProductFields({ ...productFields, [e.target.name]: e.target.value })
        }
    }

    const uploadImage = async (image, target) => {

        const formdata = new FormData()
        formdata.append("file", image)
        formdata.append("upload_preset", "ml_default")

        let image_url = await uploadProductImage(formdata)
        if (image_url?.data?.secure_url != null) {
            setProductFields({ ...productFields, [target]: image_url.data.secure_url })
            return image_url.data.secure_url;
        }
        return null;
    }

    return (
        <div className='w-full  p-4 min-h-screen  bg-gray-50 flex flex-col '>
            <div className='w-full h-20 my-2 text-center'>
                <h1 className='text-2xl py-2 dark:text-black '>Add Product</h1>
            </div>
            {
                loader ? (
                    <div className='w-full  flex-col h-96 flex items-center justify-center '>
                        <TailSpin
                            height="50"
                            width="50"
                            color="orange"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        <p className='text-sm mt-2 font-semibold text-orange-500'>Adding Product Hold Tight ....</p>
                    </div>
                ) : (

                    <div className='w-full h-full flex items-start justify-center'>
                        <form onSubmit={handleSubmit} className="w-full max-w-lg  py-2 flex-col flex space-y-6">
                            <div className="flex flex-col w-full max-w-full">
                                <label className="label mb-2">
                                    <span className="label-text">Choose Category</span>
                                </label>
                                <select className="rounded-xl p-2 border-black border-2 w-full text-center" name='category' onChange={handleChange} required>
                                    <option disabled defaultValue="">Pick  one category </option>
                                    {
                                        categories?.map((item) => {
                                            return (
                                                <option key={item.id} value={item.name}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label >
                                <input type="text" name='productName' value={productFields.productName} onChange={handleChange} placeholder="Name" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div >
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input type="number" name='price' value={productFields.price} onChange={handleChange} placeholder="Price" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input type="number" name='quantity' value={productFields.quantity} onChange={handleChange} placeholder="Quantity" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <textarea name='description' value={productFields.description} onChange={handleChange} placeholder="Description" className="p-2 border-black border-2 w-full text-center" required></textarea>
                            </div>
                            <div className="form-control py-2">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-5">Featured Product</span>
                                    <input type="checkbox" onChange={()=>setProductFields({...productFields,isFeatured:!productFields.isFeatured})} className="checkbox dark:border-black" />
                                </label>
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Fabric</span>
                                </label >
                                <input type="text" name='fabric' value={productFields.fabric} onChange={handleChange} placeholder="Fabric" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div >
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Color</span>
                                </label >
                                <input type="text" name='color' value={productFields.color} onChange={handleChange} placeholder="Color" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div >
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Size</span>
                                </label >
                                <input type="text" name='size' value={productFields.size} onChange={handleChange} placeholder="Size" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div >
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Thread Count</span>
                                </label >
                                <input type="number" name='threadCount' value={productFields.threadCount} onChange={handleChange} placeholder="Thred Count" className="rounded-xl p-2 border-black border-2 w-full text-center" required />
                            </div >
                            <div className="form-control w-full">
                                <label className="label mr-5">
                                    <span className="label-text">Add product Main Image</span>
                                </label>
                                <input name='mainImage' accept="image/*" max="1000000" type="file" className="file-input file-input-bordered m-auto" onChange={handleChange} required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mr-5">
                                    <span className="label-text">Add product Image Other</span>
                                </label>
                                <input name='image1' accept="image/*" max="1000000" type="file" className="file-input file-input-bordered m-auto" onChange={handleChange} required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mr-5">
                                    <span className="label-text">Add product Image Other</span>
                                </label>
                                <input name='image2' accept="image/*" max="1000000" type="file" className="file-input file-input-bordered m-auto" onChange={handleChange} required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mr-5">
                                    <span className="label-text">Add product Image Other</span>
                                </label>
                                <input name='image3' accept="image/*" max="1000000" type="file" className="file-input file-input-bordered m-auto" onChange={handleChange} required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mr-5">
                                    <span className="label-text">Add product Image Other</span>
                                </label>
                                <input name='image4' accept="image/*" max="1000000" type="file" className="file-input file-input-bordered m-auto" onChange={handleChange} required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label mr-5">
                                    <span className="label-text">Add product Image Other</span>
                                </label>
                                <input name='image5' accept="image/*" max="1000000" type="file" className="file-input file-input-bordered m-auto" onChange={handleChange} required />
                            </div>

                            <button className='m-auto w-2/5 p-2 bg-purple-500 text-white rounded-2xl hover:bg-purple-600' type='submit'>Add Product</button>

                        </form >
                    </div >

                )
            }

            <ToastContainer />
        </div >
    )
}