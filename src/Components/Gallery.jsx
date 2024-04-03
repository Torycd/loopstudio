// import React from 'react';
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
  // const isDesktop = useMediaQuery({ query: breakpoints.desktop });

  return (
    <div className="px-5 py-10 md:px-20 md:py-20 grid grid-cols-1 gap-2 lg:grid-cols-4">
      {DUMMY_DATA.map((itm) => (
        <div
          key={itm.name}
          className="w-full"
          style={{
            backgroundImage: `url(${
              isMobile ? itm.mobileImage : itm.desktopImage
            })`,
            backgroundSize: "cover",
            height: isMobile ? "200px" : isTablet ? "300px" : "600px",
          }}
        ></div>
      ))}
      <button className="hidden md:block border-4 px-7 py-3 tracking-widest border-black hover:bg-black hover:text-white transition-all delay-200">
        See all
      </button>
    </div>
  );
};

export default Gallery;
