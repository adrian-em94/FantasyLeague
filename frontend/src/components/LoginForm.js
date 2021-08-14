import { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    success: "",
    loading: false,
    error: ""
}


const LoginForm = () => {
    const [newUser, setnewUser] = useState(initialState)
    const history = useHistory()

    //make api call
    // const fetch = async() => {
    //     const { data } = await axios.get('/api/notes');
    //     console.log(data)
    // } 
    
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo) {
            history.push("/Home");
        }

    }, [ newUser, history ]);

    //gets value from input and sets state
    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setnewUser({...newUser, [name]: value});
    }

    //submits
    const handleSubmit = async (event) => {
        event.preventDefault()
        //console.log(newUser.email, newUser.password)

        try{
            //configuring headers
            const config = {
                headers: {
                    "Content-type": "application/json",
                }
            }
            
            //setting loading to true for short animation
            //setnewUser({...newUser, "loading": "true"})


            //api call passing in email and password with headers
            const { data } = await axios.post(
                '/api/users/login', 
                {
                    email: newUser.email, 
                    password: newUser.password,
                },
                    config
            );

            //console log data
            
            localStorage.setItem("userInfo", JSON.stringify(data));
            
            console.log(data);

            //setting loading to false to stop loading animation
            //setnewUser({...newUser, "loading": false})

        } catch (error) {
            const stringerror = error.response.data.message
            console.log(newUser.email, newUser.password)
            console.log(stringerror)
            setnewUser({...newUser, "error": {stringerror}})
        }
    }

    return(
        <div className='bootstrap-iso'>
            <h1>Login</h1>
                <form id='myform'>
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
                    
                    <Link to="/CreateAccount">
                        <p className="link">Create Account</p>
                    </Link>
               </form>
            </div>
    )
}

export default LoginForm