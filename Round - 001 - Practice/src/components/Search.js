import React, { useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState('');
    function handleChange(e)
    {
        setSearchText(e.target.value);
    }
    return (
        <div className='h-fit w-full px-16 py-3 flex items-center gap-10'>
            <input className='h-12 w-96 border-2 border-gray-600 rounded-md px-2 text-2xl' type='text' placeholder='Search here...' value={searchText} onChange={(event) => handleChange(event)}/>
            <button className='h-12 rounded-md w-32 text-2xl bg-blue-400'>Search</button>
        </div>
    )
}

export default Search