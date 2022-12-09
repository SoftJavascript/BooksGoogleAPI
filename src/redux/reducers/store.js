import { configureStore } from '@reduxjs/toolkit';
import reducerAddBooks from './reducerAddBooks';
import thunk from 'redux-thunk';
import reducerFetchedBooks from './reducerFetchBook';

export const store = configureStore({
  reducer: {
    library: reducerAddBooks, 
    search: reducerFetchedBooks,
  },
  middleware: [thunk],
});

// applyMiddleware(thunk)