import React from 'react'
import { AddTodo } from './AddTodo'
import { Todos } from './Todos'
import { useState } from 'react'
import { useEffect } from 'react'
export const Home = () => {
    let InitTodo;
    if (localStorage.getItem("todos")===null){
      InitTodo =[]
    }
    else{
      InitTodo =JSON.parse(localStorage.getItem("todos"))
    }
  const OnDelete = (todo)=>{
    console.log("deleting",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))

    localStorage.setItem("todos",JSON.stringify(todos))  }
  
  const addTodo = (title,desc)=>{
    console.log("I am adding this todo" , title,desc)
    let sno;
    if (todos.length===0){
      sno =1;
    }
    else{
      sno = todos[todos.length-1].sno+1
    }
    const myTodo= {
      sno:sno,
      title:title,
      desc:desc 
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
        }
    const [todos,setTodos]= useState(InitTodo)
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
      },[todos])
  return (
    <>

    <AddTodo addTodo = {addTodo}/>
    <Todos todos = {todos} OnDelete={OnDelete} />
    </>
  )
}
