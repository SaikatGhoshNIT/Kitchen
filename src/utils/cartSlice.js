import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers: {
        addItem : (state, action) =>{ //!here addItem is the action and the callback function as it's value is a reducer function
            //mutating our state here or we can say we are directly modifying our state here.
            //! in Vannila Redux state is immutable like React we can't mutate state directly, but now Redux toolkit use "immer js" which is also a libary, which help us to work with immutable state in more conveninent way.
            state.items.push(action.payload);
            console.log(action.payload);
        },
        removeItem : (state) =>{
            state.items.shift()
        },
        clearCart : (state) =>{
            //state.items.length = 0;
            state.items = []
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;