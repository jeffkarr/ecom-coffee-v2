import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    cart: rootReducer     
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