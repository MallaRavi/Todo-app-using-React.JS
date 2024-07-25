import React, { useState, useEffect } from 'react'
import '../styles/nav.css'
import {Link , useNavigate} from 'react-router-dom'

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in
        const user = localStorage.getItem('user');
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);
    
    const handleLogout = () => {
        // Clear user data and update authentication state
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        navigate('/signup'); // Redirect to signup page or home page
    };

    let languages =[
        { code: 'en', language: 'English', country: 'United States' },
    ]

  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <p>
                <a href='/'>Todo</a>
            </p>
        </div>
        <div className='navbar-right'>
            <ul>
                <li><Link to='/createTodo'>Create Todo</Link></li>
                <li>
                    <select className='navbar-languages'>
                        {
                            languages.map((lan,index)=>{
                                return <option key={index}>{lan.code} - {lan.language}</option>
                            })
                        }
                    </select>
                </li>
                <li>
                    {isAuthenticated ? (
                            <button onClick={handleLogout}>Logout</button> // Show Logout button if authenticated
                        ) : (
                            <Link to="/signup">
                                <i className="fas fa-user"></i>
                            </Link>
                        )
                    }
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
