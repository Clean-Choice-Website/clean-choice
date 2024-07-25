const BlogCard = ({ Pic, HeadLine, Text, Path }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href={Path}>
        <img className="rounded-t-lg" src={Pic} alt="Clean Office" />
      </a>
      <div className="p-5">
        <a href={Path}>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {HeadLine}
          </h2>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Text}
        </p>
        <a
          href={Path}
          className="inline-flex items-center rounded-lg bg-logoGreen px-3 py-2 text-center text-sm font-medium text-white hover:bg-logoGreenHover focus:outline-none"
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
