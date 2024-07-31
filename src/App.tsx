import { useState } from "react"
import AddBook from "./Component/AddBook"
import BookList from "./Component/BookList"


function App() {
type TBook={
    title: string;
    author: string;
    quantity: string;
    price: string;}
  const [editBook, setEditBook]=useState<TBook|null>(null)

  const handleEditBook=(book: TBook)=>{

    setEditBook(book)
  }
  const handleCancel=()=>{
    setEditBook(null)
  }
  return (
    <>
    <AddBook editBook={editBook} onCancelEdit={handleCancel}/>
    <BookList onHandleEditBook={handleEditBook}/>   
    </>
  )
}

export default App
