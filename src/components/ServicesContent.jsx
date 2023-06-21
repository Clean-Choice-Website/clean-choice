const ServicesContent = ({ image, name, info, list, row }) => {
  return (
    <div className={row}>
      <div className="md:mt-2 lg:basis-1/2">
        <img
          className="hidden max-w-xl lg:block lg:w-auto"
          src={image}
          alt="Cleaning Image"
        />
      </div>
      <div className="lg:basis-1/2">
        <div className="my-4 text-center lg:mt-2 lg:text-left">
          <h3 className="text-3xl font-bold">{name}</h3>
        </div>
        <div className="items-start">
          <p className="py-2 md:px-0">{info}</p>
          <div className="mt-2">
            <div>
              <img
                className="w-auto lg:hidden"
                src={image}
                alt="Cleaning Image"
              />
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
