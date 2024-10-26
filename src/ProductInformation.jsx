const ProductInformation = () => {
    return (
        <div className="pl-60 pr-60">
                    <div className="bg-white p-5 rounded">
                        <div className="border-b border-gray-300 mb-4">
                            <ul className="flex space-x-4">
                                <li className="text-red-500 font-semibold">Product Details</li>
                                <li className="font-semibold">Delivery Information</li>
                                <li className="font-semibold">Return and Refund</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-semibold">Product Name:</h2>
                                <p>Plastic Waterproof Underwater Pouch Bag for Mobile Phones (Multicolor) Product Type: Pouch Bag</p>
                            </div>
                            <div>
                                <h2 className="font-semibold">Specifications:</h2>
                                <p>Full protection lightweight TPU casing with dual swivel lock and sealable closure clips safeguard your device against water, snow, dust, and dirt. Superior water-resistant protection up to 98 feet (30 meters). Offers waterproof/ snowproof/ dirt-proof protection for your device while maintaining full touch screen functionality.</p>
                            </div>
                            <div>
                                <h2 className="font-semibold">Package Includes:</h2>
                                <p>1 x Plastic Waterproof Underwater Pouch Bag</p>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default ProductInformation;