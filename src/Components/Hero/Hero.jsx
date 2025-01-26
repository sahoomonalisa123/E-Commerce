import React from 'react'
import Image1 from "../../assets/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

import Slider from "react-slick";

const ImageList = [
    {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore ipisicing elit. Quia, inventoipisicing elit. Quia, inventoipisicing elit. Quia, inventoipisicing elit. Quia, inventoipisicing elit. Quia, invento."
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam facere non doloribus ipsum dicta neque veritatis officiis aliquid quisquam adipisci.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro non ut laudantium eos. Consectetur, est! Ratione nisi in fugiat molestiae. Aliquam corporis iste ratione consectetur impedit ullam odit ea porro.",
    }, 
];

const Hero = ({handelOrderPopup}) => {

  var setting = {
    dots: false,
    arrows: false,
    infinite:true,
    speed: 800,
    slideToScroll: 1,
    autoplay: true,
    autoplay: 4000,
    cssEase: "ease-in-out",
    pauseonHover: false,
    pauseOnFocus: true,
  };
  return  <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-green-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300">
    <div className="h-[700px] w-[700px] bg-primary/40 absolute-top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
    
  </div>
}

export default Hero
