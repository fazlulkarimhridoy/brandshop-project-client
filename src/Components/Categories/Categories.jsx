
const Categories = () => {
    return (
        <div className="container mx-auto">
            <section className="py-6 bg-pink-600 text-gray-100 mb-20">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <h1 className="text-4xl font-bold text-center sm:text-5xl">Product Categories</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                        {/* first category */}
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/X2ckSPR/2.jpg" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">Half Sleeve</p>
                            </div>
                        </div>
                        {/* second category */}
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/6ZFJbPt/310146595-132704426179779-4259273617859059703-n.jpg" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">Full Sleeve</p>
                            </div>                   
                        </div>
                        {/* third category */}
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/P1WxYxJ/296430785-135287005862723-4418127705155979713-n.jpg" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">Sleeveless</p>
                            </div>
                        </div>
                        {/* fourth category */}
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/197wqfT/305816154-473883924633458-4359961601734220334-n.jpg" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">Sweat Shirts</p>
                            </div>
                        </div>
                        {/* fifth category */}
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/230WWgk/394220088-304860345728861-5413028185596549591-n.jpg" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">Hoodies</p>
                            </div>
                        </div>
                        {/* sixth category */}
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/R97XqyY/288876909-186680673700848-9170229499590489370-n.jpg" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">Polo T-shirts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;