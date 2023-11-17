import React from 'react'
import '../../styles/LeftNavigation.css'

const LeftNavigation = ({ setShowComponent }) => {

  return (
    <div className='left-navigation-main-div'>
      <h3 onClick={() => setShowComponent({
        myAccount: true,
        addAddress: false,
        personalInformation: false,
        myOrders: false
      })}>My Account</h3>
      <h3 onClick={() => setShowComponent({
        myAccount: false,
        addAddress: false,
        personalInformation: false,
        myOrders: true
      })}>Orders</h3>
      <h3 onClick={() => setShowComponent({
        myAccount: false,
        addAddress: true,
        personalInformation: false,
        myOrders: false
      })}>Address</h3>
      <h3 onClick={() => setShowComponent({
        myAccount: false,
        addAddress: false,
        personalInformation: true,
        myOrders: false
      })}>Personal Information</h3>
    </div>
  )
}

export default LeftNavigation