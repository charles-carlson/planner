import React from 'react'
import ReactDOM from 'react-dom';

const Navbar = ({name}) => {
    return (
        <React.Fragment>
        <header className='header'>
            <h1 className='title'>TODO</h1>
            <ul className="menu">
                <li className="item">Welcome {name}</li>
                <li className="item">Settings</li>
            </ul>
        </header>

        </React.Fragment>
    )
}


export default Navbar;
