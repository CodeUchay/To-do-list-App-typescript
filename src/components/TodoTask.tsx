import React from 'react';
import {Todo} from '../models/model';
import {MdDone, MdOutlineDeleteOutline} from 'react-icons/md';
import {AiFillEdit} from 'react-icons/ai';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoTask = ({todo, todos, setTodos}: Props) => {
  return (
    <form action="" className='flex m-4 p-3 justify-between item-center bg-gray-600 w-80 lg:w-[60%]'>
        <span className=''>{todo.todo}</span>
        <div className='flex justify-center items-center gap-4 '>
            <AiFillEdit/>
            <MdDone/>
            <MdOutlineDeleteOutline/>
        </div>
    </form>
  )
}
