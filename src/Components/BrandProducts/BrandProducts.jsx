import { useLoaderData } from "react-router-dom";
import SortedProduct from "../SortedProduct/SortedProduct";
import NoData from "../NoData/NoData";

const BrandProducts = () => {

    const brandProduct = useLoaderData();
    console.log(brandProduct);

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-10 mb-20">
            {   
                brandProduct.length > 1 ?
                brandProduct.map(data => <SortedProduct key={data._id} data={data}></SortedProduct>)
                :
                <NoData></NoData>
            }
        </div>
    );
};

export default BrandProducts;