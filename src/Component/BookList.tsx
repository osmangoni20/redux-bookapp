import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../Features/Book/BookSlice';

type TBook={
    id:number,
    title:string,
    author:string,
    quantity:number,
    price:number
}
const BookList = ({onHandleEditBook}) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const {books}=useSelector((state:any)=>state.booksR)
const dispatch=useDispatch()

    return (
        <div className=''>
            <h1>Book List</h1>

            {
                books&&books.length?<ul>
                    {
                        books.map((book:TBook)=>{
                            return(
                                <div className='flex'>
                                  <li key={book.id}>{book.title} - {book.author} - {book.quantity} - {book.price} Tk  
                                     <button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button>
                                     <button onClick={()=>onHandleEditBook(book)}>Edit</button>
                                     
                                     </li>
                                   
                                </div>
                            )
                        })
                    }
                </ul>:<div>
                    <h6>Book Not Found</h6>
                </div>
            }
        </div>
    );
};

export default BookList;