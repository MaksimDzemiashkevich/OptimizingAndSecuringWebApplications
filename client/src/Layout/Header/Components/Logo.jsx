import React from "react";

const Logo = () => {
    return (
        <a href = "/" className="gap-2.5 flex items-center m-2.5">
            <div className="bg-orange-500 rounded-full w-10 h-10 items-center flex justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="lucide lucide-paw-print w-6 h-6 text-white">
                    <circle cx="11" cy="4" r="2"></circle>
                    <circle cx="18" cy="8" r="2"></circle>
                    <circle cx="20" cy="16" r="2"></circle>
                    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
                </svg>
            </div>
            <span className="text-[20px] font-sans font-semibold sm:block hidden">PawsStore</span>
        </a>
    )
}

export default Logo;

