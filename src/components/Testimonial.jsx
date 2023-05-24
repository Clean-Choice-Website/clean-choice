import defaultUser from "../assets/default-user.png";

/* eslint-disable react/prop-types */
const Testimonial = (props) => {
  const { children } = props;
  const name = props.name || "John Doe";
  const image = props.image || defaultUser;
  return (
    <div className="flex h-auto w-full max-w-[450px] flex-col items-center rounded-xl border bg-white px-6 py-4 shadow-md lg:w-[450px] lg:flex-row">
      <div className="flex flex-col items-center lg:w-1/3">
        <img className="w-16" src={image} alt="Customer image" />
        <p className="font-bold">{name}</p>
      </div>
      <p className="lg:w-2/3">
        {`"`}
        {children}
        {`"`}
      </p>
    </div>
  );
};

export default Testimonial;
