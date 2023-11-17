import React, { useState } from 'react'
import '../../styles/PersonalInformation.css'
import { Pencil, X } from 'lucide-react'

const PersonalInformation = () => {

  const [data, setData] = useState({
    firstName: 'Chayan',
    lastName: 'Gupta'
  })

  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
    reNewPassword: ''
  })

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleChangePassword = (e) => {
    setChangePassword({ ...changePassword, [e.target.name]: e.target.value })
  }

  return (
    <div className='personal-information-main-div'>
      <div className='div'>
        <h4>Personal Information</h4>
        <div className="coolinput">
          <label htmlFor="input" className="text">First Name</label>
          <input type="text" className='input' name='firstName' value={data.firstName} onChange={handleInputChange} />
        </div>
        <Pencil size={20} className='lucide-icon' />
        <X size={20} className='lucide-icon' />
        <div className="coolinput">
          <label htmlFor="input" className="text">Last Name</label>
          <input type="text" name='lastName' className='input' value={data.lastName} onChange={handleInputChange} />
        </div>
        <Pencil size={20} className='lucide-icon' />
        <X size={20} className='lucide-icon' />
      </div>
      <div className='div'>
        <h4>Change Password</h4>
        <div className="coolinput">
          <label htmlFor="input" className="text">Current Password</label>
          <input type="password" className='input' name='currentPassword' value={changePassword.currentPassword} onChange={handleChangePassword} />
        </div>
        <div className="coolinput">
          <label htmlFor="input" className="text">New Password</label>
          <input type="password" className='input' name='newPassword' value={changePassword.newPassword} onChange={handleChangePassword} />
        </div>
        <div className="coolinput">
          <label htmlFor="input" className="text">Re Enter New Password</label>
          <input type="password" className='input' name='reNewPassword' value={changePassword.reNewPassword} onChange={handleChangePassword} />
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation