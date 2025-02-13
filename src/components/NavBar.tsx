import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";

export const NavBar = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <nav className="fixed flex z-50 w-4/5 bg-white/70 shadow-lg p-4 text-black mx-auto left-1/2 -translate-x-1/2 rounded-md mt-6">
            <div className="container mx-auto flex items-center justify-between">
                <button className="font-bold text-4xl atma-bold">Locallie</button>

                <div className="flex items-center gap-8">
                {isLoggedIn ? (
                    <button className="atma-medium text-lg flex items-center">
                    My Account
                    <span className="px-1">
                        <CircleUserRound className="text-2xl" />
                    </span>
                    </button>
                ) : (
                    <button className="atma-medium text-xl flex items-center">
                    Sign in
                    <span className="px-1">
                        <CircleUserRound className="text-2xl" />
                    </span>
                    </button>
                )}
                <button>
                    <ShoppingCart className="text-2xl" />
                </button>
                </div>
            </div>
        </nav>


    )
};