import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { _id, productName, brandName, image, price, type, rating, description } = productDetails;



    // handle addToCart 
    const handleAddToCart = (_id) => {
        console.log("clicked on current id", _id);
        fetch('https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/cartProducts', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Successful", "Product added to cart!", "success")
                }
            })
    }

    return (
        <div className="container mx-auto">
            <section className="bg-pink-200">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative overflow-hidden rounded-lg lg:order-last">
                            <img src={image} />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">{productName}</h2>
                            <p className="mt-4 text-gray-600">Brand : {brandName}</p>
                            <p className="mt-4 text-gray-600">Category : {type}</p>
                            <p className="mt-4 text-gray-600">Price : {price}</p>
                            <p className="mt-4 text-gray-600">Rating : {rating}/5</p>
                            <p className="mt-4 text-gray-600">{description}</p>
                            <button onClick={() => handleAddToCart(_id)} className="mt-8 inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;