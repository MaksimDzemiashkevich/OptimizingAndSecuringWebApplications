import React from "react";

const Categories = () => {
    return (
        <nav className="lg:flex justify-between gap-7 hidden">
            <a className="hover:text-orange-600 transition-colors" href="/">Shop</a>
            <a className="hover:text-orange-600 transition-colors" href="/">Categories</a>
            <a className="hover:text-orange-600 transition-colors" href="/">Deals</a>
            <a className="hover:text-orange-600 transition-colors" href="/">About</a>
        </nav>
    )
}

export default Categories;