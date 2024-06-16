import React, { useState } from 'react'
import Book from './Book'
import { BookData } from '../constant';
const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [allBooks, setAllBooks] = useState(BookData);
    const [filteredBooks, setFilterBooks] = useState([])
    function handleChange(e)
    {
        setSearchText(e.target.value);
        const textData = e.target.value
        const filter = allBooks.filter((data) => data.title.toLowerCase().includes(textData.toLowerCase()))
        setFilterBooks(filter)
    }
    return (
        <div className='h-fil w-full px-16 py-10 flex flex-col gap-10'>
            <div className='h-fit w-full flex items-center gap-10'>
                <p className='text-4xl font-semibold '>Search Book : </p>
                <input className='h-12 w-96 border-2 border-gray-600 rounded-md px-2 text-2xl' type='text' placeholder='Search here...' value={searchText} onChange={(event) => handleChange(event)}/>
                <button className='h-12 rounded-md w-32 text-2xl bg-blue-400 font-semibold hover:text-white'>Search</button>
            </div>
            <div className='flex justify-center py-2 flex-wrap'>
                <p className='text-2xl font-semibold'>Search Result : </p>
                <div className='h-fit w-full flex flex-wrap'>
                    {
                        filteredBooks && filteredBooks.map((data) => <Book key = {data.bookIsbn} BookData={data}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Search