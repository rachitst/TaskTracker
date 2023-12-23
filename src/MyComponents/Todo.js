import React from 'react'

export const Todo = ({todo,OnDelete}) => {
  return (
    <div>
      <h6> {todo.sno}  : {todo.title}</h6>
       <p>{todo.desc}</p>
       <div className="buttons my-3">
          <button className="btn btn-danger mx-2 "  onClick={()=>{OnDelete(todo)}}>Delete</button>
          <button className="btn btn-primary mx-2">Save </button>
        </div>
        <hr></hr>
    </div>
  )
}
