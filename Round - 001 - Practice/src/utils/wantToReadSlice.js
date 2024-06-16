import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const wantToReadSlice = createSlice({
    name: "wantToRead",
    initialState: {
        items: [], 
    },
    reducers: {
        setItemsOfWantToRead:(state, action) => {
            let isAlreadyAdded = state.items.filter(data => data.bookIsbn == action.payload.bookIsbn)
            if(isAlreadyAdded.length == 0)
                state.items.push(action.payload)
        },
        deleteItemsOfWantToRead: (state, action) => {
            state.items = state.items.filter(data => data.bookIsbn != action.payload.bookIsbn)
        }
    }
})
export const {setItemsOfWantToRead, deleteItemsOfWantToRead} = wantToReadSlice.actions;
export default wantToReadSlice.reducer;