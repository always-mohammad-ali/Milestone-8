import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    
    const {id, name, email} = user;

    return (
        <div className='border rounded-xl my-5 text-red-500'>
            <h1>{name}</h1>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;