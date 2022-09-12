import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Main from './views/Main'
import Update from './views/Update';
import AuthorForm from './components/AuthorForm';

function App() {
  const [author, setAuthor] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();



  const createAuthor = author => {
    axios.post('http://localhost:8000/api/author', author)
      .then(res => {
        setAuthor((prevState) => [...prevState, res.data]);
        navigate('/')
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        console.log('error response', errorResponse)
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        console.log('error before we set', errorArr)
        setErrors(errorArr);
        console.log('ERRORS:', errors)
      })
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Update />} path='/edit/:id' />
        <Route element={<AuthorForm onSubmitProp={createAuthor} errorFromProp={errors}/>} path='/new' />
      </Routes>
    </div>
  );
}

export default App;
