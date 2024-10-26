const ProductCard = ({ isNew, imageAlt, badgeColor = 'blue' }) => {
    return (
        <div className="sm:w-60 ml-6 md:w-36 h-48 rounded-lg overflow-hidden">
            <div className="relative">
                {isNew && (
                    <span
                    className={`absolute top-0 left-0 bg-${badgeColor}-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg`}
                    >
                    New
                    </span>
                )}
                <img
                    src="https://placehold.co/128x128"
                    alt={imageAlt}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="bg-gradient-to-t from-gray-800 to-transparent text-center text-white text-sm py-2">
            Kids toy
            </div>
        </div>
    );
};

export default ProductCard;