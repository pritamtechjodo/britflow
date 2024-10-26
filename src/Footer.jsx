import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="flex space-x-4 mb-4">
                <a href="#" className="text-black text-5xl"><CiFacebook /></a>
                <a href="#" className="text-black text-5xl"><CiInstagram /></a>
                <a href="#" className="text-black text-5xl"><CiTwitter /></a>
                <a href="#" className="text-black text-5xl"><CiLinkedin /></a>
            </div>
                <p className="text-center text-lg text-gray-700 mb-2">
                    Amigo 14 Square, House No: 536/C-6/10 Suite No: B-2,
                </p>
                <p className="text-center text-lg text-gray-700 mb-2">
                    Level-2, Asad Ave, Dhaka 1207.
                </p>
            <div className="flex space-x-2 text-lg text-blue-600 mb-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
                    <span>|</span>
                <a href="#" className="hover:underline">Terms & Condition</a>
                    <span>|</span>
                <a href="#" className="hover:underline">About Us</a>
                    <span>|</span>
                <a href="#" className="hover:underline">Contact Us</a>
            </div>
                <p className="text-center text-lg text-gray-700">
                    ©2024 All rights reserved by Brittlow
                </p>
        </div>
    );
};

export default Footer;