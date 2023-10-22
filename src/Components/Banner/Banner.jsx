
const Banner = () => {
    return (
        <div className="container mx-auto">
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="T-shirt"
                                    src="https://i.ibb.co/H4RZC8j/Whats-App-Image-2023-10-23-at-01-10-42-bf83df34.jpg"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-pink-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-pink-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">Welcome to <span className="text-pink-600 text-4xl">MENVERSE</span> officials.</h2>

                                <p className="mt-4 text-gray-600">
                                    Our goal is to deliver the best quality products all over Bangladesh. And MENVERSE is an online based shop that operates throughout the country.
                                </p>

                                <a
                                    href="#"
                                    className="mt-8 inline-block rounded border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
                                >
                                    Want to know more?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;