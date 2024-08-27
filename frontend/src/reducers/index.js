import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishReducer from "./wishReducer";


const rootReducer = combineReducers({
  cart: cartReducer,
  wish: wishReducer
});

export const getCartItems = state => {
  let cartItems = state.cart.cartItems;
  return cartItems;
};

export const getWishItems = state => {
  let wishItems = state.wish.wishItems;
  return wishItems;
};

export const getWishToCartItem = state => {
  let wishToCartItem = state.wish.wishToCartItem;
  return wishToCartItem;
};

export const getCartCosts = state => {
  let subtotalCost = 0;
  let totalCost = 0;
  let shippingFee = 10.00;
  let cartCosts = {
    subtotal: 0,
    total: 0
  };
  if (state.cart.cartItems.length > 0) {
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


export default rootReducer