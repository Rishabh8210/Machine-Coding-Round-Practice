import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const param = useLocation();
    return (
        <div className='h-16 w-full flex justify-around items-center bg-green-600'>
            <h1 className='text-3xl font-bold text-white'>Machine Coding Round Ques: Bibliophile</h1>
            {
                (param.pathname == '/') ? <Link to='/search'><p className='text-2xl text-white font-bold underline'>Search</p></Link> : <Link to='/'><p className='text-2xl font-bold text-white cursor-pointer underline'>Home</p></Link>
            }
        </div>
    )
}

export default Navbar;