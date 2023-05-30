import heroImage from "../assets/hero_image.png";

import heroImageLandscape from "../assets/hero_image-landscape.png";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import pin from "../assets/pin.png";

const HomePageHero = ({ openModal }) => {
  return (
    <>
      <main>
        <section className="relative w-full">
          <img
            className="block w-full brightness-[60%] sm:hidden"
            src={heroImage}
            alt="Woman wiping down a table"
          />
          <img
            className="hidden w-full brightness-50 sm:block sm:brightness-[60%]"
            src={heroImageLandscape}
            alt="Woman wiping down a table"
          />
          {/* Div of text that overlays hero image */}
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-4 text-center text-white sm:left-0 sm:mx-16 sm:w-auto sm:-translate-x-0 sm:text-left">
            <h2 className="text-xl font-light">
              Quality Cleaning at a fair price.
            </h2>
            <h1 className="text-3xl font-bold sm:text-5xl">
              State of the art <br /> cleaning techniques
            </h1>

            <div className="flex justify-center sm:block">
              <button
                onClick={openModal}
                className="mx-auto inline-block border-2 border-white px-8 py-2 text-center text-lg font-bold"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </section>
        {/* Contact info div */}
        <div className="flex flex-col items-center justify-center gap-3 bg-slate-200 py-6 text-sm sm:flex-row sm:gap-7 md:gap-16 md:text-base lg:gap-32">
          <div className="flex items-center gap-2 font-bold">
            <img src={phone} alt="Phone icon" className="w-6" />
            <a href="tel:4143109206">(414)310-9206</a>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <img src={email} alt="Email icon" className="w-7" />
            <p>michelle@cleanchoicewi.com</p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <img src={pin} alt="Map pin icon" className="w-6" />
            <p>Southeastern Wisconsin</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePageHero;
