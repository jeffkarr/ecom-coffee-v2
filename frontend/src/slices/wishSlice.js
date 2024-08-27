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
    removeWishItem: (state, action) => {
      let tempCart = state.wishItems.filter(wishTrxn => wishTrxn.wishId !== parseInt(action.payload));
      if (tempCart === null) {
        tempCart = [];
      }
      localStorage.setItem('wish', JSON.stringify(tempCart))
      return {
        wishItems: tempCart
      }
    }
  }
})

export const { coffeeWishAdd, removeWishItem } = wishSlice.actions

export default wishSlice.reducer

export const getWishToCartItem = state => {
  let wishToCartItem = state.wish.wishToCartItem;
  return wishToCartItem;
};
