import React from "react";
import '../../css/Header.css'
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import SearchAndBasket from "./Components/SearchAndBasket";

const Header = () => {
    return (
        <div className="Header flex align-items-center justify-content-space-between">
            <Logo></Logo>
            <Categories></Categories>
            <SearchAndBasket></SearchAndBasket>
        </div>
    )
}

export default Header;