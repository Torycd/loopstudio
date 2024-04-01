import Navigation from "./Navigation";

import desktopHeader from "../assets/desktop/image-hero.jpg"
import smallHeader from "../assets/mobile/image-hero.jpg"
import Hero from "./Hero";

const Header = () => {
  return (
    <div
    className="w-[100%]"
      style={{
        backgroundImage: `url(${
          window.innerWidth < 375 ? smallHeader : desktopHeader
        })`,
        backgroundSize: "cover auto",
        backgroundPosition: "cover",
        height: "100vh",
        width: "100%"
      }}
    >
      <Navigation />
      <Hero/>
    </div>
  );
};

export default Header;
