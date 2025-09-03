import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postDetails = useLoaderData();
    const {id, title, body} = postDetails;
    return (
        <div>
            <p>{id}</p>
            <h1 className='font-extraBold text-amber-300'>{title}</h1>
            <h3>
                {body}
            </h3>
        </div>
    );
};

export default PostDetail;