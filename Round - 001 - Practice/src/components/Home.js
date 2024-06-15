import React from 'react'
import Booklist from './Booklist'
const Home = () => {
    return (
    <div className='h-fit w-full px-16 flex flex-col gap-10'>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>All available books</h1>
            </div>
            <Booklist />
        </div>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>Currently Reading</h1>
            </div>
            <Booklist />
        </div>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>Want to Read</h1>
            </div>
            <Booklist />
        </div>
        <div className='h-fit'>
            <div className='h-fit border-b-2 py-3 border-slate-400'>
                <h1 className='text-3xl font-semibold '>Completed</h1>
            </div>
            <Booklist />
        </div>
    </div>
  )
}

export default Home;