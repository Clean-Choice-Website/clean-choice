/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { scrollToTop } from '../utils/scrollToTop';
import HomePageHero from './HomePageHero';
import HomePageAbout from './HomePageAbout';
import HomePageServices from './HomePageServices';
import HomePageTestimonials from './HomePageTestimonials';

const HomePage = ({ openModal }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

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
