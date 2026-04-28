import React from "react";

const Aside = () => {
    return (
        <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">

                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Filters
                </h2>

                <div className="space-y-6">

                    
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">
                            Rating
                        </h3>

                        <div className="space-y-3">

                            {["5+ Stars", "4+ Stars", "3+ Stars"].map((label, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`${index}`}
                                        className="w-4 h-4 accent-orange-500"
                                    />
                                    <label
                                        htmlFor={`${index}`}
                                        className="text-sm text-gray-700 cursor-pointer"
                                    >
                                        {label}
                                    </label>
                                </div>
                            ))}

                        </div>
                    </div>

                    
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">
                            Price Range
                        </h3>

                        <div className="flex items-center gap-3">

                            <div className="flex-1">
                                <label className="block text-xs text-gray-600 mb-1">
                                    Min
                                </label>

                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                            </div>

                            <div className="pt-6 text-gray-400">-</div>

                            <div className="flex-1">
                                <label className="block text-xs text-gray-600 mb-1">
                                    Max
                                </label>

                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                        $
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        defaultValue={89.99}
                                        className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </aside>


    )
}
export default Aside;