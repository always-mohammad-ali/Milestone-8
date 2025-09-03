import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';




const Users = () => {

    const users = useLoaderData();


    return (
        <div>
            <h3>Hey,all users {users.length}</h3>
            <h5>hi</h5>
            <div className='grid grid-cols-3 gap-3 '>
                {
                users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;