import React from 'react';
import useInputState from '../../Hooks/UseHookForm';

const HookForm = () => {
    // const [name, handleNameChange] = useInputState("ali");

    const emailState = useInputState('ali@gmail.com')

    const handleSubmit = e =>{
        console.log('form data', emailState.value);
        e.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                 {/* <input value={name} onChange={handleNameChange}  type="text" name="text" className="my-3 border-2 border-amber-200" /> */}
                 <br />
                 <input {...emailState} type="email" name="email" id="" className="border-2 "/>
                 <br />
                 <input type="password" name="password" id="" className='border my-2'/>
                 <br />
                 <input type="submit" name="submit" value="Submit" className="border-2 my-2 p-2"/>
            </form>
        </div>
    );
};

export default HookForm;