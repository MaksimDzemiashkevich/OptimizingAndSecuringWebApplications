import React from "react";
import '../../css/Header.css'
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import SearchAndBasket from "./Components/SearchAndBasket";

const Header = () => {
    return (
        <div className="Header">
            <div className="flex items-center justify-between px-4 mx-auto max-w-7xl h-full">
                <Logo></Logo>
                <Categories></Categories>
                <SearchAndBasket></SearchAndBasket>
            </div>
        </div>
    )
}

export default Header;