import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    const { initialName, onSubmitProp, errorFromProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {errorFromProp.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
            <button><Link to={'/'}>Cancel</Link></button>
        </form>
    )
}