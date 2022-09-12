import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
    
export default props => {
    
    const { authorId } = props;
    const navigate = useNavigate();
    
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                console.log(res);
                navigate('/')
            })
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}