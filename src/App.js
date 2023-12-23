// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
// import { Todos } from './MyComponents/Todos';
// import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { Home } from './MyComponents/Home';
// import { useState } from 'react';
// import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App(){

  // let todos = [
  //   { sno: 1 ,title  : "Find Internship " , desc :"You need to find an Internship" },
  //   { sno: 2 ,title  : "Complete MERN " , desc :"You need to complete the MERN course" },
  //   { sno: 3 ,title  : "Less Chatting " , desc :"You need to Chat less" },
  // ]
      // { sno: 1 ,title  : "Find Internship " , desc :"You need to find an Internship" },
      // { sno: 2 ,title  : "Complete MERN " , desc :"You need to complete the MERN course" },
      // { sno: 3 ,title  : "Less Chatting " , desc :"You need to Chat less" },

  return (
    <>
    {/* <div className="container"> */}
      {/* <p> My name is Rachit</p>
      <h3>My React App</h3> */}
     {/* <BrowserRouter>
      <Header title= "Rachit Chheda" searchBar ={true}/>
      <Routes>
      <Route exact path="/" render= {()=>
      <Fragment><AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos} OnDelete={OnDelete} /></Fragment> }>
          </Route>
          <Route exact path="about" element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>  */}

<Router>
<Header title= "Task Tracker" searchBar ={true}/>
  <Routes>
	<Route exact path='/' element={<Home/>}></Route>
	<Route exact path='/about' element={<About/>}></Route>
</Routes>
<Footer/>
</Router>

      
    </>
  );
}
export default App;

