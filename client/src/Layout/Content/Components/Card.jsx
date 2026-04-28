import React from "react";

const Card = () => {
    return (
        <a href="/product/6"
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-orange-300 block">

            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">

                <img
                    src="https://images.unsplash.com/photo-1764813824215-4afa03d1a011?auto=format&fit=crop&w=1080&q=80"
                    alt="Airline-Approved Pet Travel Carrier"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">

                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">

                        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                            Airline-Approved Pet Travel Carrier
                        </h3>

                        <div className="flex items-center gap-1 mb-3">

                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={`w-3.5 h-3.5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            ))}

                            <span className="text-xs text-gray-600 ml-1">(4)</span>

                        </div>

                        <div className="flex items-center justify-between">

                            <p className="text-xl font-bold text-orange-500">
                                $54.99
                            </p>

                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                                aria-label="Add to cart"
                            >
                                
                            </button>

                        </div>

                    </div>
                </div>

                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-sm font-bold">$54.99</span>
                </div>

            </div>

            <div className="p-4 group-hover:opacity-50 transition-opacity duration-300">

                <h3 className="text-sm font-medium text-gray-900 mb-1.5 line-clamp-2 min-h-[2.5rem]">
                    Airline-Approved Pet Travel Carrier
                </h3>

            </div>

        </a>
    )
}

export default Card;