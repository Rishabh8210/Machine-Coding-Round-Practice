import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const currentlyReadingSlice = createSlice({
    name: "currentlyReading",
    initialState: {
        items: [], 
    },
    reducers: {
        setItemsOfCurrentlyRead:(state, action) => {
            let isAlreadyAdded = state.items.filter(data => data.bookIsbn == action.payload.bookIsbn)
            if(isAlreadyAdded.length == 0)
                state.items.push(action.payload)
        },
        deleteItemsOfCurrentlyRead: (state, action) => {
            state.items = state.items.filter(data => data.bookIsbn != action.payload.bookIsbn)
        }
    }
})
export const {setItemsOfCurrentlyRead, deleteItemsOfCurrentlyRead} = currentlyReadingSlice.actions;
export default currentlyReadingSlice.reducer;