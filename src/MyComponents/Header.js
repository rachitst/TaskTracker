import React from 'react'
import PropType from 'prop-types' 
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg p-3 ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"> {props.title}</Link>
    {/* <a className="navbar-brand" to="#"> To-Do List </a> */}
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active  text-white" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="/about">About</Link>
        </li>
      </ul>
      {props.searchBar?  <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="button" type="submit">Rachit Chheda</button>
      </form> : ""}
    </div>
  </div>
</nav>
  )
}
//PropTyes  for defining the datatype of each prop 
Header.propTypes = {
  title : PropType.string,
  searchBar : PropType.bool.isRequired // isRequired is used to specify a prop necessarily 
}
//default prop values incase if the user doesnt specify the prop values 
Header.defaultProps = {
  title : "Hello",
  searchBar :true 
}