const circleDimensions = 350;
import heroImage from '../assets/hero_image.png';
import Button from '../components/Button';

const HomePageAbout = () => {
  return (
    <section>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-16 sm:px-16 md:flex-row'>
        <div className='relative flex h-64 justify-center md:w-1/2'>
          <svg
            className='absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-90 lg:left-20 lg:scale-100'
            height={`${circleDimensions}`}
            width={`${circleDimensions}`}
          >
            <circle
              cx={`${circleDimensions / 2}`}
              cy={`${circleDimensions / 2}`}
              r={`${circleDimensions / 2}`}
              strokeWidth='0'
              fill='#C4D951'
            />
          </svg>
          {/* PLACEHOLDER IMAGE CHANGE LATER */}
          <img
            className='absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80'
            src={heroImage}
            alt='Woman cleaning a table, blue bucket on table'
          />
        </div>
        <div className='w-full md:w-1/2'>
          <div className='flex flex-col gap-6'>
            <h3 className='text-center text-5xl font-bold md:text-left'>
              About Us
            </h3>
            <h4 className='text-center text-lg font-bold md:text-left'>
              Serving the Greater Wisconsin area for over 20 years
            </h4>
            <p className='font-light'>
              Our environmentally responsible approach focuses on the proper
              training and use of cleaning solutions as well as proper disposal
              of any harsh detergents/cleaning compounds. Below are some of the
              ways we achieve this level of clean:
            </p>
            <div className='mx-auto md:mx-0'>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
