import Aboutme from "../Components/Aboutme";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Imageslider from "../Components/Imageslider";
import Qualities from "../Components/Qualities";

const Home = () => {
  return (
    <main className="bg-black">
      <Header />
      <Imageslider />
      <Aboutme />
      <Qualities />
      <Footer />
    </main>
  );
};

export default Home;
