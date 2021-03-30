import React from 'react'

function NavBar({ show, toggle }) {
    return (
        <nav>
            <div>
                <h1 style={{backgroundColor:"success", display:"flex", justifyContent:"center", alignItems:"center", height:"15vh", color:"white"}}>STUDENTS RECORDS</h1>
                <button className="bttn" onClick={toggle}>{ show ? "CLOSE" : "ADD"} </button>
            </div>
        </nav>
    )
}

export default NavBar;
