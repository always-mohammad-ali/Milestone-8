import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    
    const navigate = useNavigate();


    const handleDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <div className='border'>
               <h3>USER: {id}</h3>
               <p>{title}</p>
               <Link to={`/post/${id}`}>Details</Link>
               <button onClick={handleDetails}>Alternative way for see Detalis</button>
            </div>
            
        </div>
    );
};

export default Post;