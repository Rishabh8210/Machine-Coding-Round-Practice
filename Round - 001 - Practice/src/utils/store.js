import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import bookListSlice from "./bookListSlice";
import currentlyReadingSlice from "./currentlyReadingSlice";
import wantToReadSlice from "./wantToReadSlice";
import alreadyReadSlice from "./alreadyReadSlice";
const store = configureStore({
    reducer: {
        booklist: bookListSlice,
        currentlyReading: currentlyReadingSlice,
        wantToRead: wantToReadSlice,
        alreadyRead: alreadyReadSlice
    }
})
export default store;