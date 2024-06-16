import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const alreadyReadSlice = createSlice({
    name: "alreadyRead",
    initialState: {
        items: [], 
    },
    reducers: {
        setItemsOfAlreadyRead:(state, action) => {
            let isAlreadyAdded = state.items.filter(data => data.bookIsbn == action.payload.bookIsbn)
            if(isAlreadyAdded.length == 0)
                state.items.push(action.payload)
        },
        deleteItemsOfAlreadyRead: (state, action) => {
            state.items = state.items.filter(data => data.bookIsbn != action.payload.bookIsbn)
        }
    }
})
export const {setItemsOfAlreadyRead, deleteItemsOfAlreadyRead} = alreadyReadSlice.actions;
export default alreadyReadSlice.reducer;