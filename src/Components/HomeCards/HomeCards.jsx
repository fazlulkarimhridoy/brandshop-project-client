import { useEffect, useState } from "react";
import HomeCard from "../HomeCard/HomeCard";

const HomeCards = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="container mx-auto mb-20">
            <h3 className="text-pink-600 text-6xl font-semibold text-center mb-20">Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    brands?.map(data => <HomeCard key={data._id} data={data}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default HomeCards;