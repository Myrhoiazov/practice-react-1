// import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.constants"
import { addToCart, deleteCart } from './cart-action';
import { createReducer } from '@reduxjs/toolkit';

export const cartReducer = createReducer([], {
  [addToCart]: (state, {payload}) => [...state, payload],
  [deleteCart]: (state, {payload}) => state.filter(item => item.id !== payload)
})

// const cartReducer = (state = [], { payload }) => {
//   switch (type) {
//     case (ADD_TO_CART):
//       return [...state, payload];
//     case (REMOVE_FROM_CART):
//       return state.filter(item => item.id !== payload)
//     default:
//       return state;
//   }
// }

export default cartReducer;
