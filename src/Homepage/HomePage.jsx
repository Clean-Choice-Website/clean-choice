import HomePageHero from "./HomePageHero";
import HomePageAbout from "./HomePageAbout";
import HomePageServices from "./HomePageServices";
import HomePageTestimonials from "./HomePageTestimonials";

const HomePage = ({ openModal }) => {
  return (
    <>
      <HomePageHero openModal={openModal} />
      <HomePageAbout />
      <HomePageServices />
      <HomePageTestimonials />
    </>
  );
};

export default HomePage;
