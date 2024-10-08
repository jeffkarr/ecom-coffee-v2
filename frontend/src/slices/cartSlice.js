import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
}  

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    coffeeCartAdd: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    dealCartAdd: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    teaCartAdd: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    accessoryCartAdd: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    removeCartItem: (state, action) => {
      let tempCart = state.cartItems.filter(cartTrxn => cartTrxn.cartId !== parseInt(action.payload));
      if(tempCart === null) {
        tempCart = [];
      }
      localStorage.setItem('cart', JSON.stringify(tempCart))
      return {
        cartItems: tempCart
      }
    },
    wishCartAdd: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    cartCheckout: (state, action) => {
      let tempCart = [];
      localStorage.setItem('cart', JSON.stringify(tempCart))
      return {
        cartItems: tempCart
      }
    },
  }
})

export const { coffeeCartAdd, dealCartAdd, teaCartAdd, accessoryCartAdd, removeCartItem, wishCartAdd, cartCheckout } = cartSlice.actions

export default cartSlice.reducer

export const getCartCosts = state => {
  let subtotalCost = 0;
  let totalCost = 0;
  let shippingFee = 10.00;
  let cartCosts = {
    subtotal: 0,
    total: 0
  };
  if(state.cart.cartItems.length > 0) {
    state.cart.cartItems.forEach(trxn => {
      let trxnCost = trxn.quantity * trxn.price;
      subtotalCost += trxnCost;
    });
    totalCost = subtotalCost + shippingFee;
    cartCosts = {
      subtotal: subtotalCost,
      total: totalCost
    }
  }
  return cartCosts;
};