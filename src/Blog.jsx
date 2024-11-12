import ContactInfo from "./components/ContactInfo";
import BlogCard from "./components/BlogCard";
import Floor from "./assets/FloorCare.png";
import Clean from "./assets/EssentialCleaning.jpg";
import WhyUs from "./assets/CommercialCleaning.png";
import Airport from "./assets/Airport.jpg";
import Carpet from "./assets/CarpetCleaning.jpg";
import Deep from "./assets/DeepCleaning.jpg";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { scrollToTop } from "./utils/scrollToTop";
import { MoonLoader } from "react-spinners";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      new Promise((resolve) => {
        const img1 = new Image();
        img1.src = Floor;
        img1.onload = resolve;
      }),
      new Promise((resolve) => {
        const img2 = new Image();
        img2.src = Clean;
        img2.onload = resolve;
      }),
      new Promise((resolve) => {
        const img3 = new Image();
        img3.src = WhyUs;
        img3.onload = resolve;
      }),
      new Promise((resolve) => {
        const img4 = new Image();
        img4.src = Airport;
        img4.onload = resolve;
      }),
      new Promise((resolve) => {
        const img5 = new Image();
        img5.src = Carpet;
        img5.onload = resolve;
      }),
      new Promise((resolve) => {
        const img6 = new Image();
        img6.src = Deep;
        img6.onload = resolve;
      }),
    ];

    Promise.all(imagePromises).then(() => {
      setIsLoading(false);
      scrollToTop();
    });
  }, []);

  return (
    <div>
      <Helmet>
        {/* Google Analytics tracking code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16595064549"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16595064549');
          `}
        </script>
        <title>
          Clean Choice Blog: Insights and Tips on Commercial Cleaning
        </title>
        <meta
          name="description"
          content="Explore the Clean Choice Blog for expert insights and tips on commercial cleaning. Stay informed about the latest trends, best practices, and benefits of maintaining a clean and healthy workspace."
        />
      </Helmet>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <MoonLoader color={"#497429"} />
        </div>
      ) : (
        <div>
          <ContactInfo />
          <div className="mx-auto mb-8 flex max-w-6xl flex-col items-center px-5">
            <h1 className="my-8 text-4xl font-semibold">Clean Choice Blog</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <BlogCard
                Pic={Clean}
                HeadLine="Why Commercial Cleaning is Essential for Businesses: Cleaning Services"
                Text="Commercial cleaning goes beyond the regular dusting and mopping. It involves deep cleaning services that reach every nook and cranny of the workplace."
                Path="/essential-cleaning"
              />
              <BlogCard
                Pic={Carpet}
                HeadLine="Extend the Life of Your Carpets: The Benefits of Professional Carpet Cleaning"
                Text="Professional carpet cleaning uses advanced equipment and techniques to deep clean carpets, removing dirt and contaminants that regular cleaning cannot."
                Path="/carpet-cleaning"
              />
              <BlogCard
                Pic={Deep}
                HeadLine="Revitalize Your Workspace: The Essential Guide to Spring Deep Cleaning"
                Text="Investing in a professional spring deep cleaning service is essential for maintaining a healthy, productive, and professional business environment."
                Path="/deep-cleaning"
              />
              <BlogCard
                Pic={Floor}
                HeadLine="Shine On: The Importance of Regular Floor Scrubbing for Your Business"
                Text="Clean and well-maintained floors create a positive impression, reflecting the professionalism and attention to detail of your business."
                Path="/floor-scrubbing"
              />
              <BlogCard
                Pic={WhyUs}
                HeadLine="Discover the Difference: Why Our Commercial Cleaning Services Stand Out"
                Text="Choosing the right commercial cleaning company or service can make a significant difference in the cleanliness and maintenance of your business."
                Path="/why-clean-choice"
              />
              <BlogCard
                Pic={Airport}
                HeadLine="Keeping the Skies Clean: The Critical Role of Airport Cleaning Services"
                Text="Professional airport cleaning services play a crucial role in ensuring a safe, clean, and pleasant environment for passengers and staff alike."
                Path="/airport-cleaning"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
