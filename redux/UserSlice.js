import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    token: '',
    details: {
        firstName: '',
        lastName: '',
        email: ''
    },
    address: [],
    orders: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { accessToken, firstName, email } = { ...action.payload }
            state.isLoggedIn = true
            state.token = accessToken
            state.details.firstName = firstName
            state.details.email = email
            return state
        },
        logout: () => {
            return initialState
        },
        setProfile: (state, action) => {
            const {address, lastName} = {...action.payload}
            state.address = address
            state.details.lastName = lastName
            return state
        }
    },
})

export const { login, logout, setProfile } = userSlice.actions

export default userSlice.reducer