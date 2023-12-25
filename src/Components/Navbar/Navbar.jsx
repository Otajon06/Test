import React from "react";
import styled from "styled-components";
import FirstTitle from "./NavbarComponents/FirstTitle";
import SecendTitle from "./NavbarComponents/SecendTitle";
import './Navbar.css'

const NavbarContainer = () => {
    return (
        <div className="Navbar-container">
            <FirstTitle/>
            <SecendTitle/>
        </div>
    )
}

export default NavbarContainer;