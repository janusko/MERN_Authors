import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then (res => {
            setAuthor(res.data);
            setLoaded(true)
        })
    }, [id])
    
    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => console.log(res))
        navigate('/')
    }

    return (
        <div>
            <h1>Update a Author</h1>
            { loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                        // coming from axios.get -> AuthorForm -> props -> useState -> name -> form, value
                        errorFromProp={errors}
                        // initial from author form
                    />
                    <DeleteButton authorId={author._id} />
                </>
            )}
        </div>
    )
}

export default Update