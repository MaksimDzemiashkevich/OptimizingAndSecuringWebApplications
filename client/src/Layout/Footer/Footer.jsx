import React from "react";
import '../../css/Footer.css'
import CopyRight from "./Components/CopyRight";
import Links from "./Components/Links";

const Footer = () => {
    return (
        <div className="footer bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 my-12 mx-4">
                <Links></Links>
                <CopyRight></CopyRight>
            </div>
        </div>
    )
}

export default Footer;