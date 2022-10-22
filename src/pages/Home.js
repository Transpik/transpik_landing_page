import React from "react";
import SignupCard from "../components/SignupCard/SignupCard";
import ecommerce_png from "../assets/undraw_add_to_cart_re_wrdo.png";
import delivery_png from "../assets/undraw_deliveries_2r4y.png";
import stream_png from "../assets/stream.png";
import mobile_app from "../assets/mobile-app.png";
import delivery from "../assets/delivery.png";
import grocery from "../assets/1.jpg";
import pharmacy from "../assets/2.jpg";
import reataurant from "../assets/3.jpg";
import courier from "../assets/4.jpg";
import furniture from "../assets/5.jpg";
import construction from "../assets/6.jpg";
import beverages from "../assets/7.jpg";
import ecommerce from "../assets/9.jpg";
import shopping from "../assets/10.jpg";
import meals from "../assets/11.jpg";




import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//import { Carousel } from 'react-responsive-carousel';
//import { Carousel } from 'better-react-carousel';
import { Link } from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1 };
    return (
      <div className="font-poppins">
        <div className="text-dark-gray flex justify-between items-center container mx-auto mt-24">
          <div>
            <p className="text-4xl font-bold">Power your deliveries</p> <br></br>
            <p className="w-[296px] text-xl font-normal">
            Delight customers, scale operations, and boost efficiency with the world's most advanced logistics software.
            </p>
            <div className="bg-orange w-[182px] h-12 rounded-lg flex justify-center items-center mt-16">
              <Link to="pricing" className="font-medium text-base font-poppins text-white">
                Check Pricing
              </Link>
            </div>
          </div>
          <div className="flex">
            <SignupCard
              className="mr-12"
              src={ecommerce_png}
              description="Leverage the power of Transpik API by Including it in your web platform to accomplish all the delivery related tasks."
            />
            <SignupCard
              src={delivery_png}
              description="Register to the Transpik API to use the technical layer which is enhanced for managing all your delivery stuffs."
            />
          </div>
        </div>
        <div className="bg-rose-100">
          <div className="font-semibold text-5xl mt-24 text-dark-gray text-center">
            <br></br>Delivering last mile solutions
          </div>
          <div className="text-center mt-8 text-xl text-gray-500">
            Transpik is the trusted last mile delivery solution <br></br>for many companies including e-commerce, furniture, pharmacy and more. 
          </div> <br></br> <br></br>
        </div>

        {/* <Carousel cols={2} rows={1} gap={10} loop>
          <div>
              <img src= {grocery} width="20%" />
              <p className="legend">Grocery</p>
         
              <img src= {pharmacy} width="20%" />
              <p className="legend">Pharmacy</p>
          </div>
          <div>
              <img src="../assets/2.jpg" />
              <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
        <br></br> <br></br>
        <div>
          <Slider {...settings}>
            <div>
              <img src= {grocery} />
              <p className="text-center">Grocery</p>
            </div>
            <div>
              <img src= {pharmacy} />
              <p className="text-center">Pharmacy</p>
            </div>
            <div>
              <img src= {reataurant} />
              <p className="text-center">Restaurant</p>
            </div>
            <div>
              <img src= {courier} />
              <p className="text-center">Courier</p>
            </div>
            <div>
              <img src= {furniture} />
              <p className="text-center">Furniture</p>
            </div>
            <div>
              <img src= {construction} />
              <p className="text-center">Construction</p>
            </div>
            <div>
              <img src= {beverages} />
              <p className="text-center">Beverages</p>
            </div>
            <div>
              <img src= {ecommerce} />
              <p className="text-center">E-commerce</p>
            </div>
            <div>
              <img src= {shopping} />
              <p className="text-center">Shopping</p>
            </div>
            <div>
              <img src= {meals} />
              <p className="text-center">Meals</p>
            </div>
            
          </Slider>
        </div>

     


            

        <div className="font-semibold text-5xl mt-24 text-dark-gray text-center">
          <br></br>A complete toolkit for last mile <br></br>delivery
        </div>
        <div className="text-center mt-8 text-xl text-gray-500">
          Transpik's end-to-end route planning, dispatch, communication and analytics <br></br> platform handles the heavy lifting so you can focus on your customers.
        </div>

        <div className="bg-rose-100">
          <div className="font-semibold text-3xl mt-24 text-dark-gray ml-64">
            <br></br>Streamline operations
          </div>
          <div className="ml-64 mt-8 text-xl text-gray-500">
          Take your delivery operations to the next level<br></br>  with advanced route optimization, AI-based <br></br> automated dispatch and ETAs, real-time <br></br> tracking and powerful analytics.
            <img
                className = "block h-64 w-auto}"
                src={stream_png}
                alt="computer"
            ></img>
          </div>
          <br></br><br></br>
        </div>

        <div className>
          <div className="font-semibold text-3xl mt-2 text-dark-gray ml-96">
            <br></br>Delight customers
          </div>
          <div className="ml-96 mt-8 text-xl text-gray-500 ">
          Automatic SMS notifications, accurate ETAs, <br></br> real-time driver tracking, proof-of-delivery and <br></br>feedback collection tools ensure every delivery is a <br></br>delightful experience.
          <img
              className = "block h-64 w-auto"
              src={mobile_app}
              alt="computer"
          ></img>
          </div> 
          <br></br><br></br>
        </div>

        <div className="bg-rose-100">
          <div className="font-semibold text-3xl mt-24 text-dark-gray ml-64">
            <br></br>Integrate anything
          </div>
          <div className="ml-64 mt-8 text-xl text-gray-500">
            Seamlessly connect your website, mobile app, online <br></br> ordering system, ERP or inventory management system with <br></br> our developer-friendly API.
          <img
              className = "block h-64 w-auto"
              src={delivery}
              alt="computer"
          ></img>
          </div> 
          <br></br><br></br>
        </div>

      </div>
    );
  }
}

export default Home;