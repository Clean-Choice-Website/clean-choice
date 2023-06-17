import { useEffect } from 'react';
import { scrollToTop } from './utils/scrollToTop';
import CleaningImg from './assets/CommercialCleaning_Header.png';
import CommercialCleaning from './assets/CommercialCleaning.png';
import FloorCare from './assets/FloorCare.png';
import ContactInfo from './components/ContactInfo';

const Services = ({ openModal }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <ContactInfo />
      <div className='mx-auto max-w-7xl'>
        <section className='flex flex-col items-center justify-between py-4 lg:items-start'>
          <h1 className='mt-4 text-3xl font-bold md:mx-8'>Our Services</h1>
          <div className='mx-8 w-full py-4 md:mx-0 lg:pb-10'>
            <p className='mx-8 rounded-md bg-logoGreen py-4 text-center text-xl font-bold text-white'>
              Serving Waukesha and Milwaukee Counties for over 25 years
            </p>
          </div>
          <div className='mx-8 flex flex-col gap-6 md:mx-12 lg:mx-0'>
            <div className='mb-4 md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center lg:gap-4'>
              <div className='md:mt-2 lg:ml-8 lg:basis-1/2'>
                <img
                  className='hidden max-w-xl lg:block lg:w-auto'
                  src={CommercialCleaning}
                  alt='Commercial Cleaning Image'
                />
              </div>
              <div className='lg:mr-8 lg:basis-1/2'>
                <div className='my-4 text-center lg:mt-2 lg:px-8 lg:text-left'>
                  <h3 className='text-3xl font-bold'>Commercial Cleaning</h3>
                </div>
                <div className='items-start'>
                  <p className='px-8 py-2 md:pr-4'>
                    Our environmentally repsonsible approach focuses on the
                    proper training and use of cleaning solutions as well as
                    proper disposal of any harsh detergents or cleaning
                    compounds. Below are some of the ways we achieve this level
                    of clean:
                  </p>
                  <div className='mx-8 mt-2'>
                    <div>
                      <img
                        className='w-auto lg:hidden'
                        src={CommercialCleaning}
                        alt='Commercial Cleaning Image'
                      />
                    </div>
                    <div>
                      <ul className='ml-4 mt-4 list-disc text-lg'>
                        <li className='mb-2'>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                        <li className='mb-2'>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                        <li>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb:4 md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center lg:gap-4'>
              <div className='mb-4 md:mb-0 lg:basis-1/2'>
                <div className='my-4 text-center lg:ml-8 lg:mt-2 lg:text-left'>
                  <h3 className='text-3xl font-bold'>Carpet Cleaning</h3>
                </div>
                <div className='items-start'>
                  <p className='ml-8 py-2 md:pr-4'>
                    Our environmentally repsonsible approach focuses on the
                    proper training and use of cleaning solutions as well as
                    proper disposal of any harsh detergents or cleaning
                    compounds. Below are some of the ways we achieve this level
                    of clean:
                  </p>
                  <div className='mx-8 mt-2'>
                    <div>
                      <img
                        className='w-auto lg:hidden'
                        src={CleaningImg}
                        alt='Cleaning Image'
                      />
                    </div>
                    <div>
                      <ul className='ml-4 mt-4 list-disc text-lg'>
                        <li className='mb-2'>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                        <li className='mb-2'>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                        <li>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:mt-2 lg:mx-8 lg:basis-1/2'>
                <img
                  className='hidden max-w-xl lg:block lg:w-auto'
                  src={CleaningImg}
                  alt='Cleaning Image'
                />
              </div>
            </div>
            <div className='lg:flex lg:max-w-7xl lg:flex-row lg:items-center lg:gap-4'>
              <div className='basis-1/2 md:mt-2 lg:ml-8'>
                <img
                  className='hidden max-w-xl lg:block lg:w-auto'
                  src={FloorCare}
                  alt='Floor Care Image'
                />
              </div>
              <div className='mb-8 lg:mr-8 lg:basis-1/2'>
                <div className='my-4 text-center lg:mt-2 lg:px-8 lg:text-left'>
                  <h3 className='text-3xl font-bold'>
                    Floor Care {'&'} Tile Re-waxing
                  </h3>
                </div>
                <div className='items-start'>
                  <p className='px-8 py-2 md:pr-4'>
                    Our environmentally repsonsible approach focuses on the
                    proper training and use of cleaning solutions as well as
                    proper disposal of any harsh detergents or cleaning
                    compounds. Below are some of the ways we achieve this level
                    of clean:
                  </p>
                  <div className='mx-8 mt-2'>
                    <div>
                      <img
                        className='w-auto lg:hidden'
                        src={FloorCare}
                        alt='Floor Care Image'
                      />
                    </div>
                    <div>
                      <ul className='ml-4 mt-4 list-disc text-lg'>
                        <li className='mb-2'>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                        <li className='mb-2'>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                        <li>
                          This service includes this cool stuff that takes about
                          a sentence at least
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='mb-4 flex flex-col items-center justify-center md:mx-8 md:mt-6 md:justify-start'>
          <p className='mb-6 font-bold'>Have a Question regarding a service?</p>
          <button
            onClick={openModal}
            className='inline-block w-32 rounded bg-logoGreen py-3 text-center text-xl font-bold text-white hover:bg-logoGreenHover'
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
