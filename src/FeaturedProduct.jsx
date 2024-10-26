// FeaturedProduct.js
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart, MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './App.css'; // Import custom CSS if needed

const FeaturedProduct = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from the API
    useEffect(() => {
        fetch('https://kushtiarkulfiwala.com/api/products')
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch products");
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="flex justify-center items-center mt-10 text-green-600 text-2xl">Loading....</div>;
    if (error) return <div className="flex justify-center items-center mt-10 text-red-600 text-2xl">Error: {error}</div>;

    const handleNavigate = (product) => {
        navigate(`/product-details/${product.id}`, { state: { product } });
    };

    return (
        <div className="container mx-auto px-4 my-10 sm:px-8 lg:px-20">
            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 ml-5 sm:mb-0">Featured Products</h1>
                    <div className="text-red-500 text-lg sm:text-xl font-bold flex items-center hidden sm:flex">
                        <span>00</span><span className="text-sm ml-1">D</span> /
                        <span>10</span><span className="text-sm ml-1">H</span> /
                        <span>33</span><span className="text-sm ml-1">M</span> /
                        <span>23</span><span className="text-sm ml-1">S</span>
                    </div>
                    <a href="#" className="text-gray-500 mt-2 mr-6 sm:mt-0">See More</a>
                </div>

                <div className="grid grid-cols-2 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-2 rounded-xl shadow-md">
                            {/* Clickable Image */}
                            <div
                                className="relative cursor-pointer"
                                onClick={() => handleNavigate(product)}
                            >
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    -50%
                                </div>
                                <div className="aspect-square">
                                    <img
                                        src={product.product_images[0]?.original_url || "https://placehold.co/300x300"}
                                        alt={product.product_name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Clickable Product Name */}
                            <h2
                                className="mt-4 text-black text-sm font-bold sm:text-base cursor-pointer"
                                onClick={() => handleNavigate(product)}
                            >
                                {product.product_name}
                            </h2>

                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <span className="text-red-500 text-lg font-bold">
                                        ${product.sale_price}
                                    </span>
                                    <span className="text-gray-500 line-through ml-2">
                                        ${product.regular_price}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <MdStarRate className="text-yellow-500" />
                                    <span className="ml-1 text-gray-700">{product.rating}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => handleNavigate(product)}
                                className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 rounded-lg flex items-center justify-center"
                            >
                                <MdOutlineShoppingCart className="mr-2" /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
