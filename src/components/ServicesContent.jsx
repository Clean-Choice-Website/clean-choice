const ServicesContent = ({ image, name, info, list, row }) => {
  return (
    <div className={row}>
      <div className="hidden md:mt-2 lg:block lg:basis-1/2">
        <img className="max-w-xl lg:w-full" src={image} alt="Cleaning Image" />
      </div>
      <div className="lg:basis-1/2">
        <div className="my-4 text-center lg:mt-2 lg:text-left">
          <h2 className="text-3xl font-bold">{name}</h2>
        </div>
        <div className="items-start">
          <p className="py-2 md:px-0">{info}</p>
          <div className="mt-2">
            <div className="lg:hidden">
              <img className="w-auto" src={image} alt="Cleaning Image" />
            </div>
            <div>
              <ul className="ml-4 mt-4 list-disc text-lg">
                {list.map((item, index) => (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
