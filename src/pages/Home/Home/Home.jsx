
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Featured from '../Featured/Featured';
import HowItWork from '../HowItWork/HowItWork';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWork />
            <Services  />
            <Brands />
            <Featured />
            <Reviews />
        </div>
    );
};

export default Home;