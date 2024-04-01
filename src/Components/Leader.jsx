// import React from 'react'
import InteractiveDesktop from "../assets/desktop/image-interactive.jpg";

const Leader = () => {
  return (
    <div className="px-5 py-10 md:px-20 md:py-20 flex flex-col md:flex-row">
      <div className="w-[100%] md:w-[60%]">
        <img src={InteractiveDesktop} />
      </div>
      <div className="-translate-x-1/4 md:w-[60%] flex items-end">
        <div className="bg-white px-20 pt-20 space-y-5">
          <h2 className="text-[20px] md:text-[50px]">
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
