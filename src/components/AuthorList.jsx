import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthors(res.data))
    }, [])

    const filteredList = (id) => {
        const updatedList = authors.filter((eachAuthor) => eachAuthor._id !== id);
        setAuthors(updatedList);

    }
    // create function to handle delete -> lifting state. Filter the results

    return (
        <div>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {authors ? authors.map((author, i) =>
                        <tr key={i}>
                            <td>
                                <Link to={(`/author/${author._id}`)} >  {author.name}</Link>
                            </td>
                            <td>
                                <DeleteButton authorId={author._id} onDeleteProp={filteredList} />
                                <button><Link to={(`/edit/${author._id}`)} > Edit </Link></button>
                            </td>
                        </tr>
                    ) : <h2>No Authors Available</h2>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;