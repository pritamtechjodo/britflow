import { FaCheckCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { PiPhoneCallFill, PiTicketFill, PiToteFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HotProduct from "./HotProduct";

const ProductDetails = () => {
    const { state } = useLocation();
    const product = state?.product;
    const { product_name, regular_price, sale_price, product_images } = product || {};
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!product) navigate("/products");
    }, [product, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    const handleCheckout = () => {
        setLoading(true);
        navigate("/checkout");
    };

    const productThumbnails = [1, 2, 3, 4, 5];
    const colors = ["#FF0000", "#FF69B4", "#1E90FF"];
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const sales = ["Hot Sale", "Summer Sale", "Winter Sale", "Black Friday Sale"];
    const deliveryInfo = [
        { description: "Inside Dhaka Delivery Charge", charge: "$80" },
        { description: "Outside Dhaka Delivery Charge", charge: "$150" },
        { description: "Delivery Method", charge: "Cash On Delivery" },
    ];

    // Inside the component
    const [selectedColor, setSelectedColor] = useState(null); // State to track selected color

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    // Inside the component
    const [selectedSize, setSelectedSize] = useState(null); // State to track selected size

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleNavigate = (product) => {
        navigate(`/product-details/${product.id}`, { state: { product } });
    };

    const items = [
        {
            title: "Product Details",
            content: (
                <>
                    <h2 className="font-bold mt-4">Product Name:</h2>
                    <p>Plastic Waterproof Underwater Pouch Bag for Mobile Phones (Multicolor)</p>
                    <h2 className="font-bold mt-4">Specifications:</h2>
                    <p>
                        Lightweight TPU casing with dual swivel lock and sealable clips protect your device from
                        water, snow, and dirt.
                    </p>
                    <h2 className="font-bold mt-4">Package includes:</h2>
                    <p>1 x Plastic Waterproof Underwater Pouch Bag</p>
                </>
            ),
        },
        { title: "Delivery Information", content: <p>Delivery within 5-7 business days.</p> },
        { title: "Return and Refund", content: <p>30-day return policy with a full refund.</p> },
    ];

    if (!product) return null;

    return (
        <div className=" pt-2 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="aspect-w-1 aspect-h-1 w-full">
                            <img
                                className="rounded-md object-cover w-full h-full"
                                src={product_images[0]?.original_url || "https://placehold.co/200x200"}
                                alt={product_name || "Product Image"}
                            />
                        </div>
                        <div className="flex mt-4 overflow-x-auto space-x-2">
                            {productThumbnails.map((num) => (
                                <div key={num} className="aspect-w-1 aspect-h-1 w-20 flex-shrink-0">
                                    <img
                                        className="rounded-md object-cover"
                                        src={product_images[0]?.thumbnail || "https://placehold.co/80x80"}
                                        alt={`Thumbnail ${num}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{product_name || "Product Name"}</h1>
                        <div className="text-red-500 text-2xl font-bold mt-2">
                            ${sale_price || regular_price}
                            {sale_price && (
                                <span className="text-gray-500 text-xl line-through ml-2">
                                    ${regular_price}
                                </span>
                            )}
                        </div>
                        <div className="mt-4">
                        <div className="flex space-x-2 mt-2 items-center">
                            <span className="font-bold">Color:</span>
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleColorClick(color)} // Handle click to select color
                                    className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                                        selectedColor === color ? "border-black scale-110" : "border-transparent"
                                    } transition-transform duration-200`}
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                        </div>
                        <div className="mt-4">
                        <div className="flex space-x-2 mt-2 items-center">
                            <span className="font-bold">Size:</span>
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeClick(size)} // Handle click event
                                    className={`px-4 py-2 border rounded ${
                                        selectedSize === size ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-16 mt-6">
                            <button
                                onClick={handleCheckout}
                                className="bg-red-500 text-white px-20 py-2 rounded flex items-center justify-center"
                                disabled={loading}
                            >
                                <PiToteFill className="mx-1" /> {loading ? "Processing..." : "Place Order"}
                            </button>
                            <button onClick={() => handleNavigate(product)} className="bg-blue-500 text-white px-20 py-2 rounded flex items-center justify-center">
                                <MdShoppingCart className="mx-1" /> Add to Cart
                            </button>
                        </div>
                        <div className="mt-4">
                            <button className="bg-black text-white w-full py-2 rounded flex items-center justify-center">
                                <PiPhoneCallFill className="mr-1" /> Call +40483032323
                            </button>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold">Delivery Option</h2>
                            <div className="mt-2 overflow-x-auto">
                                <table className="w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2 text-left">Description</th>
                                            <th className="border px-4 py-2 text-left">Charge</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {deliveryInfo.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border px-4 py-2">{item.description}</td>
                                                <td className="border px-4 py-2">{item.charge}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" /> Available in stock
                            </div>
                            <div className="flex items-center mt-2">
                                <PiTicketFill className="text-green-500 mr-2" /> Product Code: 3579
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap space-x-2">
                            {sales.map((sale) => (
                                <button
                                    key={sale}
                                    className="bg-gray-200 px-4 py-2 text-sm rounded-full m-2 hover:bg-gray-300"
                                >
                                    {sale}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs for Desktop */}
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
                <div className="hidden md:block">
                    <ul className="flex space-x-4 border-b pb-2">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer font-semibold ${
                                    activeIndex === index ? "text-blue-500" : ""
                                }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">{items[activeIndex]?.content}</div>
                </div>

                {/* Mobile Accordion Layout */}
                <div className="block md:hidden">
                    {items.map((item, index) => (
                        <div key={index} className="border-b">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left font-semibold p-2 flex justify-between items-center"
                                aria-expanded={activeIndex === index}
                            >
                                {item.title}
                                <span className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                                    ▼
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-2">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <HotProduct />
        </div>
    );
};

export default ProductDetails;
