import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import '../style.css';


const ErrorPage = () => {
    
    return (
        <div>
            <h3>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h3>
            <Button variant="warning"> <Link to={('/')}> Home </Link></Button>
            <Button variant="warning"> <Link to={('/new')}> New Author </Link></Button>
        </div>
    )
}

export default ErrorPage;