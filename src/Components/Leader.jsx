import InteractiveDesktop from "../assets/desktop/image-interactive.jpg";
import InteractiveMobile from "../assets/mobile/image-interactive.jpg"

const Leader = () => {
  return (
    <div className="px-5 py-10 md:px-20 md:py-20 grid lg:grid-cols-2 font-Josefin">
      <div className="w-[100%] lg:w-[100%] flex items-center justify-center">
        <img src={InteractiveDesktop} className="hidden md:block" />
        <img src={InteractiveMobile} className="md:hidden"/>
      </div>
      <div className="lg:-translate-x-1/3 w-[100%] lg:w-[100%] flex items-end">
        <div className="bg-white px-10 md:px-20  pt-10 md:pt-20 text-center lg:text-left space-y-5 ">
          <h2 className="text-[30px] md:text-[50px]">
            The LEADER IN INTERACTIVE VR
          </h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leader;
