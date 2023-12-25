import React from "react";
import NavbarContainer from "../Navbar/Navbar";
import SectionContainer from '../Sections/HomepageSection';
import FooterContainer from "../Footer/Footer";


const BasickLayout = () => {
    return (
    <div>
        <NavbarContainer/>

        <FooterContainer/>
    </div>
    )
}


export default BasickLayout;