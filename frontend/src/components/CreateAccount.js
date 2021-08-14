import { useState, useEffect } from 'react'
import './CreateAccount.css'

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "", 
    emailError: "",
    passwordError: "",
    success: ""
}


const CreateAccount = () => {
    const [newUser, setnewUser] = useState(initialState)

    useEffect(() => {}, [newUser]);

    //gets value from input and sets state
    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setnewUser({...newUser, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newUser.name, newUser.email, newUser.password)
    }

    return(
        <div className="outercontainer">
            <div className="innercontainer">
                <div className='bootstrap-iso'>
                
                    <h1>Create an Account</h1>
                <form id='myform'>
                    <div className="form-floating mb-3">
                        <input className="form-control" name="name" value={newUser.name} onChange={handleOnChange} placeholder="Name" />
                        <label htmlFor="floatingPassword">Name</label>
                    </div>
                    <div className='ErrorMessages'>
                        {newUser.nameError}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleOnChange} placeholder="Email" />
                        <label htmlFor="floatingPassword">Email</label>
                    </div>
                    <div className='ErrorMessages'>
                        {newUser.emailError}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password"  value={newUser.password} onChange={handleOnChange} placeholder="Password"/>
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <div className='ErrorMessages'>
                        {newUser.passwordError}
                    </div> 
                    <div className="successMessage">
                        {newUser.success}    
                    </div>  

                    <button className='submit-btn' value='Submit' onClick={handleSubmit}>Submit</button> 
               </form>
                </div>
            </div> 
        </div>
        
    )
}

export default CreateAccount