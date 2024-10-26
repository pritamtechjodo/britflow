import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import bannerImg from "./assets/banner.png";

// Categories array
const categories = [
    { name: 'Kids Toy', dropdown: ['New', 'Old'] },
    { name: 'Fitness Equipment', dropdown: ['New', 'Old'] },
    { name: 'Hot Offer', dropdown: ['New', 'Old'] },
    { name: 'Writing Book', dropdown: ['New', 'Old'] },
    { name: 'Health & Beauty', dropdown: ['New', 'Old'] },
    { name: 'Jewelry', dropdown: ['New', 'Old'] },
    { name: 'Home and Living', dropdown: ['New', 'Old'] },
    { name: 'Wallet', dropdown: ['New', 'Old'] },
    { name: 'All Categories', dropdown: ['New', 'Old'] }
];

const Banner = () => {
    const [openDropdown, setOpenDropdown] = useState(null); // Track which category is open

    return (
        <div className="container mx-auto px-4 sm:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row min-h-20 p-4 lg:ml-5 gap-4">
                {/* Sidebar */}
                <div className="hidden md:w-1/4 bg-white rounded-lg shadow-lg md:block font-medium">
                    <div className="bg-red-500 text-white text-lg font-bold p-4 rounded-t-lg flex items-center">
                        <FaBars className="mr-2" />
                        Top Categories
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="relative group p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer h-12"
                                onMouseEnter={() => setOpenDropdown(index)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {category.name}
                                <GoChevronRight />
                                
                                {/* Dropdown */}
                                {openDropdown === index && (
                                    <ul className="absolute left-full top-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-10">
                                        {category.dropdown.map((item, i) => (
                                            <li
                                                key={i}
                                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Banner Image */}
                <div className="w-full lg:w-3/4">
                    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={bannerImg}
                            alt="Woman holding shopping bags and a credit card"
                            className="w-full h-48 sm:h-64 lg:h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
