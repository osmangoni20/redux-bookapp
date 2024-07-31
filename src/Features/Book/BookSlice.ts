import { createSlice } from "@reduxjs/toolkit"


const initialState={
    books:[
        {id:1, title:"English-1", author:"Rafiqul Islam",
        quantity:12,price:232
        },
        {id:2, title:"English-2", author:"Tanbir Islam",
            quantity:5,price:765
        },
    ]
}

export const bookSlice=createSlice({
    name:'books',
    initialState,
    reducers:{
        deleteBook:(state,action)=>{
            const id=action.payload
            state.books=state.books.filter(book=>book.id!==id)
        },
        addBook:(state,action)=>{
            const book=action.payload;
            state.books.push(book)
        },
        updateBook:(state,action)=>{
            const{id, title, author, quantity,price}=action.payload
            const existBook=state.books.find(book=>book.id===id)
            console.log(action.payload)
            if(existBook){
                existBook.title=title
                existBook.author=author
                existBook.quantity=quantity
                existBook.price=price

            }
        }
    }
})

export const {deleteBook, addBook,updateBook}= bookSlice.actions
export default bookSlice.reducer;