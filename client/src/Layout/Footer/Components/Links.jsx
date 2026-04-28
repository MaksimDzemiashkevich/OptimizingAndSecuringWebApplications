    import React from "react";
    import Logo from "../../Header/Components/Logo";

    const Links = () => {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div className="">
                    <Logo></Logo>
                    <p>Your trusted source for premium pet supplies and accessories.</p>
                </div>
                <div className="">
                    <h3 className="font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                Shop All
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                New Arrivals
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                Best Sellers
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                Sale Items
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 class="font-semibold text-white mb-4">
                        Customer Service
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                Shipping Info
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                Returns Policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-sm text-grey-300 hover:text-orange-600 transition-colors">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 class="font-semibold text-white mb-4">
                        Customer Service
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to get special offers and updates.
                    </p>
                    <div className="flex gap-2">
                        <input type="email" className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-orange-500" placeholder="Your email"></input>
                        <button className="w-12 h-10 flex justify-center items-center bg-orange-500 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-mail w-4 h-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    export default Links;