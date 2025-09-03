import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const postsData = useLoaderData();
    

    return (
        <div>
            <h1>Here is your All post Buddy!</h1>
            <div className='grid grid-cols-3 gap-3 text-amber-200'>
                {
                    postsData.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;