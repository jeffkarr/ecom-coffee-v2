import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
}

console.log(`--- initialState ---`);
console.dir(initialState, { depth: null, colors: true });

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    coffeeCartAdd: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    }
  }
})

export const { coffeeCartAdd } = cartSlice.actions

export default cartSlice.reducer
