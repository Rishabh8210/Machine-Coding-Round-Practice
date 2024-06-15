import React, { useState } from 'react'
import Book from './Book'
import { useSelector } from 'react-redux'

const Home = () => {
    // const [allBooks, setAllBooks] = useState([]);
    const allBooks = useSelector(store => store.booklist.items)
    const currentlyReading = useSelector(store => store.currentlyReading.items)
    const alreadyRead = useSelector(store => store.alreadyRead.items)
    const wantToRead = useSelector(store => store.wantToRead.items)
    
    return (
    <div className='h-fit w-full px-16 flex flex-col gap-10'>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>All available books</h1>
            </div>
            <div className='h-fit w-full flex gap-10 flex-wrap'>
            {
                allBooks && allBooks.map(book => {
                    return <Book key={book.bookIsbn} BookData = {book} type = "allBook" />
                })
            }
            </div>
        </div>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>Currently Reading</h1>
            </div>
            <div className='h-fit w-full flex gap-10 flex-wrap'>
            {
                (currentlyReading && currentlyReading.length > 0) ? (currentlyReading.map(book => {
                    return <Book key={book.bookIsbn} BookData = {book} type = "current"/>
                })) : (<p className='text-2xl font-bold text-red-800'>No data found !</p>)
            }
            </div>
        </div>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>Want to Read</h1>
            </div>
            <div className='h-fit w-full flex gap-10 flex-wrap'>
            {
                (wantToRead && wantToRead.length > 0) ? (wantToRead.map(book => {
                    return <Book key={book.bookIsbn} BookData = {book} type = "wanted" />
                })) : (<p className='text-2xl font-bold text-red-800'>No data found !</p>)
            }
            </div>
        </div>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>Completed</h1>
            </div>
            <div className='h-fit w-full flex gap-10 flex-wrap'>
            {
                (alreadyRead && alreadyRead.length > 0) ? (alreadyRead.map(book => {
                    return <Book key={book.bookIsbn} BookData = {book} type = "already"/>
                })) : (<p className='text-2xl font-bold text-red-800'>No data found !</p>)
            }
            </div>
        </div>
    </div>
  )
}

export default Home;