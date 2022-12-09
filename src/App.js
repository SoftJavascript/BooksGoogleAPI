import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AddBooks from './containers/AddBooks';
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
            <Route path='/search' element={ <SearchBooks /> } />
            <Route exact path='/' element={ <AddBooks /> } />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
