import React,  { useState, } from "react";
import "./App.css";
import { GoTasklist } from "react-icons/go";
import InputForm from "./components/InputForm";
import {Todo} from './models/model'
import TodoContainer from "./components/TodoContainer";

const App: React.FC = () => {
  const Logo: string = "Ol'Task";
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [noTodo, setNoTodo] = useState<boolean>(false);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    todo? setTodos ([...todos, {id: Date.now(), todo, isDone: false}]) : setNoTodo(true);
    setTodo("");

  }

  console.log(todos)
  return (
    <div className="bg-gray-700 h-screen sm:w-full flex flex-col gap-4 items-center p-4">
      <div className="flex justify-center items-center gap-4 text-gray-200">
        <GoTasklist size={40} />
        <h1 className="text-3xl font-bold">{Logo}</h1>
      </div>
      {/* import parameters as constructors */}
      <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoContainer todos={todos} setTodos={setTodos}/>
      
    </div>
  );
};

export default App;
