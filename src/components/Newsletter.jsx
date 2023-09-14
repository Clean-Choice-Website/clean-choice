import Letter from "../assets/Newsletter.pdf";

const Newsletter = () => {
  return (
    <>
      <p className=" bg-logoGreen py-5 text-center font-semibold text-white sm:text-lg">
        Check out our latest company newsletter{" "}
        <a
          href={Letter}
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-all hover:text-[#c4da50]"
        >
          here
        </a>
      </p>
    </>
  );
};

export default Newsletter;
