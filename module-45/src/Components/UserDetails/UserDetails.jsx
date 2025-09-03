import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userData = useLoaderData();
    const {name} = userData;
    return (
        <div>
            <p>Hey, {name}</p>
        </div>
    );
};

export default UserDetails;