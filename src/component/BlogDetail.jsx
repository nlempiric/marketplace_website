import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { data } from './BlogsComponent';
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail = () => {
    const router =useParams();
    const blogdata=data.find((item)=>item.id==router.id);

    useEffect(() => {
      AOS.init({
        once: true,
      });
    }, []);

  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 py-14 flex flex-col gap-8"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000">
      
      <h1 className="text-[25px] 2xl:text-[48px] xl:text-[48px] lg:text-[45px] md:text-[35px] sm:text-[25 px]">{blogdata.Name}</h1>
      <p>By <span className="font-semibold">{blogdata.by}</span></p>
      <img src={blogdata.imageurl} alt="" />
      <p className="text-[#505072]">{blogdata.fullDetails}</p>
    </div>
  )
}

export default BlogDetail
