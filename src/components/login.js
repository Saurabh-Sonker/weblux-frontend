import React, { useState } from "react";
import Service from './service'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async () => {
        console.log('form submitted')
        const data = {
            email: email,
            password: password 
        }
        const response = await Service.login(data)
        if (response) {
            navigate('/notificationPage')
        }
        console.log(response)
        console.log(data)

    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="button" className="btn btn-primary" onClick={submitForm}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;