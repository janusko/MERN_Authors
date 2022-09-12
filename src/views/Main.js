import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';


const Main = () => {
    const [ author, setAuthor ] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            setAuthor(res.data)
            setLoaded(true);

        })
        .catch(err => console.log(err))
    }, []);
    
    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to={('/new')}>Add author</Link>
            {loaded && <AuthorList />}
        </div>
    )
}

export default Main;