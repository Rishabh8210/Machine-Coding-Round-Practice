import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemsOfCurrentlyRead, setItemsOfCurrentlyRead } from '../utils/currentlyReadingSlice';
import { deleteItemsOfAlreadyRead, setItemsOfAlreadyRead } from '../utils/alreadyReadSlice';
import { deleteItemsOfWantToRead, setItemsOfWantToRead } from '../utils/wantToReadSlice';
import { deleteItems } from '../utils/bookListSlice';
const Book = ({BookData, type}) => {
    const [isVisible, setIsVisible] = useState(true)
    const dispatch = useDispatch()
    function handleClick(){
        setIsVisible(!isVisible)
    }
    function chooseOption(data){
        setIsVisible(!isVisible)
        if(data == 1){
            dispatch(setItemsOfCurrentlyRead(BookData))
            dispatch(deleteItemsOfAlreadyRead(BookData))
            dispatch(deleteItemsOfWantToRead(BookData))
        }
        else if(data == 2){
            dispatch(setItemsOfWantToRead(BookData))
            dispatch(deleteItemsOfCurrentlyRead(BookData))
            dispatch(deleteItemsOfAlreadyRead(BookData))
        }
        else if(data == 3){
            dispatch(setItemsOfAlreadyRead(BookData))
            dispatch(deleteItemsOfCurrentlyRead(BookData))
            dispatch(deleteItemsOfWantToRead(BookData))
        }
        dispatch(deleteItems(BookData))
    }
    return (
        <div className='h-80 w-fit p-5 relative'>
            <img className='h-full' src={BookData && BookData?.bookImage} alt='Book img'/>
            {
                isVisible ? 
                (<div className='h-[60px] w-[60px] rounded-full bg-green-600 flex justify-center items-center absolute left-44 top-64 z-50 cursor-pointer' onClick={() => handleClick()}>
                    <p className='text-xl text-white relative'>▼</p>
                </div>) : 
                (<div className='h-fit w-48 py-2 bg-white border-2 border-black flex flex-col gap-1 absolute left-32 top-60 z-50 rounded-xl overflow-hidden'>
                    <p className='text-center opacity-80'>Move to...</p>
                    {
                        (type == 'current') ? <button className='bg-green-400 cursor-not-allowed'>Currently Reading</button> : 
                        <button className='hover:bg-blue-400' onClick={() => chooseOption(1)}>Currently Reading</button>
                    }
                    {
                        (type == 'wanted') ? <button className='bg-green-400 cursor-not-allowed'>Want to Read</button> : 
                        <button className='hover:bg-blue-400' onClick={() => chooseOption(2)}>Want to Read</button>
                    }
                    {
                        (type == 'already') ? <button className='bg-green-400 cursor-not-allowed'>Read</button> : 
                        <button className='hover:bg-blue-400' onClick={() => chooseOption(3)}>Read</button>
                    }
                    <button className='hover:bg-blue-400' onClick={() => handleClick()}>None</button>
                </div>)
            }
        </div>
    )
}
export default Book;
