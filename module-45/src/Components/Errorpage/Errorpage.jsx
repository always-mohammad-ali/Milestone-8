import React from 'react';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
    const navigate = useNavigate();
    const handleGoBackError = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Oopp sire! 404!</h1>
            <button onClick={handleGoBackError}>Go back</button>
        </div>
    );
};

export default Errorpage;