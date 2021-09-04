import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './CreateAccount.css'

const initialState = {
    name: "",
    email: "",
    password: "",
    c_password: "",
    nameError: "", 
    emailError: "",
    passwordError: "",
    success: ""
}


const CreateAccount = () => {
    const [newUser, setnewUser] = useState(initialState)
    const history = useHistory()

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo) {
            history.push("/TeamProfile")
        }
    }, [newUser, history ]);

    //gets value from input and sets state
    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setnewUser({...newUser, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if(newUser.password !== newUser.c_password){
                        setnewUser({...newUser, passwordError: "Passwords do not match!"})
        }

        try{
            //configure the headers
            const config = {
                headers: {
                    "Content-type": "application/json",
                }
            }

            //api call passing in name, email, password,
            //and confirmed password
            const { data } = await axios.post(
                '/api/users/',
                {
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password,
                },
                    config
            );

            localStorage.setItem("userInfo", JSON.stringify(data));
            
            console.log(data);
            

        }catch(error){
            const stringerror = error.response.data.message
            console.log(stringerror)
            setnewUser({...newUser, "error": {stringerror}})
        }
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
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="c_password"  value={newUser.c_password} onChange={handleOnChange} placeholder="Password"/>
                        <label htmlFor="floatingInput">Confirm Password</label>
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