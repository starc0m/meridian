import Aboute from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import Howblock from "../Components/Howblock/Howblock";
import PopularDishes from "../Components/popular-dishes/PopularDishes";
import Footer from "../Components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <PopularDishes />
      <Aboute/>
      <Howblock />
      <Footer/>
    </>
  );
};

export default Home;
