import React from "react";
import './homePage.css';
import logoImage from './l1.png'
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('/login')
    }

    return (
        <>
            <div class="banner">
                <div class="navbar">
                    <img src={logoImage} class="logo" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <button class="button" onClick={loginPage}>Login</button>
                    </ul>
                </div>
                <div class="content">
                    <h1>WELCOME CODERS TO THE NEW PLATFORM OF LEARNING</h1>
                    <p>This is the new ways to start the coding journey to get updates on your fingertips, <br /> Stay ahead of everyone and grab what you want.</p>
                    <div>
                        <button type="button"><span></span>Learn More</button>
                        <button type="button"><span></span>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;