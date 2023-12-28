import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addItem: (state, action) => {
            const i = state.items.findIndex(e => e.id === action.payload.id);
            if (i > -1) {
              /* vendors contains the element we're looking for, at index "i" */
              state.items[i].quan +=1;
              state.quantity+=1;
              state.total+=  state.items[i].price
            }else{
                state.items.push({ ...action.payload , quan: 1})
                state.quantity+=1;
                state.total+=action.payload.price
            }
        },
        removeItem: (state, action) => {
            const i = state.items.findIndex((e) => e.id === action.payload);
            if (i > -1) {
                if (state.items[i].quan > 1) {
                    state.items[i].quan -= 1;
                    state.quantity -= 1;
                    state.total-=  state.items[i].price
                } else {
                    return {
                        ...state,
                        items: state.items.filter((item) => item.id !== action.payload),
                        quantity: state.quantity - 1,
                        total: state.total - state.items[i].price
                    };
                }
            }
            return state; // Return the original state if item not found
        }
    }
})

export const { addItem, removeItem} = CartSlice.actions;
export default CartSlice.reducer