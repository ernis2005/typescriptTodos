import React, { FC, useState } from "react";

import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./type/type";
// let name:string ;
// let namew:any ;
// let masiv :string[];
// let  role:[ number,string];
// let age :number | string;

// let printName:(name:string)=>void;
// function name1(params:string) {
//    console.log( params);

// }
// name1("ernis")
//  type Person  = {
//   name :string,
//   age?:number
//  };
//  let person:Person={
//   name:"ermis",

//  }
//  let lotsOfpeolple :Person[];
// let personName:unknown;
// interface Person {
//   name: string;
//   age?: number;
// }
// interface Guy extends Person {
// profession:string;
// }
// type X = {
//   a: string;
//   b: number;
// };
// type Y = X &{
//   c: string;
//   d: number;
// };

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, settodos] = useState<Todo[]>([]);
  console.log(todos);
  const habdleApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Ernis.com</span>
      <Input todo={todo} setTodo={setTodo} habdleApp={habdleApp} />
    <TodoList todos={todos}  settodos={settodos}/>
    </div>
  );
};

export default App;
