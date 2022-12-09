import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className='d-flex flex-row p-3 border-bottom bg-secondary text-white'>
        <h4 className='mr-md-auto my-auto'>
          <a href="/" className='text-decoration-nome text-white'>BOOKS</a>
        </h4>
        <nav className='btn-group ms-auto'>
          <Link to="/" className='btn btn-light'>Home</Link>
          <Link to="/search" className='btn btn-light'>Search</Link>
        </nav>
      </div>

    </header>
  )
}

export default NavBar
