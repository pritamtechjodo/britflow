import { useEffect, useState } from "react";
import { MdOutlineShoppingCart, MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Category = () => {
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

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 sm:px-8 md:px-28">
                <div className="flex flex-col md:flex-row gap-4 py-6">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Price Filter</h2>
                            <input type="range" min="95" max="2500" className="w-full mb-2" />
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <span>$95 - $2500</span>
                                <button className="mt-2 text-sm bg-gray-100 p-1 rounded">Reset</button>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Categories</h2>
                            <ul className="text-sm text-gray-700">
                                {[
                                    "Leather", "Classic Watch", "Leather Man Watch", 
                                    "Trending Watch", "Google", "Woman Watch", 
                                    "Tables", "ShopEngine"
                                ].map((category, index) => (
                                    <li key={index} className="flex items-center mb-2">
                                        <input type="checkbox" className="mr-2" defaultChecked={index === 1} />
                                        <span>{category}</span>
                                        <span className="ml-auto text-gray-500">
                                            ({Math.floor(Math.random() * 30) + 1})
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="w-full md:w-3/4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white p-2 rounded-xl shadow-md">
                                    <div className="relative">
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
                                    <h2 className="mt-4 text-black text-sm font-bold sm:text-base">
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
                                        onClick={() => navigate(`/product-details/${product.id}`, { state: { product } })}
                                        className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 rounded-lg flex items-center justify-center"
                                    >
                                        <MdOutlineShoppingCart className="mr-2" /> Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
