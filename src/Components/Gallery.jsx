import { useMediaQuery } from "react-responsive";
import { DUMMY_DATA } from "./Data";

const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};

const Gallery = () => {
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isTablet = useMediaQuery({ query: breakpoints.tablet });

  return (
    <div className="px-5 py-10 md:px-20 md:py-20 grid grid-cols-1 gap-2 lg:grid-cols-4">
      {DUMMY_DATA.map((itm) => (
        <div
          key={itm.mobileImage}
          className="relative w-full"
          style={{
            backgroundImage: `url(${
              isMobile ? itm.mobileImage : itm.desktopImage
            })`,
            backgroundSize: "cover",
            height: isMobile ? "200px" : isTablet ? "300px" : "600px",
          }}
        >
          <div className="absolute bottom-0 left-0 w-full opacity-80  p-4 text-white  uppercase font-Josefin text-[30px]">
            <h2>{itm.name1}</h2>
            <h2>{itm.name2}</h2>
          </div>
        </div>
      ))}
      <div className="flex justify-center md:hidden mt-5">
        <button className=" border-4 px-7 py-3  border-black hover:bg-black hover:text-white transition-all delay-200">
          See all
        </button>
      </div>
    </div>
  );
};

export default Gallery;
