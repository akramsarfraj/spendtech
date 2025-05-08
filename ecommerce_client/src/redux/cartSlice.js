import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
        total: 0
    },
    reducers: {
        add: (state, action) => {
            const exist = state.item.find((e) => e.id === action.payload.id)
            if (exist) {
                
               state.item = state.item.map((e) => {
                    if (e.id === action.payload.id) {
                        return { ...e, quantity: e.quantity + 1 }
                    } else {
                        return e
                    }
                })
            } else {
                state.item = [...state.item, { ...action.payload, quantity: 1 }]
            }

            state.total = state.total + action.payload.price
        },

        remove: (state, action) => {
            const exist = state.item.find((e) => e.id === action.payload.id)

            if (exist.quantity === 1) {
             
                state.item = state.item.filter((e) => e.id !== action.payload.id)


            } else {
                state.item = state.item.map((e) => {
                    if (e.id === action.payload.id) {
                        return { ...e, quantity: e.quantity - 1 }
                    } else {
                        return e
                    }
                })
            }

            state.total = state.total - action.payload.price
        }


    }
}
)

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;