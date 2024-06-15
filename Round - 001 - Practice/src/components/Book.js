import React, {useState} from 'react';
import { BookData } from '../constant';
const Book = () => {
    const [isVisible, setIsVisible] = useState(true)
    function handleClick(){
        setIsVisible(!isVisible)
    }
    return (
        <div className='h-80 w-fit p-5 relative'>
            <img className='h-full' src={BookData && BookData[0].bookImage} alt='Book img'/>
            {
                isVisible ? 
                (<div className='h-[60px] w-[60px] rounded-full bg-green-600 flex justify-center items-center absolute left-44 top-64 z-50 cursor-pointer' onClick={() => handleClick()}>
                    <p className='text-xl text-white relative'>▼</p>
                </div>) : 
                (<div className='h-fit w-48 py-2 bg-white border-2 border-black flex flex-col gap-1 absolute left-32 top-60 z-50 rounded-xl overflow-hidden' onClick={() => handleClick()}>
                    <p className='text-center'>Move to...</p>
                    <p className='text-center'>✔️ Currently Reading</p>
                    <button className='hover:bg-blue-400'>Want to Read</button>
                    <button className='hover:bg-blue-400'>Read</button>
                    <button className='hover:bg-blue-400'>None</button>
                </div>)
            }
        </div>
    )
}
export default Book;
