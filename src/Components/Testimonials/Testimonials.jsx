import React from 'react'
import Slider from "react-slick";

const TestimonialsData = [
    {
        id: 1,
        name:"Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti iusto incidunt esse eos accusantium voluptas magnam rerum fugiat quibusdam, laborum iure dolor,",
        img: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name:"Satya",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti iusto incidunt esse eos accusantium voluptas magnam rerum fugiat quibusdam, laborum iure dolor,",
        img: "https://picsum.photos/200/300",
    }, 
    {
        id: 3,
        name:"Virat Vikram",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti iusto incidunt esse eos accusantium voluptas magnam rerum fugiat quibusdam, laborum iure dolor,",
        img: "https://picsum.photos/200/300",
    },
    {
        id: 4,
        name:"Kachra",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti iusto incidunt esse eos accusantium voluptas magnam rerum fugiat quibusdam, laborum iure dolor,",
        img: "https://picsum.photos/200/300",
    },
    {
        id: 5,
        name:"Lalit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti iusto incidunt esse eos accusantium voluptas magnam rerum fugiat quibusdam, laborum iure dolor,",
        img: "https://picsum.photos/200/300",
    },
]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed:500,
        slideToscroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
               breakpoint: 10000,
               settings: {
                slideToShow: 3,
                slideToScroll: 1,
                infinite: true,
               } 
            },
            {
                breakpoint: 1024,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    initialSlider: 2,
                }
            },
            {
               breakpoint: 640,
               settings: {
                slideToShow: 1,
                slideToScroll: 1,
               }
            }
        ]
    }
  return (
    <div className="py-10 mb-10">
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">
                    What out customers are saying
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Testomonials</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsam dolore molestiae impedit ad. Magni molestiae inventore delectus dolores aliquid!
                </p>
            </div>
            <div data-aos="zoom-in">
                <slider {...settings}>
                  {TestimonialsData.map((data) => (
                    <div className="my-6">
                        <div
                        key={data.id}
                        className="flex flex-col gap-4 shadow-ig py-8 px-6 mx-4 rounded-xl
                        dark:bg-slate-600 bg-primary/10 relative">
                         <div className="mb-4">
                            <img src={data.img} alt="" className="rounded-full w-20 h-20"/>
                         </div>
                         <div className="flex flex-col items-center gap-4" >
                            <div className="space-y-3">
                                <p className="text-xs dark:text-slate-300 text-gray-500">
                                    {data.text}
                                </p>
                                <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                                {data.name}
                                </h1>
                            </div>
                         </div>
                         <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">  </p>
                        </div>
                    </div>
                  ))}
                </slider>

            </div>
        </div>
    </div>
      
  )
}

export default Testimonials
