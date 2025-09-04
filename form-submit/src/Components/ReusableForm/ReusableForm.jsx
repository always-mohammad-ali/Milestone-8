import React from 'react';

const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

    // const handleSubmit = e =>{
    //     e.preventDefault();
    // }

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value

        }
        handleSubmit(data);
    }
    
    return (
        <div>
            {/* <h1>{formTitle}</h1> */}
            {children}

            <form onSubmit={handleLocalSubmit}>
                 <input type="text" name="text" className="my-3 border-2 border-amber-200" />
                 <br />
                 <input type="email" name="email" id="" className="border-2 "/>
                 <br />
                 <input type="password" name="password" id="" className='border-2 my-2' />
                 <br />
                 <input type="submit" name="submit" value={submitBtnText} className="border-2 my-2 p-2"/>
            </form> 
        </div>
    );
};

export default ReusableForm;