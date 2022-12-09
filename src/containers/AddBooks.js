import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook, deleteAllBooks, deletedBook } from '../redux/actions/actionAddBooks';
import FlipMove from 'react-flip-move';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddBooks = ({ libraryData, addBook, deletedBook, deletedAllBooks }) => {
  
  const initialState = {
    title: '',
    author:'',
  }

  const [newData, setNewData] = useState(initialState)

  
  const handleSubmit = e => {
    e.preventDefault();
    addBook(newData);
    setNewData(initialState);
  }

  const displayBooks = libraryData.length > 0 ? 
  <FlipMove>
    {
      libraryData.map(data => {
        return (
          <li className='list-group-item list-group-item-light d-flex justify-content-center position-relative' key={data.id}>
                <span className="col-8 border-end ps-6 py-1 text-truncate" style={{ height: "100%"}}>
                    <strong>Title: </strong>{data.title}
                  </span>
                  <span className="col-4 border-left ms-2 p-1 text-truncate">
                  <strong>Author: </strong>{data.author}
                  </span>
                  <span className="col-auto position-absolute top-50 end-0 translate-middle">
                    <button type="button" 
                      className="btn-miniCancel border border-2 border-red rounded bg-red opacity-100 text-white" 
                      style={{height: "30px", width: "30px"}} 
                      aria-label="Close" 
                      onClick={() => deletedBook(data.id)}><strong>X</strong>
                    </button>
                  </span>
          </li>
        )
      })
    }
  </FlipMove>
    : <li className='list-group-item list-group-item-light d-flex justify-content-center'>There is no books in the your list</li>
  
  const displayAllBooksBtn = libraryData.length > 0 &&
    <div className='d-flex justify-content-center'>
      <button className='btn btn-cancel mt-4' onClick={() => deletedAllBooks()}>Delete All</button>
    </div>

  return (
    <main role='main'>
      <div className='jumbotron jumbotron-fluid bg-secondary my-3'>
        <div className='container text-center'>
          <h1 className='display-4 pt-4'>BOOKS</h1>
          <p>Add books too library</p>
          <form className='form-inline row justify-content-between my-5' onSubmit={handleSubmit}>
            <div className='col my-1'>
              <input 
                value={newData.title}
                type='text' 
                className='form-control'
                placeholder='Title'
                required
                onChange={e => setNewData({...newData, title: e.target.value})}
              />
            </div>
            <div className='col-md-2 my-1'>
              <input 
                value={newData.author}
                type='text' 
                className='form-control'
                placeholder='Author'
                onChange={e => setNewData({...newData, author: e.target.value})}
              />
            </div>
            <div className='col-auto mt-1 mb-5'>
                <button className='btn btn-secondary text-white border border-white '>
                  Add Book
                </button>
            </div>
          </form>
        </div>
      </div>
      <div className='container mb-10' >
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list-group'>
              <li className='list-group-item list-group-item-light d-flex justify-content-center bg-secondary text-white'>Registered Books</li>
              {displayBooks}
            </ul>
            { displayAllBooksBtn }
          </div>
        </div>
      </div>
    </main>
  )
}

const addStateToProps = state => {
  return {
    libraryData: state.library
  }
}

const addDispatchToProps = (dispatch) => {
  return {
    addBook: param => dispatch(addBook(param)),
    deletedBook: (id) => dispatch(deletedBook(id)),
    deletedAllBooks: () => dispatch(deleteAllBooks())
  }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks)
