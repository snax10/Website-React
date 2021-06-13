import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar />
            <div className="name">
                <h1>Is's a <span>ReactJS</span> Website</h1>
                <p className="details">lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
                lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
                lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="header-btns">
                    <a href="#" className="cv-btn">Hire Mec</a>
                    <a href="#" className="cv-btn1">Download</a>
                </div>
            </div>
        </div>
    )
}

export default Header
