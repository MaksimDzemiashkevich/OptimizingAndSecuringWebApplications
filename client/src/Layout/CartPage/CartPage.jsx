import React from "react";
import UpperHalf from "./Components/UpperHalf";
import LowerHalf from "./Components/LowerHalf";
import { Link } from "react-router-dom";

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col">
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="text-center max-w-md">
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-shopping-bag w-16 h-16 text-orange-500">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                <path d="M3 6h18"></path>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Your cart is empty
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Discover amazing products for your furry friends!
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                            to="/">
                            Start Shopping
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide lucide-chevron-right w-5 h-5">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    return (

        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
            <UpperHalf cart={cart}></UpperHalf>
            <LowerHalf cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart}></LowerHalf>
        </div>
    )
}

export default CartPage;