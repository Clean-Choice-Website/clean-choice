const circleDimensions = 350;
import Button from "../components/Button";

const HomePageAbout = ({ aboutImage }) => {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-16 sm:px-16 md:flex-row lg:pb-32">
        <div className="relative flex h-64 justify-center md:w-1/2">
          <svg
            className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-90 lg:left-20 lg:scale-100"
            height={`${circleDimensions}`}
            width={`${circleDimensions}`}
          >
            <circle
              cx={`${circleDimensions / 2}`}
              cy={`${circleDimensions / 2}`}
              r={`${circleDimensions / 2}`}
              strokeWidth="0"
              fill="#C4D951"
            />
          </svg>
          {/* PLACEHOLDER IMAGE CHANGE LATER */}
          <img
            className="absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
            src={aboutImage}
            alt="Woman cleaning a table, blue bucket on table"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            <h3 className="text-center text-5xl font-bold md:text-left">
              About Us
            </h3>
            <h4 className="text-center text-lg font-bold md:text-left">
              Serving Milwaukee, Wisconsin, and the surrounding areas for over
              10 years
            </h4>
            <p className="font-light">
              At Clean Choice, it’s our people who make the difference. Our
              dedicated team is highly trained, detail-focused, and committed to
              delivering consistent, top-quality results. We go the extra mile
              with clear communication, reliable follow-through, and free custom
              proposals. Every client, big or small, deserves a spotless space
              and a partner they can count on.
            </p>
            <div className="mx-auto md:mx-0">
              <Button to={"about"}>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
