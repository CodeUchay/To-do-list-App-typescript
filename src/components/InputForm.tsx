import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

//Define input parameters 
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const InputForm: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form action="" onSubmit={(e) => handleAdd(e)} className='flex gap-5 w-90 lg:w-[50%] justify-between items-center bg-gray-800 rounded-full p-3 shadow-l-gray-300'>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter Task...' className='bg-transparent w-[80%] lg:w-[90%] text-gray-300 focus:outline-none'/>
       <button  type='submit' ><AiOutlinePlus size={25} className='bg-gray-400 rounded-full hover:bg-white hover:scale-105 duration-100 cursor-pointer'/>
       </button></form>
  )
};

export default InputForm;