import React, { Dispatch, FC, FormEvent, useState } from "react";
//AiFillEdit

import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../type/type";
import "./style.css";

interface Person {
  todos: Todo[];
  settodos: Dispatch<React.SetStateAction<Todo[]>>;
  key: string | number;
  todo: Todo;
}
const SingleTodos: FC<Person> = ({ settodos, todos, todo, key }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    settodos(todos.filter((res) => res.id !== id));
  };
  const handleEdit = (e: FormEvent, id: number) => {
    e.preventDefault();
    settodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false)
  };
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className=" todos__single--texts">{todo.todo}</s>
      ) : (
        <samp className=" todos__single--text">{todo.todo}</samp>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {" "}
          <MdDone />
        </span>
      </div>
      `
    </form>
  );
};

export default SingleTodos;
