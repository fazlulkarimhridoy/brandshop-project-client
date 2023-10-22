/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({ data }) => {
    const {_id, productName, brandName, image, price, type, rating, description } = data;

    // details handler
    const handleDetails = _id =>{
        console.log(_id);
    }

    // update handler
    const handleUpdate = _id =>{
        console.log(_id);
    }

    return (
        <div className="card bg-pink-100 border">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{productName}</h2>
                <h3 className="text-lg font-medium text-gray-500">Brand Name : {brandName}</h3>
                <h4 className="text-lg font-medium text-gray-500">Type : {type}</h4>
                <h4 className="text-lg font-medium text-gray-500">Price : {price}$</h4>
                <h4 className="text-lg font-medium text-gray-500">Rating : {rating}/5</h4>
                <p className="text-md font-normal text-gray-500">{description}</p>
                <div>
                    <Link to={`/product/${_id}`}><button onClick={()=>handleDetails(_id)} className="btn bg-pink-600 text-white w-1/2">Details</button></Link>
                    <Link to={`/updateProduct/${_id}`}><button onClick={()=>handleUpdate(_id)} className="btn bg-orange-600 text-white w-1/2">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;