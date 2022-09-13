import React from 'react'
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';
import Button from'react-bootstrap/Button';
// import '../style.css';


const Dashboard = () => {
    
    return (
        <div>
            <h2>Favorite Authors</h2>
            <Button variant="warning"> <Link to={('/new')}> Add an author </Link></Button>
            <AuthorList />
        </div>
    )
}

export default Dashboard;