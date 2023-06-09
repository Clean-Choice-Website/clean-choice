/* eslint-disable react/prop-types */
import heroImage from '../assets/hero_image.png';
import heroImageLandscape from '../assets/hero_image-landscape.png';
import ContactInfo from '../components/ContactInfo';

const HomePageHero = ({ openModal }) => {
  return (
    <>
      <main>
        <div className='sm:hidden'>
          <ContactInfo />
        </div>
        <section className='relative w-full'>
          <img
            className='block w-full brightness-[60%] sm:hidden'
            src={heroImage}
            alt='Woman wiping down a table'
          />
          <img
            className='hidden w-full brightness-50 sm:block sm:brightness-[60%]'
            src={heroImageLandscape}
            alt='Woman wiping down a table'
          />
          {/* Div of text that overlays hero image */}
          <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-4 text-center text-white sm:left-0 sm:mx-16 sm:w-auto sm:-translate-x-0 sm:text-left'>
            <h2 className='text-xl font-light'>
              Quality Cleaning at a fair price.
            </h2>
            <h1 className='text-3xl font-bold sm:text-5xl'>
              State of the art <br /> cleaning techniques
            </h1>

            <div className='flex justify-center sm:block'>
              <button
                onClick={openModal}
                className='mx-auto inline-block border-2 border-white px-8 py-2 text-center text-lg font-bold transition-all hover:bg-[#4e5553]'
              >
                Get a Quote
              </button>
            </div>
          </div>
        </section>
        {/* Contact info div */}
        <div className='hidden sm:block'>
          <ContactInfo />
        </div>
      </main>
    </>
  );
};

export default HomePageHero;
