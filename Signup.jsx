import { Link } from 'react-router-dom'; // <-- Import the Link component
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Ensure the correct path to your CSS file

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <h2 className="register-text">Register</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            autoComplete="off"
                            name="name"
                            className="input-field"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            className="input-field"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            className="input-field"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className="login-link">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
