import React, { useState } from 'react';
import '../styles/signupPage.css';
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
    const [usersList, setUsersList] = useState([]);
    let navigate=useNavigate();
    const handleUserLogin = (e) => {
        e.preventDefault();
        const userName = document.getElementById('user-name').value;
        const userPassword = document.getElementById('user-password').value;
        
        const user = usersList.find(item => item.name === userName);
         console.log([usersList,user])
        if (user) {
            if (user.password === userPassword) {
                alert('Login Successfully');
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
                // console.log('Login Successfully');
            } else {
                alert('Incorrect Password.');
                // console.log('Incorrect Password.');
            }
        } else {
            alert('User name not found.');
            // console.log('User name not found.');
        }
    };

    const handleUserSignup = (e) => {
        e.preventDefault();
        const signupName = document.getElementById('Signup-name').value;
        const signupEmail = document.getElementById('Signup-email').value;
        const signupPassword = document.getElementById('Signup-password').value;
        
        const userExists = usersList.some(item => item.name === signupName);

        if (userExists) {
            alert('User name has been taken.');
            // console.log('User name has been taken.');
        } else {
            const newUser = { name: signupName, email: signupEmail, password: signupPassword };
            setUsersList(prevUsersList => {
                const updatedUsersList = [...prevUsersList, newUser];
                // console.log('Updated usersList:', updatedUsersList);
                return updatedUsersList;
            });
            alert('Signup successful!');
            localStorage.setItem('user', JSON.stringify(newUser));
            navigate('/')
            // console.log('Signup successful!');
        }
    };

    return (
        <div className='signupPage-container'>
            <div className='signup-card'>
                <div className='signup-section'>
                    <div className='signup-heading'>
                        <h3>Signup</h3>
                    </div>
                    <div>
                        <form>
                            <div className='inputfield'>
                                <label htmlFor='Signup-name'>Name: </label>
                                <input id='Signup-name' type='text' />
                            </div>
                            <div className='inputfield'>
                                <label htmlFor='Signup-email'>Email: </label>
                                <input id='Signup-email' type='email' />
                            </div>
                            <div className='inputfield'>
                                <label htmlFor='Signup-password'>Password: </label>
                                <input id='Signup-password' type='password' />
                            </div>
                            <div>
                                <button type='submit' id='signup-btn' onClick={handleUserSignup}>Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='break-line'></div>
                <div className='signin-section'>
                    <div>
                        <h3>Signin</h3>
                    </div>
                    <div>
                        <form>
                            <div className='inputfield'>
                                <label htmlFor='user-name'>User: </label>
                                <input type='text' id='user-name' />
                            </div> 

                            <div className='inputfield'>
                                <label htmlFor='user-password'>Password: </label>
                                <input type='password' id='user-password' />
                            </div>

                            <div>
                                <button type='submit' id='signin-btn' onClick={handleUserLogin}>Login</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
