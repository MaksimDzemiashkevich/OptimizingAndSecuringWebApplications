import React, { useState } from "react";
import { Link } from 'react-router-dom';

const SearchAndBasket = ({ switchHamburger, setSwitchHanmburger, cart }) => {

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="flex gap-4 items-center">
            <button className="hover:bg-gray-100 rounded-full transition-colors w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-search w-5 h-5 text-gray-700">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
            </button>

            <Link to="/cart" className="hover:bg-gray-100 relative rounded-full transition-colors w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-shopping-cart w-5 h-5 text-gray-700">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                {
                    totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center 
                    justify-center">{totalItems}</span>
                    )
                }
            </Link>

            <button className="lg:hidden w-10 h-10 justify-center items-center flex" onClick={() => { setSwitchHanmburger(switchHamburger => !switchHamburger) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-menu w-5 h-5 text-gray-700">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            </button>
        </div>
    )
}

export default SearchAndBasket;