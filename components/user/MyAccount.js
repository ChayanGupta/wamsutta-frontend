import React, { useEffect, useState } from 'react'
import '../../styles/MyAccount.css'
import { getProfileDetails } from '@/services/user'
import { useSelector } from 'react-redux'
import { decryptData, encryptData } from '../../secure/encrypt-decrypt'
import { toast } from 'react-hot-toast'
import { deleteAddress } from '@/services/address'
import { useRouter } from 'next/navigation'

const MyAccount = ({ setShowComponent }) => {

    const user = useSelector(state => state.userReducer)
    const router = useRouter()
    const [token, setToken] = useState('')

    useEffect(() => {
        async function loadData() {
            const user = await decryptData('user')
            if (user !== null) {
                if (user?.role !== 'ROLE_USER') {
                    router.push('/')
                }
                setToken(user.accessToken)
            }
        }
        loadData();
    }, [router])

    const [profileDetails, setProfileDetails] = useState({
        firstName: user?.details.firstName,
        lastName: user?.details.lastName,
        email: user?.details.email,
        address: user?.address
    })

    useEffect(() => {
        decryptData('user').then(data => {
            if (data !== null) {
                getProfileDetails(data.email).then(res => {
                    console.log(res)
                    data.lastName = res.lastName,
                        data.address = res.address
                    encryptData('user', data)
                    setProfileDetails({
                        firstName: res.firstName,
                        lastName: res.lastName,
                        email: res.email,
                        address: res.address
                    })
                }).catch(err => {
                    toast.error('Oops!! something went wrong, please refresh the page once again.', {
                        duration: 4000,
                        style: {
                            backgroundColor: 'rgb(162, 104, 255)',
                            color: '#ffffff',
                            letterSpacing: '0.2ch',
                            fontWeight: 'bold'
                        }
                    })
                })
            }
        })
    }, [user])

    const deleteAdd = (id) => {
        deleteAddress(id, token).then(() => {
            toast.success('Address Deleted Successfully')
            decryptData('user').then(data => {
                if (data != null) {
                    getProfileDetails(data.email).then(res => {
                        console.log(res)
                        data.lastName = res.lastName,
                            data.address = res.address
                        encryptData('user', data)
                        setProfileDetails({
                            firstName: res.firstName,
                            lastName: res.lastName,
                            email: res.email,
                            address: res.address
                        })
                    }).catch(err => {
                        toast.error('Oops!! something went wrong, please refresh the page once again.', {
                            duration: 4000,
                            style: {
                                backgroundColor: 'rgb(162, 104, 255)',
                                color: '#ffffff',
                                letterSpacing: '0.2ch',
                                fontWeight: 'bold'
                            }
                        })
                    })
                }
            })
        }).catch(() => {
            toast.error('Somethingwent wrong')
        })
    }

    return (
        <div className='my-account-main-div'>
            <h4 className='my-dashboard-title'>My Dashboard</h4>
            <div className='account-dashboard'>
                <div className='primary-information'>
                    <h4>Primary Information</h4>
                    <h5>Name - {profileDetails.firstName} {profileDetails.lastName}</h5>
                    <h5>Email - {profileDetails.email}</h5>
                </div>
                <div className='address-book-title'>
                    <h4>Address Book</h4>
                    <h4 className='manage-address-h4' onClick={() => setShowComponent({
                        myAccount: false,
                        addAddress: true,
                        myOrders: false
                    })}>Manage Addresses</h4>
                </div>
                <div className='address-book'>
                    <div className='left-address'>
                        {profileDetails.address.length > 0 ? <>
                            <h4>{profileDetails.address[0]?.name}</h4>
                            <h5>{profileDetails.address[0]?.addressLine1}</h5>
                            <h5>{profileDetails.address[0]?.addressLine2}</h5>
                            <h5>{profileDetails.address[0]?.city}, {profileDetails.address[0]?.state} - {profileDetails.address[0]?.zip}</h5>
                            <h5>{profileDetails.address[0]?.country}</h5>
                            <div className='edit-delete-address-btn'>
                                <button type='button' className='edit-address-btn' onClick={() => deleteAdd(profileDetails.address[0]?.id)}>Delete</button>
                            </div>
                        </>
                            : <div>You have no saved address.</div>}

                    </div>
                    <div className='right-address'>
                        <h4>{profileDetails.address[1]?.name}</h4>
                        <h5>{profileDetails.address[1]?.addressLine1}</h5>
                        <h5>{profileDetails.address[1]?.addressLine2}</h5>
                        <h5>{profileDetails.address[1]?.city}, {profileDetails.address[1]?.state} - {profileDetails.address[1]?.zip}</h5>
                        <h5>{profileDetails.address[1]?.country}</h5>
                        {profileDetails.address.length > 1 ? <div className='edit-delete-address-btn'>
                            <button type='button' className='edit-address-btn' onClick={() => deleteAdd(profileDetails.address[1]?.id)}>Delete</button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount