import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const alreadyReadSlice = createSlice({
    name: "alreadyRead",
    initialState: {
        items: [], 
    },
    reducers: {
        setItemsOfAlreadyRead:(state, action) => {
            state.items.push(action.payload)
        },
        deleteItemsOfAlreadyRead: (state, action) => {
            state.items = state.items.filter(data => data.bookIsbn != action.payload.bookIsbn)
        }
    }
})
export const {setItemsOfAlreadyRead, deleteItemsOfAlreadyRead} = alreadyReadSlice.actions;
export default alreadyReadSlice.reducer;