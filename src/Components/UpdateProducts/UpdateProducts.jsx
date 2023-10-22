import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateProducts = () => {
    const products = useLoaderData();
    const { _id, productName, brandName, image, price, type, rating, description } = products;
    const location = useLocation();
    const navigate = useNavigate();

    const handleUpdateProduct = (event) => {

        // getting form data
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;

        // converting form data as object
        const updatedProduct = { productName, brandName, image, price, type, rating, description }

        // fetching data from server using api
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                // checking if data is successfully added
                console.log(data);
                if (data.modifiedCount > 0) {
                    // sweet alert
                    swal("Successfully Updated!", "Product updated!", "success");
                    navigate(location?.state ? location.state : '/')
                }
            })
    }







    return (
        <div className="container mx-auto">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        {/* Details area */}
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                Fashion is the core of style. You can update your desired products here choosing brands.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-6xl font-bold text-pink-600">
                                    Update Products Here
                                </a>

                                <address className="mt-2 not-italic">
                                    Menverse Official Page
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-pink-200 p-8 lg:col-span-3 lg:p-12">
                            {/* product form */}
                            <form onSubmit={handleUpdateProduct} className="space-y-4">
                                {/* Product Name & Brand Name */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <input required
                                            className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Product Name"
                                            name="productName"
                                            defaultValue={productName}
                                            type="text"
                                        />
                                    </div>

                                    <div>
                                        <select required defaultValue={brandName} name="brandName" className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm">
                                            <option value="">Select Brand</option>
                                            <option value="Adidas">Adidas</option>
                                            <option value="Puma">Puma</option>
                                            <option value="Nike">Nike</option>
                                            <option value="UnderArmour">Under Armour</option>
                                            <option value="Gucci">Gucci</option>
                                            <option value="Dolce&Gabbana">Dolce & Gabbana</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Image & Price */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <input required
                                            className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Image"
                                            name="image"
                                            defaultValue={image}
                                            type="text"
                                        />
                                    </div>

                                    <div>
                                        <input required
                                            className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Price"
                                            name="price"
                                            defaultValue={price}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {/* Type & Rating */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <select required defaultValue={type} name="type" className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm">
                                            <option value="">Select Type</option>
                                            <option value="Half Sleeve">Half Sleeve</option>
                                            <option value="Full Sleeve">Full Sleeve</option>
                                            <option value="Sleeveless">Sleeveless</option>
                                            <option value="Polo T-shirts">Polo T-shirts</option>
                                            <option value="Sweat shirts">Sweat Shirts</option>
                                            <option value="Hoodies">Hoodies</option>
                                        </select>
                                    </div>

                                    <div>
                                        <input required
                                            className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Rating"
                                            name="rating"
                                            defaultValue={rating}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {/* Description Area */}
                                <div>
                                    <input required
                                        className="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Describe the product.."
                                        name="description"
                                        defaultValue={description}
                                    ></input>
                                </div>

                                {/* submit button */}
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-pink-600 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Update Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateProducts;