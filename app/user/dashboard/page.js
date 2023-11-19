"use client"
import LeftNavigation from '@/user/LeftNavigation'
import MyAccount from '@/user/MyAccount'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/navigation'
import '../../../styles/UserDashboard.css'
import AddAddress from '@/user/AddAddress'
import MyOrders from '@/user/MyOrders'
import { Toaster } from 'react-hot-toast'
import { decryptData } from '../../../secure/encrypt-decrypt'

const Page = () => {

    const user = useSelector(state => state.userReducer)
    const router = useRouter()
    const [showComponent, setShowComponent] = useState({
        myAccount:true,
        addAddress:false,
        myOrders:false
    })

    useEffect(() => {
        decryptData('user').then(data=>{
            if(data!==null){
                if(!data.isLoggedIn){
                    router.push('/login')
                }
            }
        })
    }, [user])

    return (
        <div className='user-dashboard'>
            <Toaster/>
            <LeftNavigation setShowComponent={setShowComponent}/>
            {showComponent.myAccount && <MyAccount setShowComponent={setShowComponent} />}
            {showComponent.addAddress && <AddAddress/>}
            {showComponent.myOrders && <MyOrders/>}
        </div>
    )
}

export default Page