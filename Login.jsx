import { Link } from 'react-router-dom'; // <-- Import the Link component
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', { email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success") {
                navigate('/home');
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="login-page">
            <div className="login-photo">
                <img src="public/cookies.jpg" alt="Login Background" />
            </div>
            <div className="user">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Login</h2>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Login</button>
                    <Link to="/register" className="forgot-text">Create an Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
