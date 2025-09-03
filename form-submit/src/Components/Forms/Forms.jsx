

const Forms = () => {
    
    const handleForm = e =>{
          e.preventDefault();
          console.log('submite')
          console.log(e.target.email.value)
           
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                 <input type="text" className="my-3 border-2 border-amber-200" />
                 <br />
                 <input type="email" name="email" id="" className="border-2 "/>
                 <br />
                 <input type="submit" name="submit" value="Submit" className="border-2 my-2 p-2"/>
            </form>
        </div>
    );
};

export default Forms;