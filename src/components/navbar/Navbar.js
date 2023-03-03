import React, { useContext } from 'react'
import { sender } from '../../Store'
import Links from './Links'
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import { MdSort } from "react-icons/md";


const Navbar = () => {

    let { mode, setMode } = useContext(sender)

    return (
        <>
            <nav className={`fixed-top navbar navbar-expand-lg bg-${mode ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand fs-2 p-0 text-${mode ? 'light' : 'dark'}`} href="#"><MdSort /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Links link="Home" id="#home" />
                            <Links link="About" id="#about" />
                            <Links link="Skills" id="#skills" />
                            <Links link="Contact" id="#contact" />
                        </ul>
                        <div className="d-flex" role="search">
                            <button className={`border-0  bg-${mode ? 'dark' : 'light'}`} onClick={() => setMode(!mode)}> {mode ? <BsFillBrightnessHighFill className='text-warning' /> : <BsFillMoonStarsFill />}</button>
                        </div>
                    </div>
                </div>
            </ nav>
        </>
    )
}

export default Navbar