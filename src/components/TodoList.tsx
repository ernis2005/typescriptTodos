import React, { Dispatch, FC } from 'react'
import '../components/style.css'
import { Todo } from '../type/type'
import SingleTodos from './SingleTodos';
interface Person{
    todos:Todo[];
    settodos:Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:FC<Person > = ({todos ,settodos}:Person) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
   <SingleTodos
   key={todo.id}
   todo={todo}
 todos={todos}
 settodos={settodos}
   />
        ))}
   
    </div>
  )
}

export default TodoList