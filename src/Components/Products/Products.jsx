import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const products = useLoaderData();

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-10 mb-20">
            {   
                products.map(data=> <Product key={data._id} data={data}></Product>) 
            }
        </div>
    );
};

export default Products;