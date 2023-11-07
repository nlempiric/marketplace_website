import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from '../component/Heading';
import BlogsComponent from '../component/BlogsComponent';
import { motion } from "framer-motion";


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
      >
         <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9 }}
          className="box"
        >
        <Heading headingName="Blog"/>
        </motion.div>
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
