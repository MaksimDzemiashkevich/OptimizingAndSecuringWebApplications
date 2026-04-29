import React, { useState } from "react";
import { useParams } from "react-router-dom"
import { products } from "../DataBase.jsx";

const CardPage = ({ addToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    if (!product) return <div>Товар не найден</div>;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm">
                        <a className="text-gray-600 hover:text-orange-500" href="/">Home</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-400"><path d="m9 18 6-6-6-6"></path></svg>
                        <a className="text-gray-600 hover:text-orange-500" href="/">Toys & Scratchers</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4 h-4 text-gray-400"><path d="m9 18 6-6-6-6"></path></svg>
                        <span className="text-gray-900">{product.title}</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img src={product.image} alt="Product" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full mb-3">Toys & Scratchers</span>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill={i < product.rating ? "currentColor" : "none"}
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`lucide lucide-star w-5 h-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                        >
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">{product.rating} out of 5 stars</span>
                            </div>
                            <p className="text-3xl font-bold text-orange-500 mb-6">${product.price}</p>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Key Highlights</h3>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Height: 38 inches</li>
                                <li>• Base Dimensions: 20 x 20 inches</li>
                                <li>• Material: Sisal Rope & Plush Fabric</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                            <p className="text-gray-700 leading-relaxed">Three-tier cat scratching post with sisal rope wrapping and plush platforms. Provides multiple levels for climbing, scratching, and resting. Sturdy base ensures stability during active play. Natural jute fibers satisfy your cat's scratching instincts.</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-700">Quantity:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button onClick={handleDecrement} className="p-2 hover:bg-gray-100 transition-colors" disabled={quantity <= 1}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus w-4 h-4"><path d="M5 12h14"></path></svg></button>
                                <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{quantity}</span>
                                <button onClick={handleIncrement} className="p-2 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
                            </div>
                        </div>

                        <button onClick={() => {
                            for (let i = 0; i < quantity; i++) {
                                addToCart(product);
                            }
                        }} className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-5 h-5"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                            Add to Cart
                        </button>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-orange-500 p-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-5 h-5 text-white"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg></div>
                                <h3 className="text-lg font-bold text-gray-900">Technical Specifications</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { label: "Height", value: "38 inches" },
                                    { label: "Base Dimensions", value: "20 x 20 inches" },
                                    { label: "Material", value: "Sisal Rope & Plush Fabric" },
                                    { label: "Platforms", value: "3 Levels" },
                                    { label: "Weight Capacity", value: "Up to 25 lbs per platform" }
                                ].map((spec, i) => (
                                    <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 group">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-orange-50 p-2 rounded-lg group-hover:bg-orange-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-4 h-4 text-orange-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{spec.label}</p>
                                                <p className="text-sm font-semibold text-gray-900 truncate">{spec.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <a className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow" href="/product/5">
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1758543535539-325abf59ef48?q=80&w=1080" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">Interactive Rubber Chew Ball</h3>
                                <p className="text-lg font-semibold text-orange-500">$15.99</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage;