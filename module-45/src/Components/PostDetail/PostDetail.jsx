import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetails = useLoaderData();
    const {id, title, body} = postDetails;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <p>{id}</p>
            <h1 className='font-extraBold text-amber-300'>{title}</h1>
            <h3>
                {body}
            </h3>

            <button className='border' onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;