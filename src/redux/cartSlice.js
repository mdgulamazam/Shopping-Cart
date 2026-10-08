import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {

        // Add product to cart
        addToCart: (state, action) => {
            const existingProduct = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        // Increase quantity
        increaseQuantity: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }
        },

        // Decrease quantity
        decreaseQuantity: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        // Remove product
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;