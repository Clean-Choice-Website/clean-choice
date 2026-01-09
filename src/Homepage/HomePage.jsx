// src/pages/HomePage.jsx
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MoonLoader } from "react-spinners";
import { scrollToTop } from "../utils/scrollToTop";

// Sections (components)
import HomePageHero from "./HomePageHero";
import HomePageAbout from "./HomePageAbout";
import HomePageServices from "./HomePageServices";
import HomePageTestimonials from "./HomePageTestimonials";
import HomePageProcess from "./HomePageProcess";
import HomePageWhyChoose from "./HomePageWhyChoose";
import ContactOwner from "./ContactOwner";
import ContactCTA from "./ContactCTA";

// Assets
import aboutImage from "../assets/MichelleAbout.png";
import heroImage from "../assets/SmallCoverPhoto.png";
import heroImageLandscape from "../assets/FacebookCoverPhoto.png";
import alexImage from "../assets/alex.jpeg";
import CommercialCleaning from "../assets/CommercialCleaning.png";
import ConstructionCleaning from "../assets/ConstructionCleaning.jpeg";
import FloorCare from "../assets/FloorCare.png";

const DARK = "#406C2A";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sources = [
      aboutImage,
      heroImage,
      heroImageLandscape,
      alexImage,
      CommercialCleaning,
      ConstructionCleaning,
      FloorCare,
    ];
    Promise.all(
      sources.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    ).then(() => {
      setIsLoading(false);
      scrollToTop();
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Clean Choice WI | Milwaukee Commercial & Office Cleaning</title>
        <meta
          name="description"
          content="Professional commercial and post-construction cleaning for Milwaukee businesses. Reliable teams, consistent results, and flexible schedules. Get a free quote today."
        />
      </Helmet>

      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={DARK} />
        </div>
      ) : (
        <>
          <HomePageHero
            heroImage={heroImage}
            heroImageLandscape={heroImageLandscape}
          />

          <HomePageAbout aboutImage={aboutImage} alexImage={alexImage} />

          <HomePageServices
            commercialImg={CommercialCleaning}
            constructionImg={ConstructionCleaning}
            floorImg={FloorCare}
          />

          {/* MID-PAGE direct contact block */}
          {/* <ContactOwner /> */}

          <HomePageTestimonials />

          <HomePageProcess />

          <HomePageWhyChoose />

          {/* FINAL main quote CTA at the end */}
          {/* <ContactCTA /> */}
          <ContactOwner />
        </>
      )}
    </>
  );
};

export default HomePage;
