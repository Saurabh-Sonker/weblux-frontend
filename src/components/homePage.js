import React from "react";
import './homePage.css';
import logoImage from './l1.png'
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('/login')
    }

    const registrationPage = () => {
        navigate('/registration')
    }

    return (
        <>
            <div class="banner">
                <div class="navbar">
                    <img src={logoImage} class="logo" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <button class="button" onClick={loginPage}>Login</button>
                        <button class="button" onClick={registrationPage}>Registration</button>
                    </ul>
                </div>
                <div class="content">
                    <h1>WELCOME CODERS TO THE NEW PLATFORM OF LEARNING</h1>
                    <p>This is the new ways to start the coding journey to get updates on your fingertips, <br /> Stay ahead of everyone and grab what you want.</p>
                    <div>
                        <button type="button" onClick={loginPage}>Registration</button>
                        <button type="button" onClick={registrationPage}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;