import React, { Dispatch, FC,useRef } from 'react'
import "./style.css"
interface Person{
  todo:string;
  setTodo:Dispatch<React.SetStateAction<string>>;
  habdleApp:(e:React.FormEvent)=>void;
  
}
const Input:FC<Person>= ({todo,setTodo,habdleApp}) => {

const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e)=>{
      inputRef.current?.blur()
      habdleApp(e)}}>
      <input ref={inputRef} type="input" placeholder='Введите задачу'
      className='input_box'
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />

      <button  className="input_go" >Go</button>
    </form>
  )
}

export default Input
