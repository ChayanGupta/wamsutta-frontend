import React, { useEffect, useState } from 'react'
import '../../styles/MyAccount.css'
import { getProfileDetails } from '@/services/user'
import { useSelector } from 'react-redux'
import { decryptData, encryptData } from '../../secure/encrypt-decrypt'
import { toast } from 'react-hot-toast'

const MyAccount = ({ setShowComponent }) => {

    const user = useSelector(state => state.userReducer)

    const [profileDetails, setProfileDetails] = useState({
        firstName: user?.details.firstName,
        lastName: user?.details.lastName,
        email: user?.details.email,
        address: user?.address
    })

    useEffect(() => {
        decryptData('user').then(data => {
            getProfileDetails(data.email).then(res => {
                data.lastName = res.data.lastName,
                    data.address = res.data.address
                encryptData('user', data)
                setProfileDetails({
                    firstName: user.details.firstName,
                    lastName: user.details.lastName,
                    email: user.details.email,
                    address: user.address
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
        })
    }, [user])

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
                        personalInformation: false,
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
                                <button type='button' className='edit-address-btn'>Edit</button>
                                <button type='button' className='edit-address-btn'>Delete</button>
                            </div>
                        </>
                            : <div>You have no saved address.</div>}

                    </div>
                    <div className='right-address'>
                        <h4>{profileDetails.address[0]?.name}</h4>
                        <h5>{profileDetails.address[0]?.addressLine1}</h5>
                        <h5>{profileDetails.address[0]?.addressLine2}</h5>
                        <h5>{profileDetails.address[0]?.city}, {profileDetails.address[0]?.state} - {profileDetails.address[0]?.zip}</h5>
                        <h5>{profileDetails.address[0]?.country}</h5>
                        {profileDetails.address.length > 1 ? <div className='edit-delete-address-btn'>
                            <button type='button' className='edit-address-btn'>Edit</button>
                            <button type='button' className='edit-address-btn'>Delete</button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount