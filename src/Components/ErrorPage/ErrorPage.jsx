import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center p-16 bg-white text-gray-500">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, the page is not found.</p>
                        <p className="mt-4 mb-8 text-gray-400">Want to go back to Home Page?</p>
                        <Link to='/'><button className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Home Page</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;