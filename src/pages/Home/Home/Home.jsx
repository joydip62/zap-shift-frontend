
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Featured from '../Featured/Featured';
import HowItWork from '../HowItWork/HowItWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWork />
            <Services  />
            <Brands />
            <Featured />
        </div>
    );
};

export default Home;