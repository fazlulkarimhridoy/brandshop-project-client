import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import HomeCards from "../../Components/HomeCards/HomeCards";
import Promote from "../../Components/Promote/Promote";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCards></HomeCards>
            <Categories></Categories>
            <Promote></Promote>
            <Footer></Footer>
        </div>
    );
};

export default Home;