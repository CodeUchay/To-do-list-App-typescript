import React, { useState } from "react";
import { Todo } from "../models/model";
import { MdDone, MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoTask = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [editMode, setEditMode] = useState<boolean>(false);
  const handleDone = (id: number) => {
    //map throught the todo id's and set the ticked one to done
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    //map throught the todo id's and remove (filter) todo
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setEditMode(false);
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
 

  return (
    <form className="flex m-4 p-3 justify-between item-center text-l rounded text-gray-200 bg-gray-800 w-80 lg:w-[60%]">
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="bg-gray-700 p-1 lg:w-[80%] outline-none"
        />
      ) : //Strike through text if check is clicked
      todo.isDone ? (
        <s className="p-1">{todo.todo}</s>
      ) : (
        <span className="p-1">{todo.todo}</span>
      )}

      {!editMode ? (
        <div className="flex justify-center items-center gap-4 lg:gap-6  ">
          <AiFillEdit
            className="cursor-pointer hover:scale-125 duration-200"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
                setEditMode(true);
                console.log("edit mode is on ");
              }
            }}
          />
          <MdOutlineDeleteOutline onClick={() => handleDelete(todo.id)} className="cursor-pointer hover:scale-125 duration-200"/>
          <MdDone onClick={() => handleDone(todo.id)} className="cursor-pointer hover:scale-125 duration-200" />
        </div>
      ) : (
        <button
          onClick={(e) => handleEdit(e, todo.id)}
          className="flex justify-center items-center mr-5 border border-gray-700 hover:scale-105 duration-200 hover:bg-gray-600 hover:text-gray-200 text-gray-300 shadow rounded-full p-1 px-2 "
        >
          Submit
        </button>
      )}
    </form>
  );
};
