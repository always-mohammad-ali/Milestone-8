import { useState } from "react";


const StateForm = () => {

    const [name, setName] = useState('ali bro');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    
    const handleStateForm = e =>{
        e.preventDefault();
        
        if(password.length < 6){
            setError('password must be greater than 6')
        }
        else{
            setError('');
            console.log(name, email, password)
        }
        
    }
    
    const handleName = e =>{
        setName(e.target.value)
    }

    const handleEmail = e =>{
        setEmail(e.target.value)
    }


    const handlePassword = e => {
        setPassword(e.target.value)
        console.log(setPassword)
    }

    return (
        <div>
            <form onSubmit={handleStateForm}>
                 <input onChange={handleName} type="text" name="text" className="my-3 border-2 border-amber-200" />
                 <br />
                 <input onChange={handleEmail} type="email" name="email" id="" className="border-2 "/>
                 <br />
                 <input onChange={handlePassword} type="password" required name="password" id="" className='border my-3' />
                 <br />
                 <input type="submit" name="submit" value="Submit" className="border-2 my-2 p-2"/>
                
                 {
                 error && <p>{error}</p>
                 }
                 
            </form>
        </div>
    );
};

export default StateForm;