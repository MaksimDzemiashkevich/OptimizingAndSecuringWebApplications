import React from "react";

const UpperHalf = ({ cart }) => {
    const uniqueItemsCount = cart.length;

    const totalCartPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const threshold = 50;
    const isQualified = totalCartPrice >= threshold;
    const amountAway = (threshold - totalCartPrice).toFixed(2);
    return (
        <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Shopping Bag</h1>
                        <p className="text-gray-600 mt-2">{uniqueItemsCount} {uniqueItemsCount === 1 ? 'item' : 'items'} ready for checkout</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">1</div>
                            <span className="font-medium text-gray-900">Cart</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <div className="flex items-center gap-2 opacity-50">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">2</div>
                            <span>Checkout</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <div className="flex items-center gap-2 opacity-50">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">3</div>
                            <span>Complete</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                    <div className="flex items-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag w-4 h-4 text-orange-500">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span className="text-gray-700">Free shipping on orders over <span className="font-semibold text-orange-600">$50</span></span>
                    </div>
                    {
                        isQualified ? <span className="text-green-600 font-semibold text-sm">Qualified!</span> :
                            <span className="text-orange-600 font-semibold text-sm">${amountAway} away</span>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default UpperHalf;