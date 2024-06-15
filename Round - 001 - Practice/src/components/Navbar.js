import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='h-16 w-full flex justify-around items-center bg-green-600'>
            <h1 className='text-3xl font-bold text-white'>Machine Coding Round Ques: Bibliophile</h1>
            {/* <Link to='/search'><p>Search</p></Link> */}
            <p className='text-2xl font-bold text-white cursor-pointer underline' >Search</p>
        </div>
    )
}

export default Navbar;