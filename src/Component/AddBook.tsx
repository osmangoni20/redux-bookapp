import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../Features/Book/BookSlice';
import { nanoid } from 'nanoid'

// type TBook={
//     title: string;
//     author: string;
//     quantity: string;
//     price: string;}
const AddBook = ({onCancelEdit, editBook}) => {
    const dispatch=useDispatch()
    const [book, setBook]=useState({
        title:'',
        author:'',
        quantity:'',
        price:''
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    useEffect(() => {
        setBook(editBook)
    }, [editBook])
    const HandleInputFiled=(e:any)=>{
        const {name,value}=e.target
       setBook(prev=>({...prev, [name]:value}))
    }
    const HandleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        if(editBook){
           dispatch(updateBook(book))
           onCancelEdit()
        }
        else{
            dispatch(addBook({...book, id:nanoid()}))
        }
        setBook({
            title:'',
            author:'',
            quantity:'',
            price:''
        })
    }
    return (
        <form onSubmit={HandleSubmit}>
        
        <input
           type='text'
           name='title'
           placeholder='Title'
           value={book?.title}
           required
           onChange={(e)=>HandleInputFiled(e)} 
        />
         <input
           type='text'
           name='author'
           placeholder='Author'
           value={book?.author}
           required
           onChange={(e)=>HandleInputFiled(e)} 
        />
         <input
           type='number'
           name='quantity'
           placeholder='Quantity'
           value={book?.quantity}
           required
           onChange={(e)=>HandleInputFiled(e)} 
        />
         <input
           type='number'
           name='price'
           placeholder='Price'
           value={book?.price}
           required
           onChange={(e)=>HandleInputFiled(e)} 
        />
        <button type='submit'>{editBook?"Update Book":"Add Book"}</button>
        {editBook&&<button onClick={onCancelEdit} type='submit'>Cancel Update</button>}
        </form>
    );
};

export default AddBook;