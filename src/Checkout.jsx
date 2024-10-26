import { FaRegTrashAlt } from "react-icons/fa";
import { PiToteFill } from "react-icons/pi";

const Checkout = () => {
    return (
        <div className="pt-2 pb-10 bg-gray-100 min-h-screen">
            <div className="max-w-7xl bg-white mx-auto p-6 mb-6 rounded-lg shadow-md">
                <p className="text-red-600 text-sm mb-4">
                    * আপনার নাম, ঠিকানা, মোবাইল নাম্বার, নিয়ে অর্ডার কনফার্ম বাটনে ক্লিক করুন
                </p>
                <form className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700">আপনার নাম *</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="আপনার নাম লিখুন"
                        />
                    </div>

                    {/* Mobile Field */}
                    <div>
                        <label className="block text-gray-700">আপনার মোবাইল *</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="মোবাইল নাম্বার লিখুন"
                        />
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-gray-700">আপনার ঠিকানা *</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="ঠিকানা লিখুন"
                        />
                    </div>

                    {/* Delivery Area */}
                    <div>
                        <label className="block text-gray-700 mb-2">ডেলিভারি এলাকা *</label>
                        <div className="flex flex-col md:justify-start md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                            <label className="flex items-center space-x-2 bg-gray-100 md:w-2/4 p-3 rounded-md">
                                <input type="radio" name="delivery_area" className="form-radio" />
                                <span>ঢাকা ডিভিশন - ৬০ টাকা</span>
                            </label>
                            <label className="flex items-center space-x-2 bg-gray-100 md:w-2/4 p-3 rounded-md">
                                <input type="radio" name="delivery_area" className="form-radio" />
                                <span>ঢাকার বাইরে - ১২০ টাকা</span>
                            </label>
                        </div>
                    </div>

                    {/* Product Section */}
                    <div>
                        <div className="flex items-center space-x-4 flex-wrap pb-5 border-b border-gray-300">
                            <img
                                src="https://placehold.co/50x50"
                                alt="Fitness Equipment & Home Decor"
                                className="w-16 h-16 rounded object-cover"
                            />
                            <div className="w-full md:w-auto flex-1">
                                <div className="text-gray-600 font-bold mb-1">
                                    Fitness Equipment & Home Decor
                                </div>
                                
                                <button type="button" className="bg-gray-200 px-3 py-1 rounded">
                                    -
                                </button>
                                <input
                                    className="border border-gray-300 px-2 py-1 rounded w-16 ml-1 mr-1 text-center"
                                    type="number"
                                    min="1"
                                />
                                <button type="button" className="bg-gray-200 px-3 py-1 rounded">
                                    +
                                </button>
                                <button type="button" className="bg-red-600 p-2 rounded ml-3">
                                    <FaRegTrashAlt className="text-white" />
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-red-600 font-bold">2 X $900</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-300 py-3">
                            <span className="font-bold text-gray-700">Delivery Charge</span>
                            <span className="font-bold text-gray-700">$80</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                            <span className="font-bold text-gray-700">Total</span>
                            <span className="text-red-600 font-bold">$1880.00</span>
                        </div>
                    </div>

                    {/* Coupon Section */}
                    <div>
                        <label className="block font-bold mb-2 text-gray-700">Have a coupon code?</label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Enter coupon code"
                            />
                            <button type="button" className="bg-gray-100 px-4 py-2 rounded">
                                Apply
                            </button>
                        </div>
                    </div>

                    {/* Delivery Method */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Delivery Method *</label>
                        <div className="flex flex-col md:justify-start md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                            <label className="flex items-center space-x-2 bg-gray-100 md:w-2/4 p-3 rounded-md">
                                <input type="radio" name="delivery_method" className="form-radio" />
                                <span className="font-medium text-gray-700">Free Delivery</span>
                            </label>
                            <label className="flex items-center space-x-2 bg-gray-100 md:w-2/4 p-3 rounded-md">
                                <input type="radio" name="delivery_method" className="form-radio" />
                                <span className="font-medium text-gray-700">Cash on Delivery</span>
                            </label>
                            <label className="flex items-center space-x-2 bg-gray-100 md:w-2/4 p-3 rounded-md">
                                <input type="radio" name="delivery_method" className="form-radio" />
                                <span className="font-medium text-gray-700">bKash</span>
                            </label>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox" />
                        <span>
                            I agree with the{" "}
                            <a href="#" className="text-blue-600">
                                Terms and Conditions
                            </a>
                        </span>
                    </div>

                    {/* Checkout Button */}
                    <button type="button" className="w-full bg-red-600 text-white px-14 py-2 rounded flex items-center justify-center">
                        <PiToteFill className="mr-1" /> Proceed to Checkout
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
