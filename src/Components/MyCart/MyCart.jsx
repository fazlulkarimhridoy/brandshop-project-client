/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {

    const cartData = useLoaderData();
    const [carts, setCarts] = useState(cartData);

    return (
        <div>
            <div className="container mx-auto flex justify-center">
                <div className="flex flex-col p-6 space-y-4 sm:p-10 bg-pink-50 text-gray-800">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y divide-gray-300">
                        {
                            carts.map(data => <CartProduct carts={carts} setCarts={setCarts} key={data._id} data={data}></CartProduct>)
                        }
                    </ul>

                    {/* buttons */}
                    <div className="flex justify-end space-x-4">
                        <button type="button" className="px-6 py-2 border rounded-md border-pink-600">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </button>
                        <button type="button" className="px-6 py-2 border rounded-md bg-pink-600 text-gray-50 border-pink-600">
                            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;