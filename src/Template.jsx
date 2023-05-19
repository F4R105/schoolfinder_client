import React, {useEffect, useState} from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaFilter, FaHome, FaList, FaSun, FaMoon } from "react-icons/fa";

// COMPONENTS
import { Switch } from '@mui/material';


function Template() {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('dark-mode', !darkMode)
    }

    useEffect(()=>{
        let isDarkMode = localStorage.getItem('dark-mode')
        isDarkMode && setDarkMode(JSON.parse(isDarkMode))
    },[])

    const navigate = useNavigate()

    return (
        <div id='body' className={darkMode ? 'dark' : 'light'}>
            <nav>
                <div className="container">
                    <ul>
                        <li>
                            <span>
                                <FaHome 
                                    size={20}
                                    className='nav-icon'
                                />
                            </span>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <span>
                                <FaFilter 
                                    size={15}
                                    className='nav-icon'
                                />
                            </span>
                            <NavLink to={"/filter"}>Filter</NavLink>
                        </li>
                        <li>
                            <span>
                                <FaList
                                    size={15}
                                    className='nav-icon'
                                />
                            </span>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                    </ul>
                    <div id='themeToggler' onClick={toggleDarkMode}>
                        <span className='theme-label'>Dark mode</span>
                        <FaMoon
                            size={20}
                            className='theme-icon'
                        />
                        <Switch size='small' onChange={toggleDarkMode} checked={darkMode}/>
                    </div>
                </div> 
            </nav>
            {<Outlet />}
            <footer>
                <div className="container">
                    <p>Copyright &copy; 2023 Faraji Kajubu</p>
                    <p>Arusha Technical college</p>
                </div>
            </footer>
        </div>
    )
}

export default Template