
import './App.css'
import Forms from './Components/Forms/Forms'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/reusableForm'
import StateForm from './Components/StateForm/StateForm'

function App() {
   
  const handleSignUpSubmit = data =>{
        console.log('sign up data', data)
    }

  const handleProfileUpdateSubmit = data =>{
       console.log('profile update data', data)
    }

  return (
    <>
      
     

      <h3 className='text-4xl font-extrabold'>Hello</h3>
      {/* <Forms></Forms>
      <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
       <div>
        <h1>Sign up man!</h1>
        <p>Why are you doing late - huh!</p>
       </div>
 
      </ReusableForm>

      <ReusableForm formTitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleProfileUpdateSubmit}>

        <div>
        <h1>Update your profile</h1>
        <p>Are you serious - huh!</p>
       </div>

      </ReusableForm>

  
    </>
  )
}

export default App
