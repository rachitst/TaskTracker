import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if (!title) {
            alert("Title Cannot be Blank!!")            
        }
        if (!desc) {
            alert("Please Give a Description!!")            
        }
        else{
    props.addTodo(
        title,desc
    )
    settitle("")
    setdesc("") 
    }}
  return (
    <div className='container'>
        <center>
        <h5 className='home p-2 my-5 rounded-2'>Add your tasks here </h5>
        {/* <h2>Add your tasks here </h2> */}
        </center>
        <form  onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Task Title</label>
      <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title"/>    </div>
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Task Description</label>
      <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
    <button type="submit" className="btn btn-primary">Add   </button>
  </form></div>
  )
}
