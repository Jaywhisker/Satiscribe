import React, { useRef, useState } from 'react';
import pagestyle from '/styles/LoginPage.module.css'
import { Button } from '../components';
import { useRouter } from 'next/router';

function LoginPage() {
    // Create refs for the username and password inputs
    const usernameRef = useRef();
    const passwordRef = useRef();
    

    // Create a state variable for the error message
    const [error, setError] = useState(null);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve the values from the input fields
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // Check against hardcoded values or call your authentication service
        if (username === 'username' && password === 'password') {
            alert('Login successful');
            setError(null); // Clear the error
            // Redirect or perform some other action on successful login
        } else {
            setError('Invalid username or password');
        }
    };

    const router = useRouter();

    const handleLoginClick = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/newmeeting');
      };
    

    return (
        <form onSubmit={handleSubmit}>
            <div className={pagestyle.bigdiv}>
                <img className={pagestyle.mediumBlock} src="/Logo.png" alt="Description of icon" />
            </div>
            <div className={pagestyle.bigdiv}>
                {/* <label htmlFor="username">Username:</label> */}
                <input type="text" id="username" ref={usernameRef} className={pagestyle.inputWithBorder} placeholder="Username" required />
            </div>
            <div className={pagestyle.smallerdiv}>
                {/* <label htmlFor="password">Password:</label> */}
                <input type="password" id="password" ref={passwordRef} className={pagestyle.inputWithBorder} placeholder="Password" required />
            </div>
            <div className={pagestyle.smalldiv}>
                {error && <div className={pagestyle.errorMessage}>{error}</div>}
            </div>
            <div className={pagestyle.logindiv}>
                <Button size="medium" fill type="submit" onClick={handleLoginClick}>
                    Login
                </Button>
            </div>



        </form>



    );
}

export default LoginPage;
