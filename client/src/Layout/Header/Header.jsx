import React, {useState} from "react";
import '../../css/Header.css'
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import SearchAndBasket from "./Components/SearchAndBasket";

const Header = () => {
    const [switchHamburger, setSwitchHanmburger] = useState(false);
    return (
        <div className="Header relative sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 mx-auto max-w-7xl h-full">
                <Logo></Logo>
                <Categories></Categories>
                <SearchAndBasket switchHamburger={switchHamburger} setSwitchHanmburger={setSwitchHanmburger}></SearchAndBasket>

            </div>
            {
                switchHamburger && (
                    <nav className="absolute top-full left-0 w-full bg-white z-50 flex flex-col gap-4 p-4 lg:hidden">
                        <a href="/">Shop</a>
                        <a href="/">Categories</a>
                        <a href="/">Deals</a>
                        <a href="/">About</a>
                </nav>
                )
            }
        </div>
    )
}

export default Header;