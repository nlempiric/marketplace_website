import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetail from '../component/BlogDetail';

const BlogDetailPage = () => {

    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

  return (
    <div
        // data-aos="fade-up"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="1000"
        >
      <BlogDetail/>
    </div>
  )
}

export default BlogDetailPage
