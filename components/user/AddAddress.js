import React, { useState } from 'react'
import '../../styles/AddAddress.css'
import States from '../../States.json'
import Cities from '../../Cities.json'
import Zip from '../../Zip.json'
import { Toaster, toast } from 'react-hot-toast'

const AddAddress = () => {

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const [address, setAddress] = useState({
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    })

    const handleChangeInput = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }

    const handleCountryChange = (e) => {
        setAddress({ ...address, country: e.target.value })
        if (e.target.value !== "") {
            setStates(States.states)
        } else {
            setStates([])
        }
    }

    const handleStateChange = (e) => {
        setAddress({ ...address, state: e.target.value })
        if (e.target.value !== "") {
            setCities(Cities[e.target.value])
        } else {
            setCities([])
        }
    }

    const handleCityChange = (e) => {
        setAddress({ ...address, city: e.target.value, zip: Zip[e.target.value] })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (address.city === "" || address.state === "" || address.country === "") {
            toast.error('Please fill all the fields', {
                duration: 4000,
                style: {
                    backgroundColor: 'rgb(162, 104, 255)',
                    color: '#ffffff',
                    letterSpacing: '0.2ch',
                    fontWeight: 'bold'
                }
            })
        }else{
            // TODO : api call
        }
    }

    return (
        <div className='add-address-main-div'>
            <h3>Add New Address</h3>
            <form className='add-address-form' onSubmit={handleSubmit}>
                <Toaster position='bottom-center' />
                <input type="text" name='name' placeholder='Name' value={address.name} onChange={handleChangeInput} required />
                <input type="text" name='addressLine1' placeholder='Address Line 1' value={address.addressLine1} onChange={handleChangeInput} required />
                <input type="text" name='addressLine2' placeholder='Address Line 2' value={address.addressLine2} onChange={handleChangeInput} />
                <input type="number" name='zip' value={address.zip} placeholder='Zip' readOnly required />
                <select name='country' onChange={handleCountryChange}>
                    <option value="">Choose Country</option>
                    <option value="United States">United States</option>
                </select>
                <select name='state' onChange={handleStateChange}>
                    <option value="">Choose State</option>
                    {states.map((state, index) => {
                        return <option value={state} key={index}>{state}</option>
                    })}
                </select>
                <select name='city' onChange={handleCityChange}>
                    <option value="">Choose City</option>
                    {cities.map((city, index) => {
                        return <option value={city} key={index}>{city}</option>
                    })}
                </select>
                <button type='submit' className='add-address-btn'>Add Address</button>
            </form>
        </div>
    )
}

export default AddAddress