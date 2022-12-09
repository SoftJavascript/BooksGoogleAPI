import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from '../reducers/constants'

export const addBook = data => {
  return {
    type: ADD_BOOKS,
    payload: data //object
  }
}

export const deletedBook = id => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
} 

export const deleteAllBooks = () => {
  return {
    type: DELETE_ALL_BOOKS
  }
} 