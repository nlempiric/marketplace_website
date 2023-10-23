import React from 'react'
import { FaPenNib, FaBox } from 'react-icons/fa';
import { IoCube } from 'react-icons/io5';

const AboutMyService = () => {

    const data = [
        {
          Name: "Digital Illustration",
          icon: <FaPenNib fill="white" />,
          detail:
            "For all frequency framework such like statement domed her, were quite slept the stage hundreds to next to do fellow.",
        },
        {
          Name: "3D Modelling",
          icon: <IoCube fill="white" />,
          detail:
            "For all frequency framework such like statement domed her, were quite slept the stage hundreds to next to do fellow.",
        },
        {
          Name: "Motion Graphics",
          icon: <FaBox fill="white" />,
          detail:
            "For all frequency framework such like statement domed her, were quite slept the stage hundreds to next to do fellow.",
        },
      ];
  return (
    <div
      className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 2xl:my-10 py-20"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
        <div className="flex flex-col items-center text-center pb-14 2xl:mx-52 xl:mx-32 lg:mx-20 gap-5">
            <h1 className="text-4xl font-semibold">
              My Services
            </h1>
            <p className="text-[#505072]">
                By maintain didn't found horn a while hiding has that managers, back it the mice again musical approved 
            </p>
        </div>
      
      <div
        className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 "
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        {data.map((items) => (
          <div className="flex flex-col gap-2 items-center p-8 justify-center rounded-xl bg-white">
            <div className="bg-[#050515] self-start p-5 rounded-full text-3xl">
            {/* <div className="bg-gradient-to-r from-[#f2ebd9] to-[#d1dfe5] via-[#dfe8dd]  p-5 rounded-full text-3xl self-start"> */}
              {items.icon}
            </div>
            <div className="py-3 self-center 2xl:self-start ">
              <h1 className="text-[20px] font-semibold py-3">
                {items.Name}
              </h1>
              <p className="flex items-center text-[#505072]">
                {items.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutMyService
