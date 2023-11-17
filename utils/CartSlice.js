import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  wishlist: []
}

export const Cart = createSlice({
  name: 'CartData',
  initialState,
  reducers: {
    addCartData: (state, action) => {
      if (state.cartItems.some(item => item.id === action.payload.id)) {
        state.cartItems.forEach(item => {
          if (item.id === action.payload.id) {
            item.itemQuantity += 1;
          }
        })
      } else {
        state.cartItems.push(action.payload)
      }
    },
    removeCartData: (state, action) => {
      state.cartItems.forEach(item => {
        if (item.id === action.payload.id) {
          if (item.itemQuantity === 1) {
            let cart = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartItems = cart;
          } else {
            item.itemQuantity -= 1;
          }
        }
      })
    },
    removeFullCartData: (state, action) => {
      let cart = state.cartItems.filter(item => item.id !== action.payload.id);
      state.cartItems = cart;
    },
    addWishlistData: (state, action) => {
      if (state.wishlist.some(item => item.id === action.payload.id)) {
        state.wishlist.forEach(item => {
          if (item.id === action.payload.id) {
            item.itemQuantity += 1;
          }
        })
      } else {
        state.wishlist.push(action.payload)
      }
    },
    removeWishlistData: (state, action) => {
      let wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      state.wishlist = wishlist;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCartData, removeCartData, addWishlistData, removeWishlistData, openCloseCartPage, removeFullCartData } = Cart.actions

export const CartReducer = Cart.reducer