import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  let MyStyle={
    minHeight:"10vh"
  }
  return (
    <div className="container my-5" style={MyStyle} >
      <center>
        <h5 className='home p-2 my-2 rounded-2'>Your Tasks </h5>
        
        {/* <h2>Your Tasks </h2> */}
      </center>
      {/* {props.Todos[0]} */}
      <div className="container bg-body-tertiary  rounded-5 p-3 my-5">
        {/* <Todo todo={props.todos[0]} />
        <Todo todo={props.todos[1]} />
        <Todo todo={props.todos[2]} /> */}
        {props.todos.length===0?<center><b><h5>"No Tasks to Display!!"</h5></b></center>:
        props.todos.map((todo)=>{
          return (<Todo todo= {todo}  key ={todo.sno} OnDelete={props.OnDelete}/>
        )})}
        {/* <button className="btn btn-success mx-2 "  onClick={props.OnAdd}>Add</button> */}

        
{/* <textarea className="form-control" value = {Text} onChange= {handleOneChange} style={{backgroundColor:'white'}} id="exampleFormControlTextarea1" rows="3"></textarea> */}

      </div>
    </div>
  );
};
