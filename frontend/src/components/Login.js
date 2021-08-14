import './login.css'
import LoginForm from './LoginForm'

const Login = () => {

    return (
        <div className="outer_container">
            <div className="inner_container">
                <div className="left_container">
                    <h1>Welcome to Aztec Fantasy League</h1>
                </div>
                <div className="right_container">
                    <LoginForm history/>
                </div>
            </div>
        </div>
    )
}

export default Login
