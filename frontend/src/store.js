import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishSlice';

const appEnvironment = import.meta.env.VITE_NODE_ENV;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer     
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: appEnvironment === 'production' ? false : true
});

store.subscribe(() => {
  const state = store.getState();
  
  const persist = {
    cart: state.cart,
    wish: state.wish
  };

  localStorage.setItem('state', JSON.stringify(persist));

});

export default store;