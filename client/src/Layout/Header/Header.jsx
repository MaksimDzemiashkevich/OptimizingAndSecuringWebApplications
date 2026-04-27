import React from "react";
import '../../css/Header.css'
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import SearchAndBasket from "./Components/SearchAndBasket";

const Header = () => {
    return (
        <div className="Header flex items-center justify-between px-4">
            <Logo></Logo>
            <Categories></Categories>
            <SearchAndBasket></SearchAndBasket>
        </div>
    )
}

export default Header;