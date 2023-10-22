
const Promote = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-center text-5xl font-semibold text-pink-600 mb-20 pt-10">Coupon Area</h3>
            <div className="p-6 py-12 bg-pink-600 text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl font-bold">Up to <span className="text-7xl text-black font-semibold">50% off</span></h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">MENVERSE</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promote;