/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const { name, image } = data;


    // handleBrandSort
    const handleBrandSort = brand =>{
        console.log(brand);
    }

    return (
        <div>
            <div className=" bg-pink-200 text-black border-2">
                <img src={image} alt="" className="object-cover object-center w-full h-80" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracki">{name}</h2>
                    </div>
                    <Link to={`/allProducts/${name}`}><button onClick={()=>handleBrandSort(data.name)} type="button" className="flex items-center justify-center w-full p-3 font-semibold hover:bg-sky-600 rounded-md bg-pink-600 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;