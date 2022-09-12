import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data))
    }, [author])

    return (
        <div>
            <p>We have quotes by:</p>
            {author ? author.map((author, i) =>
                <p key={i}>
                    <Link to={(`/author/${author._id}`)} >  {author.name}</Link>
                    <DeleteButton authorId={author._id} />
                    <button><Link to={(`/edit/${author._id}`)} > Edit </Link></button>
                </p>) :
                <h1>No authors available</h1>
            }
        </div>
    )
}

export default AuthorList;