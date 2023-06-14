import { useEffect } from 'react';
import { scrollToTop } from './utils/scrollToTop';
import CleaningImg from './assets/CommercialCleaning_Header.png';
import ContactInfo from './components/ContactInfo';

const Services = ({ openModal }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <ContactInfo />
      <div className='mx-auto max-w-7xl'>
        <section className='flex flex-col items-center justify-between py-4 md:items-start'>
          <h1 className='mt-4 text-3xl font-bold md:mx-8'>Our Services</h1>
          <div className='mx-8 w-full py-4 md:mx-0'>
            <p className='mx-8 rounded-md bg-logoGreen py-4 text-center text-xl font-bold text-white'>
              Serving Waukesha and Milwaukee Counties for over 25 years
            </p>
          </div>
          <div className='mb-4 md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center md:gap-4'>
            <div className='md:ml-8 md:mt-2'>
              <img
                className='hidden md:block md:w-auto lg:w-auto'
                src={CleaningImg}
                alt='Cleaning Image'
              />
            </div>
            <div className='md:mr-8'>
              <div className='my-4 text-center md:mt-2 md:px-8 md:text-left'>
                <h3 className='font-bold'>Commercial Cleaning</h3>
              </div>
              <div className='items-start'>
                <p className='px-8 py-2 md:pr-4'>
                  Our environmentally repsonsible approach focuses on the proper
                  training and use of cleaning solutions as well as proper
                  disposal of any harsh detergents or cleaning compounds. Below
                  are some of the ways we achieve this level of clean:
                </p>
                <div className='mx-8 mt-2'>
                  <div>
                    <img
                      className='w-auto md:hidden md:w-60 lg:w-96'
                      src={CleaningImg}
                      alt='Cleaning Image'
                    />
                  </div>
                  <div>
                    <ul className='ml-4 mt-4 list-disc'>
                      <li className='mb-2'>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li className='mb-2'>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mb:4 md:mb-12 md:flex md:max-w-7xl md:flex-row md:items-center md:gap-4'>
            <div className='md:ml-8 md:mt-2'>
              <img
                className='hidden md:block md:w-auto lg:w-auto'
                src={CleaningImg}
                alt='Cleaning Image'
              />
            </div>
            <div className='mb-4 md:mb-0 md:mr-8'>
              <div className='my-4 text-center md:mt-2 md:px-8 md:text-left'>
                <h3 className='font-bold'>Carpet Cleaning</h3>
              </div>
              <div className='items-start'>
                <p className='px-8 py-2 md:pr-4'>
                  Our environmentally repsonsible approach focuses on the proper
                  training and use of cleaning solutions as well as proper
                  disposal of any harsh detergents or cleaning compounds. Below
                  are some of the ways we achieve this level of clean:
                </p>
                <div className='mx-8 mt-2'>
                  <div>
                    <img
                      className='w-auto md:hidden md:w-60 lg:w-96'
                      src={CleaningImg}
                      alt='Cleaning Image'
                    />
                  </div>
                  <div>
                    <ul className='ml-4 mt-4 list-disc'>
                      <li className='mb-2'>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li className='mb-2'>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex md:max-w-7xl md:flex-row md:items-center md:gap-4'>
            <div className='md:ml-8 md:mt-2'>
              <img
                className='hidden md:block md:w-auto lg:w-auto'
                src={CleaningImg}
                alt='Cleaning Image'
              />
            </div>
            <div className='mb-8 md:mr-8'>
              <div className='my-4 text-center md:mt-2 md:px-8 md:text-left'>
                <h3 className='font-bold'>Floor Care {'&'} Tile Re-waxing</h3>
              </div>
              <div className='items-start'>
                <p className='px-8 py-2 md:pr-4'>
                  Our environmentally repsonsible approach focuses on the proper
                  training and use of cleaning solutions as well as proper
                  disposal of any harsh detergents or cleaning compounds. Below
                  are some of the ways we achieve this level of clean:
                </p>
                <div className='mx-8 mt-2'>
                  <div>
                    <img
                      className='w-auto md:hidden md:w-60 lg:w-96'
                      src={CleaningImg}
                      alt='Cleaning Image'
                    />
                  </div>
                  <div>
                    <ul className='ml-4 mt-4 list-disc'>
                      <li className='mb-2'>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li className='mb-2'>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                      <li>
                        This service includes this cool stuff that takes about a
                        sentence at least
                      </li>
                    </ul>
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
