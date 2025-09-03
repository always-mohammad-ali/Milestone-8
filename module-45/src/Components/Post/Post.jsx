import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div className='border'>
               <h3>USER: {id}</h3>
               <p>{title}</p>
               <Link to={`/post/${id}`}>Details</Link>
            </div>
            
        </div>
    );
};

export default Post;