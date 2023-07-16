import React from 'react'
import { Todo } from '../models/model'
import { TodoTask } from './TodoTask';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos, setTodos}: Props)  => {
  return (
    <div className='flex justify-center  w-[90%] flex-wrap'>
        {todos.map((todo)  => (
            <TodoTask todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>

        ))}
    </div>
  )
}

export default TodoList