import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from './BlogsComponent';

const BlogDetail = () => {
    const router =useParams();
    console.log("routerrrrrr id-->>",router.id);

    const blogdata=data.find((item)=>item.id==router.id);
    console.log("blogdataaaaa",blogdata)

  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 py-14 flex flex-col gap-8">
      
      <h1 className="text-[48px]">{blogdata.Name}</h1>
      <p>By <span className="font-semibold">{blogdata.by}</span></p>
      <img src={blogdata.imageurl} alt="" />
      <p className="text-[#505072]">{blogdata.fullDetails}</p>
    </div>
  )
}

export default BlogDetail
