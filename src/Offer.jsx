import b1 from './assets/b1.png';
import b2 from './assets/b2.png';

const Offer = () => {
    return (
        <div className="container mx-auto px-4 my-10 sm:px-8 lg:px-28">
            <div className="bg-gray-100 flex flex-col items-start">
                    <div className="w-full bg-gradient-to-r from-pink-500 to-purple-500 p-8 flex items-center justify-between">
                        <div className="text-white">
                            <div className="text-white border font-bold px-2 py-1 inline-block mb-2">25% OFF</div>
                            <h1 className="text-4xl">A NEW LOOK <br /> FOR <span className="text-white font-bold">YOUR WATCH</span></h1>
                            <p className="mt-2">Availability 270 in Stock</p>
                        </div>
                        <div className="flex items-center space-x-14">
                            <img src={b1} alt="Purple watch" className="w-32 h-32 object-cover" />
                            <img src={b2} alt="Smartwatch" className="w-32 h-32 object-cover" />
                        </div>
                    </div>
                    <div className="mt-4 flex space-x-1 md:space-x-4">
                        <button className="bg-white text-gray-800 font-semibold md:py-2 px-3 py-2 md:px-4 rounded-full shadow">Hot Sale</button>
                        <button className="bg-white text-gray-800 font-semibold md:py-2 px-3 py-2 md:px-4 rounded-full shadow">Summer Sale</button>
                        <button className="bg-white text-gray-800 font-semibold md:py-2 px-3 py-2 md:px-4 rounded-full shadow">Winter Sale</button>
                        <button className="bg-white text-gray-800 font-semibold md:py-2 px-3 py-2 md:px-4 rounded-full shadow">Black Friday Sale</button>
                        <button className="bg-white text-gray-800 font-semibold md:py-2 px-3 3-2 md:px-4 rounded-full shadow">Flash Sale</button>
                    </div>
                </div>
        </div>
    );
};

export default Offer;