import React, { useState } from "react";
import { Link } from 'react-router-dom';

const LowerHalf = ({ cart, updateQuantity, removeFromCart }) => {

    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [promoError, setPromoError] = useState("");

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const discountAmount = (subtotal + tax) * discount;
    const total = subtotal + tax - discountAmount;

    const applyPromo = () => {
        if (promoCode.trim().toUpperCase() === "SAVE10") {
            setDiscount(0.1);
            setPromoError("");
        } else {
            setDiscount(0);
            setPromoError("Неверный промокод");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 space-y-3">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
                            <div className="flex items-center gap-4 p-4">
                                <Link to={`/product/${item.id}`} className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </Link>
                                <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                                    <div className="sm:col-span-1">
                                        <h3 className="font-semibold text-gray-900 hover:text-orange-500 line-clamp-2 text-sm sm:text-base cursor-pointer">{item.title}</h3>
                                        <p className="text-xs text-gray-500 mt-1">{item.category || "General"}</p>
                                    </div>
                                    <div className="flex items-center justify-start sm:justify-center">
                                        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                disabled={item.quantity <= 1}
                                                className="w-7 h-7 rounded-full hover:bg-orange-100 disabled:opacity-30 transition-colors flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus w-3 h-3"><path d="M5 12h14"></path></svg>
                                            </button>
                                            <span className="font-semibold min-w-[2rem] text-center text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="w-7 h-7 rounded-full hover:bg-orange-100 transition-colors flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-3 h-3"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-3">
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-orange-500">${(item.price * item.quantity).toFixed(2)}</p>
                                            <p className="text-xs text-gray-500">${item.price} each</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="w-9 h-9 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 w-4 h-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:w-[400px]">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white">
                            <h2 className="text-2xl font-bold mb-1">Order Summary</h2>
                            <p className="text-orange-50 text-sm">{cart.length} items in your bag</p>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag w-4 h-4 text-orange-500"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg> Promo Code
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        placeholder="Enter code"
                                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                    <button onClick={applyPromo} className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold">Apply</button>
                                </div>
                                {promoError && <p className="text-red-500 text-xs mt-2 ml-1">{promoError}</p>}
                                {discount > 0 && <p className="text-green-600 text-xs mt-2 ml-1">Промокод применен: -10%</p>}
                            </div>

                            <div className="space-y-3 py-4 border-t-2 border-dashed border-gray-200">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax (8%)</span>
                                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between text-sm text-green-600">
                                        <span>Discount (10%)</span>
                                        <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-3 border-t-2 border-gray-900">
                                    <span className="font-bold text-gray-900 text-lg">Total</span>
                                    <span className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold text-lg flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Proceed to Checkout
                            </button>
                            <Link to="/" className="block text-center text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">← Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerHalf;