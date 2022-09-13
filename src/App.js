import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard'
import Update from './views/Update';
import Create from './views/Create';
import ErrorPage from './views/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route element={<Dashboard />} path='/' />
        <Route element={<Update />} path='/edit/:id' />
        <Route element={<Create />} path='/new' />
        <Route element={<ErrorPage />} path='*' />
      </Routes>
    </div>
  );
}

export default App;
