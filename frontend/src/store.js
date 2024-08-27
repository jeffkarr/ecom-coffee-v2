import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer     
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
});

store.subscribe(() => {
  const state = store.getState();

  console.log('---- store.subscribe state ---');
  console.dir(state, {depth:null, colors:true});
  
  const persist = {
    cart: state.cart,
    wish: state.wish
  };

  localStorage.setItem('state', JSON.stringify(persist));

});

export default store;