import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actionFetchBooks';
import { FcGoogle } from "react-icons/fc";
import { addBook } from '../redux/actions/actionAddBooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SearchBooks = () => {


  const [title, setTitle] = useState('');

  const state =  useSelector(state => state.search)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchBooks(title))
  }


  
  

  const handleSave = (title, author) => {
    const bookToSave = {title, author}
    dispatch(addBook(bookToSave))
    toast.info('Book Saved', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }

  const displayFetchedBooks =  state.isLoading ? 
    (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-info" role="status">
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
    : state.error !== '' ? (
      <p>{state.error}</p>
      )
      :
      (
        state.fetchedBooks.map(data => {
          
          return ( 
            <div className='card mb-2' key={data.id}>
              <ToastContainer />
            <div className='card-header'>
              <h5 className="mt-1">

                <button 
                  className="btn btn-link"
                  data-bs-toggle="collapse"
                  data-bs-target={`#a${data.id}`}
                  href={`${data.id}`}
                  aria-controls="accordion"
                  aria-expanded="false"
                  >
                    {data.volumeInfo.title} 
                  </button>
              </h5>
            </div>
             <div id={`a${data.id}`} className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                {
                  data.volumeInfo.hasOwnProperty('imageLinks') && 
                  <img src={ data.volumeInfo.imageLinks.thumbnail } alt={ data.volumeInfo.title } />
                }
                

                <br/>
                <h4 className='card-title'>Title: { data.volumeInfo.title }</h4>
              
                <h5 className='card-title'>Author: { data.volumeInfo.authors ? data.volumeInfo.authors : `none`}</h5>
                <p className='card-text'>Description: { data.volumeInfo.description ? data.volumeInfo.description : `none`}</p>
                <a 
                  className="btn btn-outline-secondary"
                  href={ data.volumeInfo.previewLink }
                  target="_blank"
                  rel='nooopener noreferrer'
                >
                  More Info
                </a>
                <button 
                  className='btn btn-outline-secondary ms-3'
                  onClick={() => handleSave(data.volumeInfo.title, data.volumeInfo.author)}
                >Add It
                </button>
              </div>
            </div>
          </div>
        )
      })
    )

  

  return (
      <main role='main'>
        <div className='jumbotron jumbotron-fluid bg-secondary my-3'>
          <div className='container text-center'>
            <h1 className='display-4 pt-4'>BOOKS</h1>
            <p ><img alt='Shelf Book' src="https://img.icons8.com/color/40/null/book-shelf.png"/>Which book do you search? <br/>
              <span className= 'googleIcon' 
              style={{height: "20px"}}>
                <FcGoogle />
              </span>
              <span>oogle <img alt='Google Icon G' src="https://img.icons8.com/color/30/000000/api.png"/> will search for you!</span> 
            </p>
            <form 
            className='form-inline row justify-content-between my-5' 
            onSubmit={handleSubmit}
            >
              <div className='col my-1'>
                <input 
                  type='text' 
                  className='form-control'
                  placeholder='Search'
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className='col-auto mt-1 mb-5'>
                  <button className='btn btn-secondary text-white border border-white '>
                    Search
                  </button>
              </div>
            </form>
          </div>
        </div>
        <div className='container' style={{minHeight: "200px"}}>
          <div id='accordion'>
            { displayFetchedBooks }
          </div>
        </div>
      </main>
  )
}

export default SearchBooks