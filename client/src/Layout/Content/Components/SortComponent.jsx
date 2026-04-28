import React, { useState } from "react";

const SortComponent = ({ switchAside, setSwitchAside }) => {

    

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            <div className="flex items-center gap-2">

                <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 
                transition-colors" onClick={() => (setSwitchAside(switchAside => !switchAside))}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <line x1="21" x2="14" y1="4" y2="4" />
                        <line x1="10" x2="3" y1="4" y2="4" />
                        <line x1="21" x2="12" y1="12" y2="12" />
                        <line x1="8" x2="3" y1="12" y2="12" />
                        <line x1="21" x2="16" y1="20" y2="20" />
                        <line x1="12" x2="3" y1="20" y2="20" />
                        <line x1="14" x2="14" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="10" y2="14" />
                        <line x1="16" x2="16" y1="18" y2="22" />
                    </svg>

                    <span>Filters</span>

                </button>

                <p className="text-sm text-gray-600">
                    6 products
                </p>

            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">

                <label className="text-sm text-gray-700">
                    Sort by:
                </label>

                <select className="w-full sm:w-48 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">

                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>

                </select>

            </div>

        </div>
    )
}

export default SortComponent;