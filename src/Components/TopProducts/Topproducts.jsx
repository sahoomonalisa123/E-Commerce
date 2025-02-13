import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import {FaStar} from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium quod commodi",

    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium quod commodi",

    }, {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium quod commodi",

    },
]

const Topproducts = ({handleOrderPopup}) => {
  return (
    <div className="container">
        <div className="text-left mg-24">
            <p data-aos="fade-up" className="text-sm text-primary"> Top Rated products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos ipsa veniam molestiae
                 atque deserunt placeat. Ullam numquam fuga illum quis amet sequi neque accusantium
                 tempore, provident saepe obcaecati nesciunt?
            </p>
            <div>
                <div className=''></div>
            </div>
        </div>
    </div>
  )
}

export default Topproducts
