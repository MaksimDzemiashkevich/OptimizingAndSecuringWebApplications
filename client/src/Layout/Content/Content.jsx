import React from "react";
import '../../css/Content.css'
import MainContent from "./Components/MainContent";

const Content = ({addToCart}) => {
    return (
        <div className="content">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-16 px-7">
                <div className="text-white max-w-7xl mx-auto px-4 ">
                    <h1 className="text-[32px] font-bold">
                        Shop All Products
                    </h1>
                    <span className="text-lg">
                        Discover the best products for your furry friends
                    </span>
                </div>
            </div>
            <MainContent addToCart={addToCart}></MainContent>
        </div>
    )
}

export default Content;