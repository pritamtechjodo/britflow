import { GiPartyPopper } from "react-icons/gi";
import { IoGift } from "react-icons/io5";

const Sale = () => {
    return (
        <div className="hidden sm:flex bg-red-600 text-white text-center py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-bold flex-wrap justify-center items-center space-x-2 sm:space-x-4 mt-5">
            <span className="flex items-center">
                <IoGift className="mr-1" /> Big Sale Alert! <GiPartyPopper className="mx-1" /> Up to 50% OFF on Your Favorite Products!
            </span>
            <span className="flex items-center">
                <IoGift className="mr-1" /> Big Sale Alert! <GiPartyPopper className="mx-1" /> Up to 50% OFF on Your Favorite Products!
            </span>
            <span className="flex items-center">
                <IoGift className="mr-1" /> Big Sale Alert! <GiPartyPopper className="mx-1" /> Up to 50% OFF on Your Favorite Products!
            </span>
        </div>
    );
};

export default Sale;
