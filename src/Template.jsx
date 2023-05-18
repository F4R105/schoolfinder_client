import React, {useState} from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

// COMPONENTS
import { Switch } from '@mui/material';


function Template() {
    const [darkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState('light')

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const navigate = useNavigate()

    return (
        <div id='body' className={`theme ${theme}`}>
            <nav>
                <div className="container">
                    <NavLink to={"/"}>
                        <div id="logo">
                            <span>school</span>Finder
                        </div>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/filter"}>Filter</NavLink>
                        </li>
                        <li onClick={toggleDarkMode}>
                            <span>Dark mode</span>
                            <Switch size='small' onChange={toggleDarkMode} checked={darkMode}/>
                        </li>
                    </ul>
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