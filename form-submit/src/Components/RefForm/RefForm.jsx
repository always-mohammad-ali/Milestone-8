import React, { useEffect, useRef } from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleRefForm = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

    }

    useEffect( () =>{
        nameRef.current.focus();
    } ,[])

    return (
        <div>
             <form onSubmit={handleRefForm}>
                 <input ref={nameRef} type="text" name="text" className="my-3 border-2 border-amber-200 p-2" />
                 <br />
                 <input ref={emailRef} type="email" name="email" id="" className="border-2 my-2"/>
                 <br />
                 <input ref={passwordRef} type="password" name="password" id="" className='border' />
                 <br />
                 <input type="submit" name="submit" value="Submit" className="border-2 my-2 p-2"/>
            </form>
        </div>
    );
};

export default RefForm;