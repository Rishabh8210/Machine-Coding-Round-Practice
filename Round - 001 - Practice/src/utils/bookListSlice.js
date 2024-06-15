import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { BookData } from "../constant";
const bookListSlice = createSlice({
    name: "booklist",
    initialState: {
        items: BookData, 
    },
    reducers: {
        setItems:(state, action) => {
            console.log(action.payload)
        },
        deleteItems: (state, action) => {
            state.items = state.items.filter(data => data.bookIsbn != action.payload.bookIsbn)
        }
    }
})
export const {setItems, deleteItems} = bookListSlice.actions;
export default bookListSlice.reducer;