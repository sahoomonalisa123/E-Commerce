import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Topproducts from "./Components/TopProducts/Topproducts";
import Suscribe from "./Components/Subscribe/Suscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

function App() {
     const [ orderPopup, setOrderPopup] = useState(false);

     const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
     };


     useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      Aos.refresh();
     }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products/>
        <Topproducts handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Suscribe/>
        <Testimonials/>
        <Footer/>
      
      </div>
    
    </>
  )
}

export default App
