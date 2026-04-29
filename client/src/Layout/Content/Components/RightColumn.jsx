import React, { useState } from "react";
import SortComponent from "./SortComponent";
import Cards from "./Cards";

const RightColumn = (props) => {

    const [switchAside, setSwitchAside] = useState(false);

    return (
        <div className="flex-1">
            <SortComponent switchAside={switchAside} setSwitchAside={setSwitchAside} filteredProducts={props.filteredProducts}
             sortBy={props.sortBy} setSortBy={props.setSortBy}></SortComponent>
            {switchAside && (
                <div className="lg:hidden bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                        <button onClick={() => (setSwitchAside(switchAside => !switchAside))} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-5 h-5 text-gray-500"
                            >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
                            <div className="space-y-3">
                                {["5+ Stars", "4+ Stars", "3+ Stars"].map((label, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => props.toggleRating(index)}
                                            className={` w-4 h-4 rounded border transition-all duration-200 flex items-center 
                                                justify-center ${props.ratings[index] ? "bg-orange-500 border-orange-500" : 
                                                "bg-white border-gray-300 hover:border-orange-400"}`}>
                                            {props.ratings[index] && (
                                                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </button>
                                        <label onClick={() => props.toggleRating(index)} className="text-sm text-gray-700 cursor-pointer select-none">
                                            {label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex-1">
                                        <label htmlFor="min-price-mob" className="block text-xs text-gray-600 mb-1">
                                            Min
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                                            <input id="min-price-mob" type="number" value={props.priceRange.min}
                                                onChange={(e) => props.setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))} 
                                                min="0" placeholder="0" className="w-full
                                             pl-7 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none 
                                             focus:ring-2 focus:ring-orange-500 focus:border-transparent"/>
                                        </div>
                                    </div>

                                    <div className="pt-6 text-gray-400">-</div>

                                    <div className="flex-1">
                                        <label htmlFor="max-price-mob" className="block text-xs text-gray-600 mb-1">
                                            Max
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                                            <input id="max-price-mob" type="number" min="0" placeholder="100" value={props.priceRange.max} defaultValue={89.99}
                                                onChange={(e) => props.setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                                                className="w-full pl-7 pr-3 py-2 text-sm border border-gray-300 rounded-lg
                                                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Cards filteredProducts={props.filteredProducts} addToCart={props.addToCart}></Cards>
        </div>
    )
}

export default RightColumn;