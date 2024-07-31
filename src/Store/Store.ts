import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Features/Book/BookSlice";


const store=configureStore(
    {
        reducer:{
            booksR:bookReducer
        }
    }
)

export default store