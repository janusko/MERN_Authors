import React from 'react'
import axios from 'axios';
import styles from '../modules/buttons.module.css'
    
const DeleteButton = (props) => {
    
    const { authorId, onDeleteProp } = props;
    
    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                console.log(res);
                onDeleteProp(authorId);
            })
    }
    
    return (
        <button className={styles.btn} onClick={deleteAuthor}>
            Delete
        </button>
    )
}

export default DeleteButton;