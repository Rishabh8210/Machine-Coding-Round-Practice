import React from 'react';
import Book from './Book'
const Booklist = () => {
    return (
        <div className='h-fit w-full flex gap-10 flex-wrap'>
            <Book />
            <Book />
        </div>
    )
}
export default Booklist;