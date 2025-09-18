/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/scrollToTop";
import { MoonLoader } from "react-spinners";
import HomePageHero from "./HomePageHero";
import HomePageAbout from "./HomePageAbout";
import HomePageServices from "./HomePageServices";
import HomePageTestimonials from "./HomePageTestimonials";
import aboutImage from "../assets/MichelleAbout.png";
import heroImage from "../assets/SmallCoverPhoto.png";
import heroImageLandscape from "../assets/FacebookCoverPhoto.png";
import mopping from "../assets/mopping.jpg";
import wavebg from "../assets/wavebg.png";
import { Helmet } from "react-helmet";

const HomePage = ({ openModal }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = [
        new Promise((resolve) => {
          const img1 = new Image();
          img1.src = aboutImage;
          img1.onload = resolve;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.src = heroImage;
          img2.onload = resolve;
        }),
        new Promise((resolve) => {
          const img3 = new Image();
          img3.src = heroImageLandscape;
          img3.onload = resolve;
        }),
        new Promise((resolve) => {
          const img4 = new Image();
          img4.src = mopping;
          img4.onload = resolve;
        }),
        new Promise((resolve) => {
          const img5 = new Image();
          img5.src = wavebg;
          img5.onload = resolve;
        }),
      ];

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
        scrollToTop();
      });
    };

    // Set the loading state to true initially
    setIsLoading(true);

    // Call the function to load the images
    loadImages();
  }, []);

  return (
    <>
      <Helmet>
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16595064549"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16595064549');
          `}
        </script>
        <title>Clean Choice WI | Milwaukee Commercial & Office Cleaning</title>
        <meta
          name="description"
          content="Discover Clean Choice WI: Expert commercial, carpet, and floor care cleaning. Learn about us and read customer reviews. Serving Milwaukee with excellence."
        />
      </Helmet>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={"#497429"} />
        </div>
      ) : (
        <>
          <HomePageHero
            openModal={openModal}
            heroImage={heroImage}
            heroImageLandscape={heroImageLandscape}
          />
          <HomePageAbout aboutImage={aboutImage} />
          <HomePageServices mopping={mopping} />
          <HomePageTestimonials wavebg={wavebg} />
        </>
      )}
    </>
  );
};

export default HomePage;
