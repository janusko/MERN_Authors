import '../App.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

const Create = () =>  {
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
        <AuthorForm onSubmitProp={createAuthor} errorFromProp={errors}/>
    )
}

export default Create;