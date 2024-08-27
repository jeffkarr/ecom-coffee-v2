import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishItems: JSON.parse(localStorage.getItem('wish')) ? JSON.parse(localStorage.getItem('wish')) : []
}

const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    coffeeWishAdd: (state, action) => {
      state.wishItems.push(action.payload);
      localStorage.setItem('wish', JSON.stringify(state.wishItems))
    },
    dealWishAdd: (state, action) => {
      state.wishItems.push(action.payload);
      localStorage.setItem('wish', JSON.stringify(state.wishItems))
    },
    teaWishAdd: (state, action) => {
      state.wishItems.push(action.payload);
      localStorage.setItem('wish', JSON.stringify(state.wishItems))
    },
    accessoryWishAdd: (state, action) => {
      state.wishItems.push(action.payload);
      localStorage.setItem('wish', JSON.stringify(state.wishItems))
    },
    removeWishItem: (state, action) => {
      let tempCart = state.wishItems.filter(wishTrxn => wishTrxn.wishId !== parseInt(action.payload));
      if (tempCart === null) {
        tempCart = [];
      }
      localStorage.setItem('wish', JSON.stringify(tempCart))
      return {
        wishItems: tempCart
      }
    },
    wishCheckout: (state, action) => {
      let tempCart = [];
      localStorage.setItem('wish', JSON.stringify(tempCart))
      return {
        wishItems: tempCart
      }
    },
  }
})

export const { coffeeWishAdd, dealWishAdd, teaWishAdd, accessoryWishAdd, removeWishItem, wishCheckout } = wishSlice.actions

export default wishSlice.reducer

export const getWishToCartItem = state => {
  let wishToCartItem = state.wish.wishToCartItem;
  return wishToCartItem;
};
