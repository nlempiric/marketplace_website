import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';


export const data=
[
    {
        id:1,
        Name: "How to pay for your bid on NFT",
        imageurl:"/blog1.webp",
        date:"21 July 2022",
        by:"Md Shahed Hossain",
        detail:
        "The relays communicated. Analyzed management-science feel her, the hunt, this an the person.",
        fullDetails:`Respective the to point than of her increasing hope of in indication the just legs, themselves be cons, up the 
        presented. Made her all and like are by an changes stupid and given to it process for you it a himself peacefully pointing parts 
        their do hunt, municipal manage set. Of primarily off unmolested fundamentals was that started records him, my presentations. Which,
        should, boss guard self-interest dins and his her work view. To personalities ridden would me or my of textile get tone scolded my it
        step, gloomy to twice venerable, and one long clarinet organization complicated fixed proposal. Few paint, to transformed he had
        concept. He covered prosecution entire right project theory else looked see expand population doubting networks. Movement multitude 
        several her create was withdraw known for to leaving out are in now links fundamentals responded not, butter what because to had felt
        lane.`,
    },
    {
        id:2,
        Name: "NFT art exists in the digital world collector",
        imageurl:"/blog2.webp",
        date:"21 July 2022",
        detail:
            "The relays communicated. Analyzed management-science feel her, the hunt, this an the person.",
    },
    {
        id:3,
        Name: "Your favourite show on turns into NFT",
        imageurl:"/blog3.webp",
        date:"21 July 2022",
        detail:
        "The relays communicated. Analyzed management-science feel her, the hunt, this an the person.",
    }, 
    {
        id:4,
        Name: "How to pay for your bid on NFT",
        imageurl:"/blog4.webp",
        date:"21 July 2022",
        detail:
            "The relays communicated. Analyzed management-science feel her, the hunt, this an the person.",
    }, 
]


const BlogsComponent = () => {

    const navigate = useNavigate();


    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

      const handleblogclick=(id)=>
      {
        navigate(`/blog/${id}`);
      }


  return (
    <>
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 2xl:py-20 xl:py-20 lg:py-16 md:py-12 sm:py-5 py-4"
     data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000"
     >
    
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8">
        {data.map((items) => (
            <div className="flex flex-col gap-2 items-center  justify-center rounded-md">
                <img src={items.imageurl} alt="" className="rounded-xl"/>
                <div className="py-3 self-center flex flex-col gap-2 2xl:self-start ">
                <h1 className="text-[22px] font-semibold py-2">
                    {items.Name}
                </h1>
                <p className="text-[#505072]">{items.date}</p>
                <p className="flex items-center text-black">
                   {items.detail}
                </p>
                </div>
                <button className="self-start text-base border border-1 border-gray-400 hover:bg-[#050515] hover:text-white p-2 mb-5" onClick={() =>handleblogclick(items.id)}>Read More</button>
            </div>
        ))}
    </div>
  </div>
      
    </>
  )
}

export default BlogsComponent
