import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from '../component/Heading';
import BlogsComponent from '../component/BlogsComponent';

const BlogPage = () => {

    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

  return (
    <>
      <div
        className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <Heading headingName="Blog"/>
      </div>

      <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000">
        <BlogsComponent/>
      </div>
    </>
  )
}

export default BlogPage
