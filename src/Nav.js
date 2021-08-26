import React, { useState , useEffect } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
        
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netlix Logo"
              />
              <img className="nav__avatar"
              src="https://cdn2.vectorstock.com/i/thumb-large/12/56/laughing-funny-emotion-emoji-face-with-tongue-vector-22861256.jpg" 
              alt="Netflix Logo" />
        </div>
    );
}

export default Nav;
