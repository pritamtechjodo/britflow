import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Dropdown on Desktop

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <div className="container mx-auto px-10 md:px-28">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-4 md:border-b">
                {/* Logo and Icons */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Hamburger Icon (Mobile only) */}
                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        <MdMenu className="text-red-600 text-2xl" />
                    </div>

                    {/* Logo */}
                    <div className="text-3xl font-bold text-red-600">britflow</div>

                    {/* Shopping Cart Icon (Mobile only) */}
                    <div className="md:hidden">
                        <MdOutlineShoppingCart className="text-red-600 text-2xl" />
                    </div>
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-full mb-2 md:mb-0 mt-4 md:mt-0 md:px-28">
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="border rounded py-2 px-4 pr-10 w-full bg-gray-100"
                    />
                </div>

                {/* Contact and Icons (For large screens only) */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <LuPhoneCall className="text-red-600 text-2xl" />
                        <span className="text-gray-800">+30479969733</span>
                    </div>
                    <FaRegCircleUser className="text-red-600 text-2xl" />
                    <MdOutlineShoppingCart className="text-red-600 text-2xl" />
                </div>
            </div>

            {/* Splash Menu for Mobile */}
            <div
                className={`fixed inset-0 bg-white transform transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } z-50 md:hidden`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="text-2xl font-bold text-red-600">britflow</div>
                    <MdClose
                        className="text-red-600 text-2xl cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
                <div className="flex flex-col items-center space-y-6 mt-8 font-medium">
                    <Link
                        to="/"
                        className="text-gray-800 hover:text-red-600 text-xl"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>

                    {/* Products with Dropdown (Mobile) */}
                    <div className="relative">
                        <button
                            className="text-gray-800 hover:text-red-600 text-xl"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                            Products
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-8 left-0 bg-white shadow-md rounded py-2 w-40">
                                <Link
                                    to="/"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={toggleMenu}
                                >
                                    Features
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={toggleMenu}
                                >
                                    Hot
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/category"
                        className="text-gray-800 hover:text-red-600 text-xl"
                        onClick={toggleMenu}
                    >
                        Category
                    </Link>
                    <Link
                        to="/"
                        className="text-gray-800 hover:text-red-600 text-xl"
                        onClick={toggleMenu}
                    >
                        Women
                    </Link>
                </div>
            </div>

            {/* Navigation Links (For Desktop) */}
            <div className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 py-4 font-medium">
                <Link to="/" className="text-gray-800 hover:text-red-600">
                    Home
                </Link>

                {/* Products Dropdown (Desktop) */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="flex items-center">
                        <button className="text-gray-800 hover:text-red-600">
                            Products
                        </button>
                        <SlArrowDown className="text-gray-800 hover:text-red-600 ml-2 text-sm" />
                    </div>
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 bg-white shadow-md rounded py-2 w-40">
                            <Link
                                to="/"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Features
                            </Link>
                            <Link
                                to="/"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Hot
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/category" className="text-gray-800 hover:text-red-600">
                    Category
                </Link>
                <Link to="/" className="text-gray-800 hover:text-red-600">
                    Women
                </Link>
            </div>
        </div>
    );
};

export default Header;
